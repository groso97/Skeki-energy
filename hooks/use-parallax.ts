"use client"

import { useEffect, useRef, useState } from "react"

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const scrollY = window.scrollY
      const elementTop = rect.top + scrollY
      const windowHeight = window.innerHeight

      // Calculate parallax offset
      const scrolled = scrollY + windowHeight
      const parallaxOffset = (scrolled - elementTop) * speed

      setOffset(parallaxOffset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return { elementRef, offset }
}

