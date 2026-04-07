// app/api/newsletter/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";
import { newsletterFormSchema } from "@/lib/validations/newsletter";
import z from "zod";
import NewsletterSubscriber from "@/lib/database/models/newsletter.models";
import { connectToDatabase } from "@/lib/database";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const validatedData = newsletterFormSchema.parse(body);

    // Check if email already exists
    const existingSubscriber = await NewsletterSubscriber.findOne({
      email: validatedData.email,
    });

    if (existingSubscriber) {
      return NextResponse.json(
        { message: "Email already subscribed" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const subscriber = await NewsletterSubscriber.create({
      ...validatedData,
      subscribedAt: new Date(),
      status: "active",
      source: "website_form",
    });

    // In production, integrate with email service like:
    // - SendGrid
    // - Mailchimp
    // - Resend

    return NextResponse.json(
      {
        message: "Successfully subscribed!",
        subscriberId: subscriber._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscription error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation failed", errors: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
