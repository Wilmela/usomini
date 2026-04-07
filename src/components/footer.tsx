"use client";

import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, ChevronRight, Globe } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import BottomBar from "./bottom-bar";
import { Suspense } from "react";
import { siteConfig } from "@/config";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home", ogba: "Ulor" },
  { href: "/about", label: "About", ogba: "Atita" },
  { href: "/leaders", label: "Leaders", ogba: "Nde'isi" },
  { href: "/projects", label: "Projects", ogba: "Nwhe'ome" },
  { href: "/blog", label: "Blog", ogba: "Akikor" },
  { href: "/contact", label: "Contact", ogba: "Ru'ye" },
];

// const resources = [
//   { href: "/faq", label: "FAQ", ogba: "Aju la'nsha" },
//   { href: "/privacy", label: "Privacy Policy", ogba: "Nwhe'nzuzo" },
//   { href: "/terms", label: "Terms of Service", ogba: "Ukowu'che oru" },
//   { href: "/support", label: "Support", ogba: "Nkwado" },
//   { href: "/donate", label: "Donate", ogba: "Nye onyinye" },
//   { href: "/volunteer", label: "Volunteer", ogba: "We'orhu" },
// ];

const contactInfo = [
  {
    icon: <Phone className="h-4 w-4" />,
    text: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: <Mail className="h-4 w-4" />,
    text: siteConfig.email,
    href: `mailto:${siteConfig.phone}`,
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    text: siteConfig.location,
    href: "https://maps.google.com",
  },
];

const socialLinks = [
  {
    icon: <FaFacebook className="h-5 w-5" />,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: <FaTwitter className="h-5 w-5" />,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: <FaInstagram className="h-5 w-5" />,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: <FaYoutube className="h-5 w-5" />,
    href: "https://youtube.com",
    label: "YouTube",
  },
];

const Footer = () => {

  return (
    <footer className="bg-linear-to-b from-gray-900 to-gray-950 text-white mt-auto">
      {/* Main Footer Content */}
      <MaxWidthWrapper className="py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="space-y-3">
              <Link
                href="/"
                className="text-2xl md:text-5xl font-bold tracking-tighter text-green-700 hover:text-green-800 transition-colors"
              >
                <Image
                  src="/assets/images/logo.png"
                  width={120}
                  height={60}
                  alt="logo"
                />
              </Link>
              <p className="text-gray-300 leading-relaxed">
                Preserving and promoting the rich cultural heritage, language,
                and traditions of the Ogba people for future generations.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-400" />
                Connect With Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 hover:bg-green-600 rounded-lg transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ChevronRight className="h-5 w-5 text-green-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-gray-300 hover:text-green-300 transition-colors py-1.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <span className="font-medium">{link.ogba}</span>
                      <span className="text-sm text-gray-400 ml-2 hidden sm:inline">
                        ({link.label})
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          {/* <div className="space-y-6">
            <h3 className="text-xl font-bold text-white inline-flex items-center gap-2">
              <ChevronRight className="h-5 w-5 text-green-400" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-gray-300 hover:text-green-300 transition-colors py-1.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <span className="font-medium">{link.ogba}</span>
                      <span className="text-sm text-gray-400 ml-2 hidden sm:inline">
                        ({link.label})
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ChevronRight className="h-5 w-5 text-green-400" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <Link
                    href={contact.href}
                    className="flex items-start gap-3 text-gray-300 hover:text-green-300 transition-colors group"
                  >
                    <div className="p-2 bg-green-900/30 rounded-lg group-hover:bg-green-700/50 transition-colors">
                      {contact.icon}
                    </div>
                    <span className="pt-1">{contact.text}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Toggle */}
            {/* <div className="pt-4">
              <div className="inline-flex items-center bg-white/5 rounded-lg p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white bg-green-700/50 hover:bg-green-700"
                >
                  Ogba
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/5"
                >
                  English
                </Button>
              </div>
            </div> */}
          </div>
        </div>

        <Separator className="my-10 bg-gray-800" />

        {/* Bottom Bar */}
        <Suspense fallback={<p>Loading...</p>}>
          <BottomBar />
        </Suspense>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
