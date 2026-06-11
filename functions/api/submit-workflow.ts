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
    const title = formData.get('title')?.toString() || 'Untitled Recipe';
    const tool = formData.get('tool')?.toString() || 'n8n';
    const apps = formData.get('apps')?.toString() || 'None';
    const saved = formData.get('saved')?.toString() || 'Not specified';
    const desc = formData.get('desc')?.toString() || 'No description';
    const prompt = formData.get('prompt')?.toString() || 'None';
    const blueprint = formData.get('blueprint')?.toString() || 'None';
    const email = formData.get('email')?.toString() || 'Not provided';

    // Default to the custom domain email. 
    // Cloudflare email routing redirects these to the user's destination, and verifying the domain on Resend activates it.
    const sender = env.RESEND_SENDER_EMAIL || 'WorkflowAI Submissions <submit@workflowai.site>';
    const recipient = env.RESEND_RECIPIENT_EMAIL || 'submit@workflowai.site';

    const response = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email !== 'Not provided' ? email : undefined,
      subject: `[WorkflowAI Submission] New recipe: ${title}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e5e7eb; border-radius: 16px; color: #1f2937; line-height: 1.6;">
          <h2 style="color: #4f46e5; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">New AI Workflow Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 140px; color: #6b7280; font-size: 13px;">Workflow Title:</td>
              <td style="padding: 6px 0; font-weight: bold; color: #1f2937;">${title}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #6b7280; font-size: 13px;">Primary Tool:</td>
              <td style="padding: 6px 0;"><span style="background-color: #e0e7ff; color: #4338ca; padding: 3px 8px; border-radius: 6px; font-size: 12px; font-weight: 600;">${tool}</span></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #6b7280; font-size: 13px;">Connected Apps:</td>
              <td style="padding: 6px 0; color: #4b5563;">${apps}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #6b7280; font-size: 13px;">Est. Time Saved:</td>
              <td style="padding: 6px 0; color: #10b981; font-weight: 600;">${saved}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #6b7280; font-size: 13px;">Submitter Email:</td>
              <td style="padding: 6px 0; color: #4b5563;">${email}</td>
            </tr>
          </table>
          
          <h4 style="color: #374151; margin-top: 25px; margin-bottom: 8px;">Description / Problem Solved:</h4>
          <div style="background-color: #f9fafb; padding: 12px 16px; border: 1px solid #f3f4f6; border-radius: 8px; white-space: pre-wrap; font-size: 14px; color: #374151;">${desc}</div>
          
          <h4 style="color: #374151; margin-top: 25px; margin-bottom: 8px;">System AI Prompt:</h4>
          <div style="background-color: #f9fafb; padding: 12px 16px; border: 1px solid #f3f4f6; border-radius: 8px; white-space: pre-wrap; font-family: monospace; font-size: 12px; color: #111827; border-left: 3px solid #6366f1;">${prompt}</div>
          
          <h4 style="color: #374151; margin-top: 25px; margin-bottom: 8px;">Link to Blueprint File:</h4>
          <p style="margin-top: 0;"><a href="${blueprint}" style="color: #4f46e5; text-decoration: underline; font-weight: 500;">${blueprint}</a></p>
          
          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #e5e7eb;" />
          <p style="font-size: 11px; color: #9ca3af; text-align: center; margin-top: 15px;">Submitted via workflow builder form at WorkFlowAI.site</p>
        </div>
      `
    });

    if (response.error) {
      return new Response(JSON.stringify({ 
        message: `Email delivery failed: ${sanitizeError(response.error.message)}. If your Resend account is in sandbox mode, please ensure the recipient is your registered email, or verify your domain.` 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ message: "Workflow recipe submitted successfully!" }), { 
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
