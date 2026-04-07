"use server";

import { mail } from "@/env";
import { sendEmail } from "../mail/nodemailer";
import { handleErrors } from "../utils";
import { contactTemplate } from "../mail/template";
import { contactFormSchemaType } from "../validations";

export async function sendMail(data: contactFormSchemaType) {
  const options = {
    from: data.email,
    to: mail.auth.user,
    subject: data.subject,
    text: `${data.fullName} with email: ${data.email} and phone ${data.phone}
    reached out from: ${data.state}, 
    for: ${data.subject} 
    with the following message: ${data.message}.
    `,
    html: contactTemplate(data),
  };
  try {
    await sendEmail(options);
  } catch (error) {
    return { error: handleErrors(error) };
  }
}
