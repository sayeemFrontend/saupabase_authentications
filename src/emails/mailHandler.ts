import { Resend } from 'resend';

export const resend = new Resend('re_Jj8bvngK_Ad12HBvBac8GLP7eSSkZ8miW');

export const sendEmail = async () => {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer your_api_key`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Your Name <your-email@example.com>',
        to: 'recipient@example.com',
        subject: 'Hello!',
        html: '<strong>This is a test email.</strong>',
      }),
    });

    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.error('Failed to send email:', response.statusText);
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
