"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ComponentPropsWithoutRef, useState } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import CustomTooltip from "./custom-tooltip";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import { links } from "@/lib/constants";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-backdrop-filter:bg-white/60 ">
      <MaxWidthWrapper className="flex h-16 items-center justify-between py-12">
        <Link
          href="/"
          className="relative text-2xl md:text-5xl font-bold tracking-tighter text-green-700 hover:text-green-800 transition-colors size-20 md:size-28"
        >
          <Image
            src="/assets/images/logo.png"
            fill
            alt="logo"
            className="object-contain"
            sizes="64px"
          />
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-4 px-6">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex hover:bg-green-50 text-green-700 hover:text-green-800 text-sm md:text-xl p-2"
          >
            <span className="size-12 rounded-full bg-green-500/10 flex items-center justify-center">
              <p className="text-bold text-2xl">U</p>
            </span>
          </Button>

          <MobileNav open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;

function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className={cn("items-center gap-1 hidden md:flex")}>
      {links.map((link) => (
        <CustomTooltip
          key={link.href}
          tip={link.title.eng}
          trigger={
            <NavItem
              key={link.href}
              href={link.href}
              active={pathname === link.href}
              className="group"
            >
              <span className="text-sm md:text-lg lg:text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                {link.title.ogba}
              </span>
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-full" />
              )}
            </NavItem>
          }
        />
      ))}
    </nav>
  );
}

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-green-50 text-gray-700 hover:text-green-700"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-10" /> : <Menu className="size-10" />}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md px-4">
        <SheetHeader className="text-left pb-6 border-b">
          <SheetTitle className="text-2xl font-bold text-green-700">
            Menu
          </SheetTitle>
          <SheetDescription className="text-gray-600">
            Navigate through our website
          </SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col mt-6">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => onOpenChange(false)}
                className={cn(
                  "flex items-center justify-between py-4 px-2 rounded-lg transition-all hover:bg-green-50 group",
                  isActive && "bg-green-50 text-green-700",
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{link.icon}</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg md:text-2xl lg:text-3xl">
                      {link.title.ogba}
                    </span>
                    <span className="text-sm text-gray-500">
                      {link.title.eng}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {isActive && (
                    <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
                  )}
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-6 border-t">
          <span className="size-16 bg-green/10 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700">
            <p className="text-bold text-2xl text-white">U</p>
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function NavItem({
  children,
  href,
  active,
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & {
  active?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2 rounded-md transition-all duration-200",
        active ? "text-green-900" : "hover:text-green-700 hover:bg-green-50/50",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
