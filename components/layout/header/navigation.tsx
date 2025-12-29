"use client"

import { NAVIGATION_ITEMS } from "@/config/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = pathname === item.href || (item.href === "#" && pathname === "/")
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors",
              isActive
                ? "text-[#E0BF18]"
                : "text-[#FFFFFC] hover:text-[#E0BF18]"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

