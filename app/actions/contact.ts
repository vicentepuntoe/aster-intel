'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(formData: FormData) {
  const name = formData.get('name') as string;
  const company = formData.get('company') as string;
  const role = formData.get('role') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'contact@asterintel.com', // Replace with actual email
      subject: `Contact Form: ${name} from ${company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send message' };
  }
}
