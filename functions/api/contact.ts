import { Resend } from 'resend';

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
    const name = formData.get('name')?.toString() || 'Anonymous';
    const email = formData.get('email')?.toString();
    const message = formData.get('message')?.toString();

    if (!email || !message) {
      return new Response(JSON.stringify({ message: "Email and message are required." }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Try sending the email.
    // If the user has verified workflowai.site on Resend, they can send from contact@workflowai.site.
    // Otherwise, we fallback to onboarding@resend.dev which only works for sending to their verified sandbox email.
    const sender = env.RESEND_SENDER_EMAIL || 'WorkflowAI Contact <onboarding@resend.dev>';
    const recipient = env.RESEND_RECIPIENT_EMAIL || 'hello@workflowai.site';

    const response = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: `[WorkflowAI Contact] Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; color: #1f2937;">
          <h2 style="color: #4f46e5; margin-bottom: 20px;">New Contact Form Message</h2>
          <p style="margin-bottom: 8px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 8px;"><strong>Email:</strong> ${email}</p>
          <p style="margin-bottom: 20px;"><strong>Message:</strong></p>
          <div style="white-space: pre-wrap; background-color: #f3f4f6; padding: 15px; border-radius: 8px; font-size: 14px; line-height: 1.5; border: 1px solid #e5e7eb;">${message}</div>
          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #e5e7eb;" />
          <p style="font-size: 11px; color: #6b7280; text-align: center; margin-top: 15px;">Submitted via contact page at WorkFlowAI.site</p>
        </div>
      `
    });

    if (response.error) {
      return new Response(JSON.stringify({ 
        message: `Resend error: ${response.error.message}. If your Resend account is in sandbox mode, please ensure the recipient is your registered email, or verify your domain.` 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ message: "Message sent successfully!" }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ message: "Server error: " + error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
