import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const company = formData.get("company")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    await resend.emails.send({
      from: "Larks Rope Access <onboarding@resend.dev>",
      to: "larksropeaccess@gmail.com",
      subject: `New Website Enquiry from ${name}`,
      replyTo: email,
      text: `
Name: ${name}

Email: ${email}

Phone: ${phone}

Company: ${company}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
