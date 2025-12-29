"use client";

import { Button } from "@/components/ui/button";
import { useScrollBlur } from "@/hooks/use-scroll-blur";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  const { sectionRef, isBlurred } = useScrollBlur();

  const handleContactClick = () => {
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-20 md:py-32 relative overflow-hidden bg-[#020202] transition-all duration-1000",
        isBlurred ? "blur-sm opacity-50" : "blur-0 opacity-100"
      )}
    >
      {/* Pulsing yellow light effect */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#E0BF18] rounded-full blur-3xl opacity-18 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E0BF18] rounded-full blur-3xl opacity-14 animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      {/* Large geometric shapes */}
      <div className="absolute top-10 left-10 w-48 h-48 border-4 border-[#E0BF18]/20 rounded-lg rotate-45 animate-spin-slow opacity-20" />
      <div className="absolute bottom-20 right-16 w-40 h-40 border-4 border-[#2371A2]/20 rounded-lg rotate-12 animate-spin-reverse opacity-15" />

      {/* Medium floating shapes */}
      <div className="absolute top-1/4 right-1/5 w-32 h-32 border-2 border-[#E0BF18]/25 rounded-full animate-float-slow opacity-12" />
      <div className="absolute bottom-1/3 left-1/6 w-28 h-28 border-2 border-[#2371A2]/25 rounded-lg rotate-45 animate-float opacity-15" />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFFFFC] text-balance">
            Spremni za početak suradnje?
          </h2>
          <p className="text-xl text-[#FFFFFC]/70 mb-8 text-balance">
            Kontaktirajte nas danas i započnite svoju putanju prema energetskoj
            neovisnosti
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleContactClick}
              className="text-lg px-8 py-6 bg-[#E0BF18] text-[#020202] hover:bg-[#E0BF18]/90 shadow-lg shadow-[#E0BF18]/30"
            >
              Pošaljite upit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
