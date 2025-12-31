"use client"

import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface HamburgerMenuProps {
  isOpen?: boolean
  variant?: "hamburger" | "close"
  className?: string
}

export const HamburgerMenu = ({ isOpen = false, variant, className }: HamburgerMenuProps) => {
  // If variant is explicitly set, use that, otherwise use isOpen state
  const showAsX = variant === "close" || (variant !== "hamburger" && isOpen)

  if (showAsX) {
    // X icon
    return (
      <div 
        className={cn(
          "relative flex items-center justify-center", 
          className
        )}
      >
        <X className="h-6 w-6 text-current" />
      </div>
    )
  }

  // Hamburger icon (3 lines)
  return (
    <div 
      className={cn(
        "relative w-6 h-5 flex flex-col justify-between", 
        className
      )}
    >
      <span className="w-full h-0.5 rounded-full bg-current" />
      <span className="w-full h-0.5 rounded-full bg-current" />
      <span className="w-full h-0.5 rounded-full bg-current" />
    </div>
  )
}

