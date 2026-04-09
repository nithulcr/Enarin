import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type FormData = {
  name: string;
  email: string;
  number: string;
  message: string;
};

export async function POST(req: NextRequest) {
  const { name, email, number, message } = await req.json() as FormData;

  if (!name || !email || !number || !message) {
    return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `Enarin uae Website`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: 'New Contact Message from Enarin Website',
      html: `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${number}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    console.log('✅ Email sent successfully:', info.messageId);

    return NextResponse.json({ success: true }, { status: 200 });
  }
  catch (error: unknown) {
    let errorMessage = 'Failed to send email';

    if (error instanceof Error) {
      errorMessage = (error as Error).message;
      console.error('❌ Error sending email:', error);
    } else {
      console.error('❌ Unknown error sending email:', error);
    }

    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
