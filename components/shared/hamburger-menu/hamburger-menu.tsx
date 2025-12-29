"use client"

import { cn } from "@/lib/utils"

interface HamburgerMenuProps {
  isOpen: boolean
  className?: string
}

export const HamburgerMenu = ({ isOpen, className }: HamburgerMenuProps) => {
  return (
    <div className={cn("relative w-6 h-6 flex items-center justify-center", className)}>
      {/* Top line */}
      <span
        className={cn(
          "absolute left-0 w-full h-0.5 bg-current transition-all duration-500 ease-in-out origin-center",
          isOpen
            ? "top-1/2 rotate-45 -translate-y-1/2 delay-150"
            : "top-0 rotate-0 translate-y-0"
        )}
      />
      {/* Middle line */}
      <span
        className={cn(
          "absolute top-1/2 left-0 w-full h-0.5 bg-current -translate-y-1/2 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
        )}
      />
      {/* Bottom line */}
      <span
        className={cn(
          "absolute left-0 w-full h-0.5 bg-current transition-all duration-500 ease-in-out origin-center",
          isOpen
            ? "bottom-1/2 -rotate-45 translate-y-1/2 delay-150"
            : "bottom-0 rotate-0 translate-y-0"
        )}
      />
    </div>
  )
}

