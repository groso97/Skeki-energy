"use client"

import { useState, useEffect } from "react"
import { HamburgerMenu } from "@/components/shared/hamburger-menu"
import { NAVIGATION_ITEMS, COMPANY_NAME } from "@/config/constants"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { X } from "lucide-react"

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
          "fixed top-0 bottom-0 right-0 w-[280px] bg-[#020202] border-l border-[#2371A2]/20 transition-transform duration-300 ease-in-out md:hidden flex flex-col shadow-2xl",
          open ? "translate-x-0 z-[1000]" : "translate-x-full z-[-1]"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#2371A2]/20 flex-shrink-0">
          <h2 className="text-xl font-semibold text-[#FFFFFC]">Meni</h2>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-[#2371A2]/10 transition-colors"
            aria-label="Zatvori meni"
          >
            <X className="w-6 h-6 text-[#FFFFFC]" />
          </button>
        </div>

        {/* Navigation - scrollable area */}
        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-2">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href === "#" && pathname === "/")
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                    isActive
                      ? "text-[#E0BF18] bg-[#E0BF18]/10 border border-[#E0BF18]/30"
                      : "text-[#FFFFFC] hover:text-[#E0BF18] hover:bg-[#2371A2]/10"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#2371A2]/20 bg-[#020202] flex-shrink-0">
          <Button
            onClick={handleContactClick}
            className="w-full bg-[#E0BF18] text-[#020202] rounded-lg px-4 py-3 font-semibold hover:bg-[#E0BF18]/90 transition-all duration-200"
          >
            Kontaktiraj nas
          </Button>

          <div className="mt-3 space-y-1 text-sm text-[#FFFFFC]/70">
            <p>© {currentYear} {COMPANY_NAME}</p>
            <Link
              href="/privacy-policy"
              onClick={() => handleLinkClick("/privacy-policy")}
              className="block hover:text-[#E0BF18] transition-colors"
            >
              Politika privatnosti
            </Link>
          </div>
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