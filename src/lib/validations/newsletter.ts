// lib/validation/newsletter.ts
import { z } from "zod";

export const newsletterFormSchema = z.object({
  email: z.email({ message: "Please enter a valid email address" }),
  firstName: z
    .string()
    .max(50, { message: "First name must be less than 50 characters" }),
    // Allow empty string
  receiveUpdates: z.boolean(),
  interests: z.array(z.string()), // Changed to default([])
});

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>;
