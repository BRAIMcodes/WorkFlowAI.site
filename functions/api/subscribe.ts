import { Resend } from 'resend';

export const onRequestPost = async ({ request, env }) => {
  const resend = new Resend(env.RESEND_API_KEY);
  
  try {
    const formData = await request.formData();
    const email = formData.get('email');
    const audienceId = 'd0949011-ca82-4ada-a5b4-e4842c371c54';

    if (!email) {
      return new Response(JSON.stringify({ message: "Email is required" }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const response = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: audienceId,
    });

    if (response.error) {
       return new Response(JSON.stringify({ message: response.error.message }), { 
         status: 500,
         headers: { 'Content-Type': 'application/json' }
       });
    }

    return new Response(JSON.stringify({ message: "Success!" }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ message: "Server error: " + error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
