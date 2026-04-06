// components/sections/ValuesSection.tsx - CLIENT COMPONENT
"use client";

import { Heart, Users, Shield, Target, Sparkles, Globe } from "lucide-react";
import ValuesCard from "./values-card";
import MaxWidthWrapper from "./max-width-wrapper";
import SectionTitle from "./section-title";

export default function OurValue() {
  const values = [
    {
      title: "Community First",
      description:
        "We prioritize collective well-being over individual gain, fostering an environment where every member feels valued, heard, and supported in their journey.",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Inclusive Unity",
      description:
        "Embracing diversity as our strength, we build bridges across generations, cultures, and backgrounds to create a truly unified community.",
      icon: Heart,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Sustainable Stewardship",
      description:
        "Responsibly managing our natural resources to ensure Usomini's beauty and bounty endure for generations to come.",
      icon: Globe,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Integrity & Trust",
      description:
        "Building relationships on transparency, honesty, and reliability—the foundation of everything we do together.",
      icon: Shield,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Purposeful Progress",
      description:
        "Advancing with clear intention, balancing innovation with tradition to create meaningful, lasting impact.",
      icon: Target,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Joyful Hospitality",
      description:
        "Welcoming all with open hearts and homes, because true community begins with genuine connection and shared happiness.",
      icon: Sparkles,
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <MaxWidthWrapper>
      <SectionTitle
        titleColor="text-white"
        descColor="text-gray-200"
        title="Our Values"
        descritpion="Values we respect"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <ValuesCard
            key={value.title}
            title={value.title}
            description={value.description}
            Icon={value.icon}
            iconColor={value.color}
            delay={index * 100}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
