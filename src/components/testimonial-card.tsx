"use client";

import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  description: string;
  imgUrl: string;
  iconColor: string;
  delay?: number;
  position?: string;
}

export default function TestimonialCard({
  name,
  description,
  imgUrl,
  position,
}: TestimonialCardProps) {
  return (
    <div
      className={`
        bg-white p-6 shadow-lg cursor-pointer
        border border-gray-100
        overflow-hidden
        flex flex-col mr-2
        h-80 max-h-80
      `}
    >
      <div
        className={`size-16 rounded-full flex items-center justify-center mb-6 relative overflow-hidden`}
      >
        <Image src={imgUrl} fill alt="testifier" />
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 ">{name}</h3>
        <p className="text-sm font-light mb-3 text-green-500">{position}</p>
      </div>
      <p className="text-gray-600 leading-relaxed">
        {description.length > 180
          ? description.slice(0, 180) + "..."
          : description}
      </p>
    </div>
  );
}
