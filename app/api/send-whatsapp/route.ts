import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req: NextRequest) {
  try {
    const { to, message } = await req.json();

    if (!to || !message) {
      return NextResponse.json(
        { error: "Missing 'to' or 'message'" },
        { status: 400 }
      );
    }

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID!,
      process.env.TWILIO_AUTH_TOKEN!
    );

    const result = await client.messages.create({
      from: "whatsapp:+14155238886", // Twilio Sandbox
      to: `whatsapp:${to}`,
      body: message,
    });

    return NextResponse.json({ success: true, sid: result.sid });
  } catch (error: unknown) {
    console.log("TWILIO_ACCOUNT_SID:", process.env.TWILIO_ACCOUNT_SID);
    console.log("TWILIO_AUTH_TOKEN:", process.env.TWILIO_AUTH_TOKEN);
    console.log("TWILIO_PHONE_NUMBER:", process.env.TWILIO_PHONE_NUMBER);

    let errorMsg = "Unknown error";
    if (error instanceof Error) errorMsg = error.message;
    console.error("Twilio error:", errorMsg); // <-- Lägg till detta
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
