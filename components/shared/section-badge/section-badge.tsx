"use client"

import { cn } from "@/lib/utils"

interface SectionBadgeProps {
  text: string
  className?: string
}

export const SectionBadge = ({ text, className }: SectionBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full px-4 py-1.5 mb-4",
        "bg-[#020202] border-2 border-[#2371A2]/30 text-[#2371A2]",
        "font-semibold text-xs uppercase tracking-wider",
        "animate-pulse-glow-badge shadow-[0_0_15px_rgba(35,113,162,0.3)]",
        "drop-shadow-[0_0_8px_rgba(35,113,162,0.8)]",
        className
      )}
    >
      {text}
    </div>
  )
}

