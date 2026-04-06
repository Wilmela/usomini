import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { Globe } from "lucide-react";
import { Badge } from "./ui/badge";

type Props = {
  title: string;
  sub1: string;
  sub2: string;
  sub3: string;
  description: string;
};
const PageHero = ({ title, sub1, sub2, sub3, description }: Props) => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-green-900 via-emerald-800 to-green-700 text-white">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
      <MaxWidthWrapper className="relative z-10">
        <div className="max-w-3xl">
          <Badge className="mb-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 ">
            <Globe className="h-4 w-4 mr-2" />
            {title}
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {sub1} <span className="text-app-light-gold">{sub2}</span> {sub3}
          </h1>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            {description}
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PageHero;
