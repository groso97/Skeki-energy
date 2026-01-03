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
  Instagram,
} from "lucide-react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Došlo je do greške.");
      }

      setSubmitStatus({
        type: "success",
        message: "Hvala na upitu! Javit ćemo vam se uskoro.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Došlo je do greške. Pokušajte ponovno.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={cn(
        "py-20 md:py-32 relative overflow-hidden bg-[#020202] transition-all duration-1000",
        isBlurred ? "blur-sm opacity-50" : "blur-0 opacity-100"
      )}
    >
      {/* Pulsing blue light effect - hidden on mobile */}
      <div className="hidden md:block absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#2371A2] rounded-full blur-3xl opacity-16 animate-pulse-glow" />
      <div
        className="hidden md:block absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#2371A2] rounded-full blur-3xl opacity-14 animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Large geometric shapes - hidden on mobile */}
      <div className="hidden md:block absolute top-10 left-10 w-48 h-48 border-4 border-[#2371A2]/20 rounded-lg rotate-45 animate-spin-slow opacity-20" />
      <div className="hidden md:block absolute bottom-20 right-16 w-40 h-40 border-4 border-[#E0BF18]/20 rounded-lg rotate-12 animate-spin-reverse opacity-15" />

      {/* Medium floating shapes - hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 right-1/5 w-32 h-32 border-2 border-[#2371A2]/25 rounded-full animate-float-slow opacity-12" />
      <div className="hidden md:block absolute bottom-1/3 left-1/6 w-28 h-28 border-2 border-[#E0BF18]/25 rounded-lg rotate-45 animate-float opacity-15" />

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
                  href={`https://wa.me/${CONTACT_INFO.phone.replace(/\s/g, "").replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-lg border-2 border-[#FFFFFC]/10 bg-[#020202] flex items-center justify-center hover:border-[#2371A2]/50 hover:bg-[#2371A2]/10 transition-all duration-500 ease-in-out group"
                  aria-label="WhatsApp"
                >
                  <span className="text-[#FFFFFC]/70 group-hover:text-[#2371A2] transition-all duration-500 ease-in-out">
                    <WhatsAppIcon />
                  </span>
                </a>
                <a
                  href="https://instagram.com/skekienergy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-lg border-2 border-[#FFFFFC]/10 bg-[#020202] flex items-center justify-center hover:border-[#2371A2]/50 hover:bg-[#2371A2]/10 transition-all duration-500 ease-in-out group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-[#FFFFFC]/70 group-hover:text-[#2371A2] transition-all duration-500 ease-in-out" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            {/* Form card with glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2371A2]/20 via-[#E0BF18]/10 to-[#2371A2]/20 rounded-2xl blur-xl opacity-50" />
            
            <div className="relative bg-[#020202]/80 backdrop-blur-sm border-2 border-[#FFFFFC]/10 rounded-2xl p-8">
              {/* Form header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#FFFFFC] mb-2">Pošaljite upit</h3>
                <p className="text-sm text-[#FFFFFC]/60">Ispunite formu i javit ćemo vam se što prije</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name and Phone in a row on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2 group">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold text-[#FFFFFC]/50 uppercase tracking-wider block group-focus-within:text-[#2371A2] transition-colors"
                    >
                      Ime i prezime *
                    </label>
                    <Input
                      id="name"
                      placeholder="Vaše ime"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="bg-[#FFFFFC]/5 border-2 border-[#FFFFFC]/10 text-[#FFFFFC] placeholder:text-[#FFFFFC]/30 focus:border-[#2371A2] focus:bg-[#2371A2]/5 focus:ring-0 h-12 rounded-xl transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold text-[#FFFFFC]/50 uppercase tracking-wider block group-focus-within:text-[#2371A2] transition-colors"
                    >
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+385 91 234 5678"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="bg-[#FFFFFC]/5 border-2 border-[#FFFFFC]/10 text-[#FFFFFC] placeholder:text-[#FFFFFC]/30 focus:border-[#2371A2] focus:bg-[#2371A2]/5 focus:ring-0 h-12 rounded-xl transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-[#FFFFFC]/50 uppercase tracking-wider block group-focus-within:text-[#2371A2] transition-colors"
                  >
                    Email adresa *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="vasa@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="bg-[#FFFFFC]/5 border-2 border-[#FFFFFC]/10 text-[#FFFFFC] placeholder:text-[#FFFFFC]/30 focus:border-[#2371A2] focus:bg-[#2371A2]/5 focus:ring-0 h-12 rounded-xl transition-all duration-300"
                  />
                </div>

                <div className="space-y-2 group">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-[#FFFFFC]/50 uppercase tracking-wider block group-focus-within:text-[#2371A2] transition-colors"
                  >
                    Poruka *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Opišite svoje potrebe, veličinu krova, mjesečnu potrošnju struje..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                    className="bg-[#FFFFFC]/5 border-2 border-[#FFFFFC]/10 text-[#FFFFFC] placeholder:text-[#FFFFFC]/30 focus:border-[#2371A2] focus:bg-[#2371A2]/5 focus:ring-0 rounded-xl transition-all duration-300 resize-none"
                  />
                </div>

                {/* Status message */}
                {submitStatus.type && (
                  <div
                    className={cn(
                      "p-4 rounded-xl text-center font-medium",
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/30 text-green-400"
                        : "bg-red-500/10 border border-red-500/30 text-red-400"
                    )}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-[#E0BF18] to-[#d4b317] text-[#020202] hover:from-[#E0BF18]/90 hover:to-[#d4b317]/90 font-bold text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#E0BF18]/20 hover:shadow-[#E0BF18]/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Šaljem...</span>
                    </>
                  ) : (
                    <>
                      <span>Pošalji upit</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-[#FFFFFC]/40 text-center pt-2">
                  Slanjem obrasca pristajete na našu{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#2371A2] hover:text-[#2371A2]/80 transition-colors duration-300 underline underline-offset-2"
                  >
                    politiku privatnosti
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
