"use server";

export async function subscribeNewsletter(formData: FormData) {
  try {
    const email = formData.get("email") as string;

    if (!email) {
      return { success: false, error: "Email is required" };
    }

    const API_KEY = process.env.BREVO_API_KEY;
    const LIST_ID = process.env.BREVO_LIST_ID;

    if (!API_KEY || !LIST_ID) {
      console.error("Missing Brevo environment variables");
      return { success: false, error: "Newsletter service is misconfigured" };
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(LIST_ID, 10)],
        updateEnabled: true, // Update if the contact already exists
      }),
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    if (!response.ok) {
      console.error("Brevo API Error:", data);
      return { success: false, error: data.message || "Failed to subscribe" };
    }

    return { success: true };
  } catch (err) {
    console.error("Server Action Error:", err);
    return { success: false, error: "Internal server error" };
  }
}
