"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  className?: string;
  imageClassName?: string;
};

export default function ProjectCard({
  title,
  description,
  imgUrl,

  className,
  imageClassName
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "relative px-2 group cursor-pointer hover:scale-105 transition-all duration-300",
        className
      )}
    >
      <Image src={imgUrl} fill alt="projects" className={cn(imageClassName, 'object-cover')} />

      <div className="hidden group-hover:block transition-opacity duration-300 absolute bottom-2 rounded-md left-0 right-0 text-white border p-2 mx-2 bg-black/50">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-700 transition-colors group-hover:shadow-shinny">
          {title}
        </h3>
        <p className="text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
