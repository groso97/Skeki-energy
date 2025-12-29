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
import { Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

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
        className="w-full sm:w-[500px] bg-gradient-to-b from-[#020202] via-[#020202] to-[#000000] border-l-0 p-0 overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle className="sr-only">Navigacija</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full">
          {/* Header with Logo and Close */}
          <div className="flex items-center justify-between p-6 border-b border-[#FFFFFC]/10">
            <Logo size="md" />
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#FFFFFC] hover:bg-[#FFFFFC]/10 hover:text-[#E0BF18]"
                aria-label="Zatvori meni"
              >
                <HamburgerMenu
                  isOpen={true}
                  className="text-[#FFFFFC] w-8 h-8"
                />
              </Button>
            </SheetClose>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col px-6 py-8 space-y-12">
            {/* Navigation Section */}
            <div>
              <p className="text-xs uppercase tracking-wider text-[#E0BF18] mb-6 font-semibold">
                NAVIGACIJA
              </p>
              <nav className="flex flex-col gap-2">
                {NAVIGATION_ITEMS.map((item, index) => {
                  const isFirst = index === 0;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "text-4xl font-bold transition-colors py-2",
                        isFirst
                          ? "text-[#E0BF18] hover:text-[#E0BF18]/80"
                          : "text-[#FFFFFC] hover:text-[#E0BF18]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Divider */}
            <div className="border-t border-[#FFFFFC]/10" />

            {/* Contact Section */}
            <div>
              <p className="text-xs uppercase tracking-wider text-[#FFFFFC]/60 mb-6">
                KONTAKT
              </p>
              <div className="space-y-4">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="block text-xl text-[#FFFFFC] hover:text-[#E0BF18] transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
                <div className="text-lg text-[#FFFFFC]/60">
                  <p className="flex items-center gap-2 mb-2">
                    <Phone className="h-4 w-4 text-[#E0BF18]" />
                    {CONTACT_INFO.phone}
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-[#E0BF18] mt-1 flex-shrink-0" />
                    <span>{CONTACT_INFO.address.split("\n")[0]}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div>
              <p className="text-xs uppercase tracking-wider text-[#FFFFFC]/60 mb-6">
                PRATITE NAS
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/company/skeki-energy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-[#FFFFFC] hover:text-[#E0BF18] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com/skekienergy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-[#FFFFFC] hover:text-[#E0BF18] transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
