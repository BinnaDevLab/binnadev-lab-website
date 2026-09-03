"use server";

import { Resend } from "resend";
import { InquiryNotification } from "@/emails/InquiryNotification";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitInquiry(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const organization = formData.get("organization") as string;
    const details = formData.get("details") as string;

    if (!name || !email || !organization || !details) {
      return { success: false, error: "Missing required fields" };
    }

    // You can set these in your .env, or hardcode them here
    const SENDER_EMAIL = process.env.SENDER_EMAIL || "noreply@binnadev.com";
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "obinna@binnadev.com"; // Your receiving email

    const { data, error } = await resend.emails.send({
      from: `BinnaDev Lab <${SENDER_EMAIL}>`,
      to: [CONTACT_EMAIL],
      subject: `New Collaboration Inquiry from ${name}`,
      replyTo: email,
      react: InquiryNotification({ name, email, organization, details }),
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    console.log("Resend Transmission Success:", data);

    return { success: true };
  } catch (err) {
    console.error("Server Action Error:", err);
    return { success: false, error: "Internal server error" };
  }
}
