// components/ui/ValuesCard.tsx - CLIENT COMPONENT
"use client";

import { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface ValuesCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  iconColor: string;
  delay?: number;
}

export default function ValuesCard({
  title,
  description,
  Icon,
  iconColor,
  delay = 0,
}: ValuesCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`
        group relative bg-white  p-6 shadow-lg 
        transition-all duration-300 cursor-pointer
        hover:shadow-2xl hover:-translate-y-2
        border border-gray-100
        overflow-hidden
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      <div
        className={`${
          iconColor.split(" ")[0]
        } size-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`size-7 ${iconColor.split(" ")[1]}`} />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
