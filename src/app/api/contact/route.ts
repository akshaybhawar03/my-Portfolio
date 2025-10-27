import { NextResponse } from "next/server";

// If you prefer Nodemailer, we can switch. Using Resend for simplicity.
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "bhawarakshay2003@gmail.com";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Basic naive email format check
    const emailOk = /.+@.+\..+/.test(email);
    if (!emailOk) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const subject = `New Project Inquiry from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      text,
    });

    if ((result as any).error) {
      return NextResponse.json({ error: (result as any).error?.message || "Send failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Unexpected error" }, { status: 500 });
  }
}
