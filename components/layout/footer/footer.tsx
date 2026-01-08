"use client"

import { Logo } from "@/components/shared/logo"
import { CONTACT_INFO, NAVIGATION_ITEMS } from "@/config/constants"
import { Instagram } from "lucide-react"
import Link from "next/link"

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const exploreLinks = NAVIGATION_ITEMS

  const connectLinks = [
    { label: "Instagram", href: "https://instagram.com/skekienergy" },
    { label: "WhatsApp", href: "https://wa.me/385977109235" },
  ]

  const legalLinks = [
    { label: "Politika privatnosti", href: "/privacy-policy" },
    { label: "Uvjeti korištenja", href: "/terms-of-use" },
    { label: "Kolačići", href: "/kolacici" },
  ]

  return (
    <footer className="bg-[#020202] border-t border-[#2371A2]/20 py-16 md:py-20 relative overflow-hidden">
      {/* Pulsing light effects - hidden on mobile for performance */}
      <div className="hidden md:block absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2371A2] rounded-full blur-3xl opacity-15 animate-pulse-glow" />
      <div className="hidden md:block absolute bottom-0 right-1/3 w-96 h-96 bg-[#E0BF18] rounded-full blur-3xl opacity-12 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="hidden md:block absolute top-1/2 right-0 w-80 h-80 bg-[#2371A2] rounded-full blur-3xl opacity-10 animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="container px-4 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info - Left Side */}
          <div className="lg:col-span-5 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Logo size="lg" className="mb-6" />
            </div>
            <p className="text-[#FFFFFC]/60 mb-8 max-w-sm leading-relaxed mx-auto md:mx-0">
              Profesionalna montaža solarnih elektrana s naglaskom na kvalitetu, pouzdanost i brigu o svakom klijentu.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="block text-[#FFFFFC] font-medium hover:text-[#E0BF18] transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="block text-[#FFFFFC]/60 hover:text-[#E0BF18] transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
              <p className="text-[#FFFFFC]/60">
                {CONTACT_INFO.address.split("\n")[0]}
              </p>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* ISTRAŽI */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h3 className="text-xs font-bold text-[#FFFFFC] uppercase tracking-wider mb-6">
              Istraži
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#FFFFFC]/60 hover:text-[#E0BF18] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* POVEŽITE SE */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h3 className="text-xs font-bold text-[#FFFFFC] uppercase tracking-wider mb-6">
              Povežite se
            </h3>
            <ul className="space-y-3">
              {connectLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFFFFC]/60 hover:text-[#E0BF18] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PRAVNO */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h3 className="text-xs font-bold text-[#FFFFFC] uppercase tracking-wider mb-6">
              Pravno
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#FFFFFC]/60 hover:text-[#E0BF18] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFFFFC]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-[#FFFFFC]/40">
              © {currentYear} Skeki Energy. Sva prava pridržana.
            </p>
            <p className="text-sm text-[#FFFFFC]/40">
              Made with care by{" "}
              <a
                href="https://algo-solutions.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFFFFC]/40 hover:text-[#2371A2] transition-colors duration-300"
              >
                ALGO Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

