// components/forms/NewsletterForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, CheckCircle2, Mail } from "lucide-react";
import {
  NewsletterFormData,
  newsletterFormSchema,
} from "@/lib/validations/newsletter";
import { toast } from "sonner";
import Link from "next/link";

interface NewsletterFormProps {
  title?: string;
  description?: string;
  compact?: boolean;
  variant?: "default" | "minimal" | "expanded";
}

const interestOptions = [
  { id: "community", label: "Community Events" },
  { id: "projects", label: "Project Updates" },
  { id: "youth", label: "Youth Programs" },
  { id: "volunteer", label: "Volunteer Opportunities" },
  { id: "donations", label: "Donation Campaigns" },
];

export default function NewsletterForm({
  title = "Stay Connected with Usomini",
  description = "Subscribe to receive updates on community events, projects, and opportunities in our blessed land.",
  compact = false,
  variant = "default",
}: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<NewsletterFormData>({
    defaultValues: {
      email: "",
      firstName: "",
      receiveUpdates: true,
      interests: ["community", "projects"],
    },
    resolver: zodResolver(newsletterFormSchema),
  });

  async function onSubmit(data: NewsletterFormData) {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", data);

      toast.success("Welcome to the Usomini Community!", {
        className: "bg-white text-green-500",
      });

      setIsSuccess(true);
      form.reset({
        email: "",
        firstName: "",
        // receiveUpdates: true,
        // interests: ["community", "projects"],
      });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.log(error);

      toast("Something went wrong", { className: "bg-red-500 text-white" });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Minimal variant - just email field
  if (variant === "minimal") {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      className="min-w-[250px]"
                      {...field}
                      disabled={isSubmitting}
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        "Subscribe"
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    );
  }

  return (
    <div className={`${compact ? "max-w-md" : "max-w-lg"} mx-auto`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-green-800 mb-2">
            Subscription Successful!
          </h4>
          <p className="text-green-700">
            Thank you for joining the Usomini community. Check your email for a
            welcome message.
          </p>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John"
                        {...field}
                        disabled={isSubmitting}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@example.com"
                        type="email"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {!compact && (
              <FormField
                control={form.control}
                name="interests"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">
                        What interests you most? (Optional)
                      </FormLabel>
                      <FormDescription className="text-gray-200">
                        Select topics you&apos;d like to hear about
                      </FormDescription>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {interestOptions.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="interests"
                          render={({ field }) => {
                            const values = field.value || [];
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={values.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      const updatedValue = checked
                                        ? [...values, item.id]
                                        : values.filter(
                                            (value) => value !== item.id
                                          );
                                      field.onChange(updatedValue);
                                    }}
                                    disabled={isSubmitting}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="receiveUpdates"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to receive updates about Usomini community
                    </FormLabel>
                    <FormDescription className="text-gray-200">
                      You can unsubscribe at any time. We respect your privacy.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  <Mail className="mr-2 size-4" />
                  Get Updates
                </>
              )}
            </Button>

            <p className="text-xs text-center text-gray-200">
              By subscribing, you agree to our{" "}
              <Link
                href="/privacy"
                className="text-primary-600 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-primary-600 hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </form>
        </Form>
      )}
    </div>
  );
}
