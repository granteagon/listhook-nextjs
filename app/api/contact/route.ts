import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema matching the frontend
const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    const { name, email, phone, company, message } = validatedData;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'ListHook Contact Form <noreply@listhook.com>',
      to: [process.env.CONTACT_EMAIL_TO || 'support@listhook.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 6px;
                border-left: 4px solid #2563eb;
              }
              .label {
                font-weight: 600;
                color: #1e3a8a;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .value {
                color: #374151;
                font-size: 16px;
              }
              .message {
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">ListHook Contact Request</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
              </div>

              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></div>
              </div>

              ${company ? `
              <div class="field">
                <div class="label">Company/Brokerage</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">Message</div>
                <div class="value message">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the ListHook contact form</p>
              <p style="margin: 5px 0 0 0;">Reply directly to this email to contact ${name}</p>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
${company ? `Company: ${company}\n` : ''}
Message:
${message}

---
This email was sent from the ListHook contact form.
Reply directly to this email to contact ${name}.
      `.trim(),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!',
      data
    });

  } catch (error) {
    console.error('Contact form error:', error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
