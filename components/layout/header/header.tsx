"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { Navigation } from "./navigation";
import { MobileMenu } from "./mobile-menu";
import { ChevronDown } from "lucide-react";
import { useScrollHeader } from "@/hooks/use-scroll-header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export const Header = () => {
  const { isScrolled } = useScrollHeader();
  const router = useRouter();
  const pathname = usePathname();

  const handleContactClick = () => {
    if (pathname !== "/") {
      router.push("/#contact");
      return;
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 ease-in-out",
        isScrolled
          ? "h-16 border-b border-[#2371A2]/20 bg-[#020202]/80 backdrop-blur-xl"
          : "h-24 bg-[#020202] border-b border-[#020202]/20"
      )}
    >
      {/* Blue glow overlay on scroll */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500 ease-in-out pointer-events-none",
          isScrolled
            ? "opacity-100 bg-gradient-to-b from-[#2371A2]/10 via-[#2371A2]/5 to-[#2371A2]/10"
            : "opacity-0"
        )}
      />

      {/* Bottom border glow line */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-px transition-all duration-500 ease-in-out",
          isScrolled
            ? "opacity-100 bg-gradient-to-r from-transparent via-[#2371A2]/50 to-transparent"
            : "opacity-0"
        )}
      />

      <div
        className={cn(
          "container relative flex items-center justify-between px-4 transition-all duration-500 ease-in-out",
          isScrolled ? "h-16" : "h-24"
        )}
      >
        <Link
          href="/"
          className="flex items-center z-10 transition-transform duration-500 ease-in-out"
          aria-label="Skeki Energy - Početna"
        >
          <Logo size="md" />
        </Link>

        <div className="hidden md:flex z-10">
          <Navigation />
        </div>

        <div className="flex items-center gap-4 z-10">
          <Button
            onClick={handleContactClick}
            size="sm"
            className="hidden sm:flex relative bg-[#020202] border-2 border-[#2371A2]/30 text-white rounded-lg px-4 py-2 font-semibold animate-pulse-glow-button-blue shadow-[0_0_15px_rgba(35,113,162,0.3)] overflow-hidden hover:bg-[#020202] hover:text-[#2371A2] hover:border-[#2371A2]/30 hover:shadow-[0_0_15px_rgba(35,113,162,0.3)] transition-colors duration-300"
            aria-label="Pošaljite upit"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="drop-shadow-[0_0_8px_rgba(35,113,162,0.8)]">
                Pošaljite upit
              </span>
              <ChevronDown className="h-4 w-4 drop-shadow-[0_0_8px_rgba(35,113,162,0.8)]" />
            </span>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
