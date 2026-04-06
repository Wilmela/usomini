import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({
  title,
  descritpion,
  titleColor,
  descColor,
}: {
  title: string;
  descritpion: string;
  titleColor?: string;
  descColor?: string;
}) => {
  return (
    <div className="mb-12">
      <h1 className={cn("section-title ", titleColor ?? "text-accent-foreground")}>{title}</h1>
      <p className={cn("font-light",descColor ?? "text-gray-700")}>{descritpion}</p>

      <hr className="font-bold h-1 w-[200px] bg-gray-900 mb-8" />
    </div>
  );
};

export default SectionTitle;
