// components/sections/NewsletterCTA.tsx
import { Users, Mail, Gift } from "lucide-react";
import NewsletterForm from "./newsletter-form";
import MaxWidthWrapper from "./max-width-wrapper";

interface NewsletterCTAProps {
  title?: string;
  subtitle?: string;
  benefits?: string[];
  variant?: "light" | "dark" | "gradient";
}

export default function NewsletterCTA({
  title = "Become Part of Our Growing Community",
  subtitle = "Join thousands who stay connected with Usomini's journey",
  benefits = [
    "Weekly community updates",
    "Exclusive event invitations",
    "Project progress reports",
    "Volunteer opportunities",
  ],
  variant = "gradient",
}: NewsletterCTAProps) {
  const variantStyles = {
    light: "bg-white text-gray-900",
    dark: "bg-gray-900 text-white",
    gradient: "bg-gradient-to-r from-primary-600 to-primary-800 text-white",
  };

  return (
    <MaxWidthWrapper className={`py-16 ${variantStyles[variant]}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Stay Connected</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>

              <p className="text-lg opacity-90 mb-8">{subtitle}</p>

              {/* Benefits List */}
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <Gift className="w-3 h-3" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="flex gap-8">
                <div>
                  <div className="text-2xl font-bold">2,500+</div>
                  <div className="text-sm opacity-80">Subscribers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm opacity-80">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-sm opacity-80">Response Time</div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">Join Us Today</h3>
                <p className="opacity-80">
                  Fill in your details to get started
                </p>
              </div>

              <NewsletterForm
                compact={false}
                title=""
                description=""
                variant="default"
              />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
