// "use client";

import { siteConfig } from "@/config";
import { Heart } from "lucide-react";
import Link from "next/link";

const BottomBar = () => {
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
          <Link
            href="/terms"
            className="hover:text-green-300 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/cookies"
            className="hover:text-green-300 transition-colors"
          >
            Cookie Policy
          </Link>
        </div>
      </div>

      <Link
        href={`mailto:techmelaservices@gmail.com`}
        className="mt-8 pt-6 border-t border-gray-800 text-center"
      >
        <div className="text-gray-500 text-sm flex items-center justify-center gap-2">
          D&D with <Heart className="h-3 w-3 text-red-500 fill-current" />
          by Techmela services
        </div>
      </Link>
    </>
  );
};

export default BottomBar;
