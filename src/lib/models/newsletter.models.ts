// models/NewsletterSubscriber.ts
import mongoose from "mongoose";

const NewsletterSubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
  receiveUpdates: {
    type: Boolean,
    default: true,
  },
  interests: [
    {
      type: String,
      enum: ["community", "projects", "youth", "volunteer", "donations"],
    },
  ],
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["active", "unsubscribed", "bounced"],
    default: "active",
  },
  source: {
    type: String,
    default: "website_form",
  },
  unsubscribedAt: Date,
});

const NewsletterSubscriber =
  mongoose.models.NewsletterSubscriber ||
  mongoose.model("NewsletterSubscriber", NewsletterSubscriberSchema);

export default NewsletterSubscriber;
