"use client"

import { Logo } from "@/components/shared/logo"
import { CONTACT_INFO, NAVIGATION_ITEMS } from "@/config/constants"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const whatsappNumber = "385977109235" // Remove spaces and + for WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}`
  
  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
  
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: WhatsAppIcon, href: whatsappUrl, label: "WhatsApp", isCustom: true },
  ]

  return (
    <footer className="bg-[#020202] border-t border-[#2371A2]/20 py-16 md:py-20 relative overflow-hidden">
      {/* Pulsing light effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2371A2] rounded-full blur-3xl opacity-15 animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#E0BF18] rounded-full blur-3xl opacity-12 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#2371A2] rounded-full blur-3xl opacity-10 animate-pulse-glow" style={{ animationDelay: "3s" }} />
      
      {/* Geometric shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-[#2371A2]/20 rounded-lg rotate-45 animate-spin-slow opacity-20" />
      <div className="absolute bottom-20 left-5 w-24 h-24 border-2 border-[#E0BF18]/20 rounded-lg rotate-12 animate-spin-reverse opacity-15" />
      <div className="absolute top-1/3 left-10 w-20 h-20 border-2 border-[#2371A2]/15 rounded-lg rotate-45 animate-float-slow opacity-15" />
      <div className="absolute bottom-1/3 right-20 w-28 h-28 border-2 border-[#E0BF18]/15 rounded-lg rotate-12 animate-float opacity-12" />

      <div className="container px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo size="lg" className="mb-1" />
            <p className="text-[#FFFFFC]/70 mb-6 max-w-md leading-relaxed text-sm md:text-base">
              Vaš pouzdani partner za instalaciju solarnih panela. Gradimo svetliju budućnost, jednu kuću po kuću.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                const isCustom = (social as any).isCustom
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className={cn(
                      "group relative w-10 h-10 rounded-lg bg-[#020202] border border-[#FFFFFC]/10",
                      "flex items-center justify-center text-[#FFFFFC]/60",
                      "hover:border-[#2371A2]/50 hover:text-[#2371A2] hover:bg-[#2371A2]/5",
                      "transition-all duration-500 ease-in-out",
                      "hover:scale-110 hover:shadow-[0_0_15px_rgba(35,113,162,0.3)]"
                    )}
                    aria-label={social.label}
                  >
                    {isCustom ? (
                      <Icon />
                    ) : (
                      <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                    )}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#2371A2]/0 via-[#2371A2]/0 to-[#2371A2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-[#FFFFFC] text-lg relative inline-block">
              Brze poveznice
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2371A2] to-[#E0BF18] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </h3>
            <ul className="space-y-3 text-sm text-[#FFFFFC]/70">
              {NAVIGATION_ITEMS.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative inline-flex items-center gap-2",
                      "hover:text-[#E0BF18] transition-all duration-500 ease-in-out"
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-6 text-[#FFFFFC] text-lg">Kontakt</h3>
            <ul className="space-y-4 text-sm text-[#FFFFFC]/70">
              <li className="group">
                <Link
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 hover:text-[#2371A2] transition-all duration-500 ease-in-out group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2371A2]/10 border border-[#2371A2]/20 flex items-center justify-center group-hover:bg-[#2371A2]/20 group-hover:border-[#2371A2]/40 group-hover:scale-110 transition-all duration-500">
                    <Phone className="h-4 w-4 text-[#2371A2] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="relative z-10">{CONTACT_INFO.phone}</span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 hover:text-[#2371A2] transition-all duration-500 ease-in-out group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2371A2]/10 border border-[#2371A2]/20 flex items-center justify-center group-hover:bg-[#2371A2]/20 group-hover:border-[#2371A2]/40 group-hover:scale-110 transition-all duration-500">
                    <Mail className="h-4 w-4 text-[#2371A2] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="relative z-10 break-all">{CONTACT_INFO.email}</span>
                </Link>
              </li>
              <li className="group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2371A2]/10 border border-[#2371A2]/20 flex items-center justify-center group-hover:bg-[#2371A2]/20 group-hover:border-[#2371A2]/40 group-hover:scale-110 transition-all duration-500">
                    <MapPin className="h-4 w-4 text-[#2371A2] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="relative z-10 leading-relaxed">{CONTACT_INFO.address.split("\n")[0]}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFFFFC]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#FFFFFC]/60">
              © {currentYear} Skeki Energy. Sva prava pridržana.
            </p>
            <div className="flex items-center gap-6 text-xs text-[#FFFFFC]/50">
              <Link href="#" className="hover:text-[#2371A2] transition-colors duration-500">
                Pravila privatnosti
              </Link>
              <Link href="#" className="hover:text-[#2371A2] transition-colors duration-500">
                Uvjeti korištenja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

