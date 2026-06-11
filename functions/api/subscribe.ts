import { Resend } from 'resend';

const sanitizeError = (msg: string): string => {
  if (!msg) return '';
  return msg.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[redacted]');
};

export const onRequestPost = async ({ request, env }) => {
  if (!env.RESEND_API_KEY) {
    return new Response(JSON.stringify({ message: "RESEND_API_KEY is not configured in Cloudflare environment variables." }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const resend = new Resend(env.RESEND_API_KEY);
  
  try {
    const formData = await request.formData();
    const email = formData.get('email');

    if (!email) {
      return new Response(JSON.stringify({ message: "Email is required" }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Dynamic audience selection or creation
    let targetAudienceId = '';
    
    try {
      const audiencesList = await resend.audiences.list();
      if (audiencesList.error) {
        throw new Error(audiencesList.error.message);
      }
      
      if (audiencesList.data && audiencesList.data.length > 0) {
        // Use the first audience found
        targetAudienceId = audiencesList.data[0].id;
      } else {
        // No audience exists - create a new one called "WorkflowAI Newsletter"
        const newAudience = await resend.audiences.create({ name: 'WorkflowAI Newsletter' });
        if (newAudience.error) {
          throw new Error(newAudience.error.message);
        }
        if (newAudience.data) {
          targetAudienceId = newAudience.data.id;
        }
      }
    } catch (audError: any) {
      console.error('Error fetching or creating Resend audience:', audError);
      return new Response(JSON.stringify({ message: `Resend API Error: ${sanitizeError(audError.message)}. Please verify your Resend account has active domains.` }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!targetAudienceId) {
      return new Response(JSON.stringify({ message: "Could not retrieve or create a Resend contact audience." }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const response = await resend.contacts.create({
      email: email.toString(),
      unsubscribed: false,
      audienceId: targetAudienceId,
    });

    if (response.error) {
       return new Response(JSON.stringify({ message: sanitizeError(response.error.message) }), { 
         status: 500,
         headers: { 'Content-Type': 'application/json' }
       });
    }

    return new Response(JSON.stringify({ message: "Success!" }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ message: "Server error: " + sanitizeError(error.message) }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
