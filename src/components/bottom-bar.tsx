// "use client";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { ArrowUp, Heart } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const BottomBar = () => {
  const [showArrow, setShowArrow] = useState(false);

  const toggleArrow = useCallback(() => {
    if (scrollY > 100) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", toggleArrow);

    return () => document.removeEventListener("scroll", toggleArrow);
  }, [toggleArrow]);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-400 text-sm text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.title}. All rights
            reserved.
          </p>
          <p className="mt-1">Preserving our heritage, building our future.</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <Link
            href="/privacy"
            className="hover:text-green-300 transition-colors"
          >
            Privacy Policy
          </Link>

          <Link href={`mailto:techmelaservices@gmail.com`}>
            <div className="text-gray-500 text-sm flex items-center justify-center gap-2">
              D&D with <Heart className="h-3 w-3 text-red-500 fill-current" />
              by Techmela services
            </div>
          </Link>
        </div>
      </div>

      <button
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "hidden items-center justify-center size-12 bg-app-green-2 fixed right-10 bottom-10 rounded-md hover:bg-green-700 cursor-pointer",
          showArrow && "flex hover:-translate-y-1",
        )}
      >
        <ArrowUp className="text-white text-bold text-xl" />
      </button>
    </>
  );
};

export default BottomBar;
