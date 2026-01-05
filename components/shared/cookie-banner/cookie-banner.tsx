"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "skeki-cookie-notice-seen";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the notice
    const hasSeenNotice = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasSeenNotice) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="sticky bottom-0 left-0 right-0 z-50 p-4"
      role="dialog"
      aria-label="Obavijest o kolačićima"
      aria-describedby="cookie-description"
    >
      <div className="container max-w-4xl mx-auto">
        <div className="relative bg-[#0a0a0a]/95 backdrop-blur-md border border-[#FFFFFC]/10 rounded-2xl p-5 md:p-6 shadow-2xl shadow-black/50">
          {/* Subtle glow effect */}
          <div className="absolute -inset-px bg-gradient-to-r from-[#2371A2]/20 via-transparent to-[#E0BF18]/20 rounded-2xl blur-sm opacity-50 -z-10" />
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Icon */}
            <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2371A2]/10 border border-[#2371A2]/20">
              <Cookie className="h-6 w-6 text-[#2371A2]" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p
                id="cookie-description"
                className="text-sm md:text-base text-[#FFFFFC]/80 leading-relaxed"
              >
                Koristimo kolačiće za anonimnu analitiku kako bismo poboljšali
                vaše iskustvo na stranici.{" "}
                <Link
                  href="/kolacici"
                  className="text-[#2371A2] hover:text-[#2371A2]/80 underline underline-offset-2 transition-colors duration-200"
                >
                  Saznajte više
                </Link>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                onClick={handleAccept}
                className="flex-1 sm:flex-none h-10 px-6 bg-gradient-to-r from-[#2371A2] to-[#1a5a8a] text-[#FFFFFC] hover:from-[#2371A2]/90 hover:to-[#1a5a8a]/90 font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[#2371A2]/20 hover:shadow-[#2371A2]/30"
                aria-label="Prihvati kolačiće"
              >
                Razumijem
              </Button>
              
              {/* Close button for mobile */}
              <button
                onClick={handleAccept}
                className="sm:hidden h-10 w-10 flex items-center justify-center rounded-xl border border-[#FFFFFC]/10 text-[#FFFFFC]/60 hover:text-[#FFFFFC] hover:border-[#FFFFFC]/20 transition-all duration-200"
                aria-label="Zatvori obavijest"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

