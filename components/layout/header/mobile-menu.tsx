"use client";

import { useState } from "react";
import { NAVIGATION_ITEMS, CONTACT_INFO } from "@/config/constants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { HamburgerMenu } from "@/components/shared/hamburger-menu";
import { Phone, Mail, MapPin, Instagram, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#FFFFFC] hover:bg-[#020202]/50 hover:text-[#E0BF18] relative z-50"
          aria-label="Otvori meni"
        >
          <HamburgerMenu isOpen={open} className="text-[#FFFFFC]" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-[400px] bg-[#020202] border-l border-[#2371A2]/20 p-0 overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle className="sr-only">Navigacija</SheetTitle>
        </SheetHeader>
        
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-20 w-64 h-64 bg-[#2371A2]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 -left-20 w-48 h-48 bg-[#E0BF18]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-10 w-20 h-20 border border-[#2371A2]/20 rounded-lg rotate-45" />
          <div className="absolute bottom-20 left-10 w-16 h-16 border border-[#E0BF18]/20 rounded-full" />
        </div>

        <div className="flex flex-col h-full relative z-10">
          {/* Header with Logo and Close */}
          <div className="flex items-center justify-between p-6 border-b border-[#FFFFFC]/10">
            <Logo size="md" />
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#FFFFFC] hover:bg-[#FFFFFC]/10 hover:text-[#E0BF18] transition-colors"
                aria-label="Zatvori meni"
              >
                <HamburgerMenu
                  isOpen={true}
                  className="text-[#FFFFFC]"
                />
              </Button>
            </SheetClose>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col p-6">
            {/* Navigation Section */}
            <nav className="flex flex-col gap-1 mb-8">
              {NAVIGATION_ITEMS.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "group flex items-center justify-between py-4 border-b border-[#FFFFFC]/5 transition-all duration-300",
                    "hover:border-[#2371A2]/30 hover:pl-2"
                  )}
                >
                  <span className={cn(
                    "text-2xl font-bold transition-colors duration-300",
                    index === 0
                      ? "text-[#E0BF18]"
                      : "text-[#FFFFFC] group-hover:text-[#2371A2]"
                  )}>
                    {item.label}
                  </span>
                  <ArrowRight className="h-5 w-5 text-[#FFFFFC]/30 group-hover:text-[#2371A2] group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Contact Cards */}
            <div className="space-y-3 mb-8">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#FFFFFC]/5 border border-[#FFFFFC]/10 hover:border-[#2371A2]/50 hover:bg-[#2371A2]/5 transition-all duration-300 group"
              >
                <div className="h-10 w-10 rounded-lg bg-[#2371A2]/20 flex items-center justify-center group-hover:bg-[#2371A2]/30 transition-colors">
                  <Phone className="h-5 w-5 text-[#2371A2]" />
                </div>
                <div>
                  <p className="text-xs text-[#FFFFFC]/50 uppercase tracking-wider">Telefon</p>
                  <p className="text-[#FFFFFC] font-medium">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#FFFFFC]/5 border border-[#FFFFFC]/10 hover:border-[#2371A2]/50 hover:bg-[#2371A2]/5 transition-all duration-300 group"
              >
                <div className="h-10 w-10 rounded-lg bg-[#2371A2]/20 flex items-center justify-center group-hover:bg-[#2371A2]/30 transition-colors">
                  <Mail className="h-5 w-5 text-[#2371A2]" />
                </div>
                <div>
                  <p className="text-xs text-[#FFFFFC]/50 uppercase tracking-wider">Email</p>
                  <p className="text-[#FFFFFC] font-medium text-sm">{CONTACT_INFO.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FFFFFC]/5 border border-[#FFFFFC]/10">
                <div className="h-10 w-10 rounded-lg bg-[#2371A2]/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#2371A2]" />
                </div>
                <div>
                  <p className="text-xs text-[#FFFFFC]/50 uppercase tracking-wider">Lokacija</p>
                  <p className="text-[#FFFFFC] font-medium text-sm">{CONTACT_INFO.address.split("\n")[0]}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-auto pt-6 border-t border-[#FFFFFC]/10">
              <p className="text-xs text-[#FFFFFC]/40 uppercase tracking-wider mb-4">Pratite nas</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/skekienergy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-lg bg-[#FFFFFC]/5 border border-[#FFFFFC]/10 flex items-center justify-center text-[#FFFFFC]/60 hover:text-[#E0BF18] hover:border-[#E0BF18]/50 hover:bg-[#E0BF18]/10 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/385977109235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-lg bg-[#FFFFFC]/5 border border-[#FFFFFC]/10 flex items-center justify-center text-[#FFFFFC]/60 hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
