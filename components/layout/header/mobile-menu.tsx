"use client"

import { useState } from "react"
import { HamburgerMenu } from "@/components/shared/hamburger-menu"
import { Logo } from "@/components/shared/logo"
import { NAVIGATION_ITEMS, CONTACT_INFO } from "@/config/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { X, ChevronRight, Phone, Mail } from "lucide-react"

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const currentYear = new Date().getFullYear()

  const handleContactClick = () => {
    setOpen(false)
    setTimeout(() => {
      if (pathname !== "/") {
        router.push("/#contact")
        return
      }
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 300)
  }

  const handleLinkClick = (href: string) => {
    setOpen(false)
    
    setTimeout(() => {
      if (href.startsWith("#") && pathname === "/") {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }, 300)
  }

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 hover:bg-[#2371A2]/10 relative z-50"
        aria-label="Otvori meni"
      >
        <HamburgerMenu isOpen={open} className="text-[#FFFFFC]" />
      </button>

      {/* Full screen overlay - appears when open */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 transition-opacity duration-300 md:hidden",
          open ? "opacity-100 z-[999] pointer-events-auto" : "opacity-0 z-[-1] pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed top-0 bottom-0 right-0 h-dvh w-full bg-[#020202] border-l border-[#2371A2]/20 transition-transform duration-300 ease-in-out md:hidden flex flex-col shadow-2xl",
          open ? "translate-x-0 z-[1000]" : "translate-x-full z-[-1]"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#2371A2]/20 shrink-0">
          <Logo size="sm" />
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-[#2371A2]/10 transition-colors"
            aria-label="Zatvori meni"
          >
            <X className="w-6 h-6 text-[#FFFFFC]" />
          </button>
        </div>

        {/* Navigation - scrollable area */}
        <div className="flex-1 overflow-y-auto">
          <nav className="py-2">
            {NAVIGATION_ITEMS.map((item, index) => {
              const isActive = pathname === item.href || (item.href === "#" && pathname === "/")
              const isContactItem = item.href === "/#contact" || item.label === "Kontakt"
              
              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className={cn(
                      "flex items-center justify-between px-4 py-4 text-base font-medium transition-all duration-200",
                      isActive
                        ? "text-[#E0BF18]"
                        : "text-[#FFFFFC] hover:text-[#E0BF18]"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  {index < NAVIGATION_ITEMS.length - 1 && (
                    <div className="h-px bg-[#2371A2]/20 mx-4" />
                  )}
                  
                  {/* Contact Info Blocks - Show after Kontakt */}
                  {isContactItem && (
                    <div className="px-4 py-4 space-y-3">
                      {/* Phone */}
                      <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2371A2]/10">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-lg bg-[#2371A2]/10 border border-[#2371A2]/20 flex items-center justify-center shrink-0">
                            <Phone className="h-5 w-5 text-[#2371A2]" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-[#2371A2]/70 uppercase tracking-wider mb-1">
                              TELEFON
                            </div>
                            <a
                              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                              className="text-base font-medium text-[#FFFFFC] hover:text-[#E0BF18] transition-colors"
                            >
                              {CONTACT_INFO.phone}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2371A2]/10">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-lg bg-[#2371A2]/10 border border-[#2371A2]/20 flex items-center justify-center shrink-0">
                            <Mail className="h-5 w-5 text-[#2371A2]" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-[#2371A2]/70 uppercase tracking-wider mb-1">
                              EMAIL
                            </div>
                            <a
                              href={`mailto:${CONTACT_INFO.email}`}
                              className="text-base font-medium text-[#FFFFFC] hover:text-[#E0BF18] transition-colors break-all"
                            >
                              {CONTACT_INFO.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Prevent body scroll when menu is open */}
      <style jsx global>{`
        ${open ? `
          body {
            overflow: hidden !important;
            position: fixed !important;
            width: 100% !important;
            height: 100vh !important;
          }
        ` : ''}
      `}</style>
    </>
  )
}