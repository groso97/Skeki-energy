"use client"

import { useEffect, useRef, useState } from "react"

// Throttle function for performance
const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export const useScrollBlur = () => {
  const [isBlurred, setIsBlurred] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Blur je aktivan kada je sekcija pri dnu viewporta (iznad viewporta)
      // Ukloni blur kada sekcija počne ulaziti u viewport
      if (rect.top < windowHeight * 0.8 && rect.top > -rect.height * 0.2) {
        setIsBlurred(false)
      } else if (rect.top >= windowHeight * 0.8) {
        // Sekcija je pri dnu - aktiviraj blur
        setIsBlurred(true)
      }
    }

    // Throttled version for better performance
    const throttledHandleScroll = throttle(handleScroll, 16) // ~60fps

    // Provjeri inicijalno stanje
    handleScroll()

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    window.addEventListener("resize", throttledHandleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll)
      window.removeEventListener("resize", throttledHandleScroll)
    }
  }, [])

  return { sectionRef, isBlurred }
}

