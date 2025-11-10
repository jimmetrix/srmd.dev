"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

interface FormState {
    message: string;
}

export async function submitContactForm(
    _prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const firstName = (formData.get("first-name") as string) || "";
    const lastName = (formData.get("last-name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const type = (formData.get("type") as string) || "";
    const message = (formData.get("message") as string) || "";
    
    if (!email || !message) {
        return { message: "Please provide an email and a message."};
    }

    try {
        await resend.emails.send({
            from: `Portfolio Contact <${process.env.FROM_EMAIL}>`,
            to: process.env.TO_EMAIL!,
            subject: `New inquiry (${type || "General"}) from ${firstName} ${lastName}`.trim(),
            replyTo: email,
            html: `
                <h2>New Portfolio Inquiry</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Interest:</strong> ${type}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br/>")}</p>
            `,
        });

        return { message: "Thanks! I'll get back to you soon." };
    } catch (error) {
        console.error("Failed to send email:", error);
        return { message: "Something went wrong. Please try again later or Email me directly."}
    }
}

