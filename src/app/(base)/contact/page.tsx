import ContactForm from "@/components/contact-form";
import MaxWidthWrapper from "@/components/max-width-wrapper";

import { Metadata } from "next";

import {
  Phone,
  MapPin,
  Mail,
  Clock,
  PhoneCall,
  TextAlignCenter,
} from "lucide-react";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "Contact",
};
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-app-blue/10">
      {/* Header Section */}
      <section className="bg-linear-to-r from-green-500 to-black text-primary-foreground">
        <MaxWidthWrapper className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            You are just one call away!
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-16 mt-6 md:mt-10">
            <div className="contact-box">
              <Mail className="contact-icon" />
            </div>
            <div className="contact-box">
              <PhoneCall className="contact-icon" />
            </div>
            <div className="contact-box">
              <TextAlignCenter className="contact-icon" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <MaxWidthWrapper className="paddingY">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-2 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              {/* Success Message */}

              {/* Form */}
              <ContactForm />
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Contact Information
              </h2>
              <p className="text-gray-600 text-lg">
                Reach out to us through any of these channels.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-app-blue rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Phone Call
                  </h3>
                  <p className="text-gray-600">{siteConfig.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-app-blue rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Email Us
                  </h3>
                  <p className="text-gray-600">{siteConfig.email}</p>
                  <p className="text-sm text-gray-500">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-app-blue rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Main Location
                  </h3>
                  <p className="text-gray-600">{siteConfig.location}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-app-blue rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Call Hours
                  </h3>
                  <p className="text-gray-600">Monday - Sunday: 24hrs</p>
                  {/* <p className="text-gray-600">Weekends: 9:00 AM - 5:00 PM</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactPage;
