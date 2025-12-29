"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Linkedin,
  Instagram,
} from "lucide-react";
import { CONTACT_INFO } from "@/config/constants";
import { useScrollBlur } from "@/hooks/use-scroll-blur";
import { cn } from "@/lib/utils";
import type { ContactFormData } from "@/types";

export const ContactForm = () => {
  const { sectionRef, isBlurred } = useScrollBlur();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [budget, setBudget] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Hvala na upitu! Javit ćemo vam se uskoro.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className={cn(
        "py-20 md:py-32 relative overflow-hidden bg-[#020202] transition-all duration-1000",
        isBlurred ? "blur-sm opacity-50" : "blur-0 opacity-100"
      )}
    >
      {/* Pulsing blue light effect */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#2371A2] rounded-full blur-3xl opacity-16 animate-pulse-glow" />
      <div
        className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#2371A2] rounded-full blur-3xl opacity-14 animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Large geometric shapes */}
      <div className="absolute top-10 left-10 w-48 h-48 border-4 border-[#2371A2]/20 rounded-lg rotate-45 animate-spin-slow opacity-20" />
      <div className="absolute bottom-20 right-16 w-40 h-40 border-4 border-[#E0BF18]/20 rounded-lg rotate-12 animate-spin-reverse opacity-15" />

      {/* Medium floating shapes */}
      <div className="absolute top-1/4 right-1/5 w-32 h-32 border-2 border-[#2371A2]/25 rounded-full animate-float-slow opacity-12" />
      <div className="absolute bottom-1/3 left-1/6 w-28 h-28 border-2 border-[#E0BF18]/25 rounded-lg rotate-45 animate-float opacity-15" />

      <div className="container px-4 relative z-10">
        {/* CTA Section - like in the image */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          <div className="mb-4">
            <div className="inline-flex items-center justify-center rounded-full px-4 py-1.5 mb-4 bg-[#020202] border-2 border-[#2371A2]/30 text-[#2371A2] font-semibold text-xs uppercase tracking-wider animate-pulse-glow-badge shadow-[0_0_15px_rgba(35,113,162,0.3)] drop-shadow-[0_0_8px_rgba(35,113,162,0.8)]">
              KONTAKTIRAJTE NAS
            </div>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFFFC] text-balance">
            Započnimo vaš put prema{" "}
            <span className="text-[#E0BF18]">energetskoj neovisnosti.</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-[#FFFFFC]/70 text-balance">
            Spremni ste za solarni projekt? Kontaktirajte nas danas i dobit ćete
            besplatnu ponudu prilagođenu vašim potrebama. Odgovorimo vam unutar
            24 sata.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            {/* Email */}
            <div className="group">
              <div className="border-2 border-[#FFFFFC]/10 bg-[#020202] rounded-lg p-6 transition-all duration-500 ease-in-out hover:border-[#2371A2]/50">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#2371A2]/10 border border-[#2371A2]/20 flex items-center justify-center shrink-0 group-hover:bg-[#2371A2]/20 group-hover:border-[#2371A2]/40 group-hover:scale-110 transition-all duration-500 ease-in-out">
                    <Mail className="h-5 w-5 text-[#2371A2] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-[#2371A2]/70 uppercase tracking-wider mb-2 group-hover:text-[#2371A2]/90 transition-all duration-500 ease-in-out">
                      EMAIL
                    </div>
                    <div className="text-lg font-bold text-[#FFFFFC] group-hover:text-[#2371A2]/80 transition-all duration-500 ease-in-out">
                      {CONTACT_INFO.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="group">
              <div className="border-2 border-[#FFFFFC]/10 bg-[#020202] rounded-lg p-6 transition-all duration-500 ease-in-out hover:border-[#2371A2]/50">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#2371A2]/10 border border-[#2371A2]/20 flex items-center justify-center shrink-0 group-hover:bg-[#2371A2]/20 group-hover:border-[#2371A2]/40 group-hover:scale-110 transition-all duration-500 ease-in-out">
                    <MapPin className="h-5 w-5 text-[#2371A2] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-[#2371A2]/70 uppercase tracking-wider mb-2 group-hover:text-[#2371A2]/90 transition-all duration-500 ease-in-out">
                      LOCATION
                    </div>
                    <div className="text-lg font-bold text-[#FFFFFC] group-hover:text-[#2371A2]/80 transition-all duration-500 ease-in-out">
                      {CONTACT_INFO.address.split("\n")[0]}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="group">
              <div className="border-2 border-[#FFFFFC]/10 bg-[#020202] rounded-lg p-6 transition-all duration-500 ease-in-out hover:border-[#2371A2]/50">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#2371A2]/10 border border-[#2371A2]/20 flex items-center justify-center shrink-0 group-hover:bg-[#2371A2]/20 group-hover:border-[#2371A2]/40 group-hover:scale-110 transition-all duration-500 ease-in-out">
                    <Clock className="h-5 w-5 text-[#2371A2] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-[#2371A2]/70 uppercase tracking-wider mb-2 group-hover:text-[#2371A2]/90 transition-all duration-500 ease-in-out">
                      RESPONSE TIME
                    </div>
                    <div className="text-lg font-bold text-[#FFFFFC] group-hover:text-[#2371A2]/80 transition-all duration-500 ease-in-out">
                      Unutar 24 sata
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours - Highlighted */}
            <div className="group">
              <div className="border-2 border-[#2371A2]/50 bg-[#020202] rounded-lg p-6 transition-all duration-500 ease-in-out hover:border-[#2371A2] hover:shadow-lg hover:shadow-[#2371A2]/10">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#2371A2]/10 border border-[#2371A2]/20 flex items-center justify-center shrink-0 group-hover:bg-[#2371A2]/20 group-hover:border-[#2371A2]/40 group-hover:scale-110 transition-all duration-500 ease-in-out">
                    <Clock className="h-5 w-5 text-[#2371A2] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-[#2371A2] uppercase tracking-wider mb-4">
                      OFFICE HOURS
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#FFFFFC]/70">
                          Ponedjeljak - Petak
                        </span>
                        <span className="text-sm font-semibold text-[#FFFFFC]">
                          9:00 - 17:00
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#FFFFFC]/70">
                          Vikend
                        </span>
                        <span className="text-sm font-semibold text-[#FFFFFC]">
                          Po dogovoru
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="pt-4">
              <div className="text-xs font-semibold text-[#2371A2]/70 uppercase tracking-wider mb-4">
                FOLLOW US
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="h-10 w-10 rounded-lg border-2 border-[#FFFFFC]/10 bg-[#020202] flex items-center justify-center hover:border-[#2371A2]/50 hover:bg-[#2371A2]/10 transition-all duration-500 ease-in-out group"
                >
                  <Linkedin className="h-5 w-5 text-[#FFFFFC]/70 group-hover:text-[#2371A2] transition-all duration-500 ease-in-out" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-lg border-2 border-[#FFFFFC]/10 bg-[#020202] flex items-center justify-center hover:border-[#2371A2]/50 hover:bg-[#2371A2]/10 transition-all duration-500 ease-in-out group"
                >
                  <Instagram className="h-5 w-5 text-[#FFFFFC]/70 group-hover:text-[#2371A2] transition-all duration-500 ease-in-out" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold text-[#2371A2]/70 uppercase tracking-wider block"
                >
                  IME I PREZIME *
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="bg-[#020202] border-2 border-[#2371A2]/30 text-[#FFFFFC] placeholder:text-[#FFFFFC]/30 focus:border-[#2371A2]/50 focus:ring-0 h-12 rounded-lg transition-all duration-500 ease-in-out"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-[#2371A2]/70 uppercase tracking-wider block"
                >
                  EMAIL ADRESA *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="bg-[#020202] border-2 border-[#2371A2]/30 text-[#FFFFFC] placeholder:text-[#FFFFFC]/30 focus:border-[#2371A2]/50 focus:ring-0 h-12 rounded-lg transition-all duration-500 ease-in-out"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-[#2371A2]/70 uppercase tracking-wider block"
                >
                  PORUKA *
                </label>
                <Textarea
                  id="message"
                  placeholder="Opišite svoje potrebe ili postavite pitanje..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  className="bg-[#020202] border-2 border-[#2371A2]/30 text-[#FFFFFC] placeholder:text-[#FFFFFC]/30 focus:border-[#2371A2]/50 focus:ring-0 rounded-lg transition-all duration-500 ease-in-out resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#E0BF18] text-[#020202] hover:bg-[#E0BF18]/80 font-semibold rounded-lg transition-all duration-500 ease-in-out flex items-center justify-center gap-2 group"
              >
                Pošalji poruku
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-500 ease-in-out" />
              </Button>

              <p className="text-xs text-[#FFFFFC]/50 text-center">
                Slanjem ovog obrasca pristajete na našu{" "}
                <a
                  href="#"
                  className="text-[#2371A2]/70 hover:text-[#2371A2] transition-colors duration-300"
                >
                  politiku privatnosti
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
