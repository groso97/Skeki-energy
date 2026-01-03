"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export const useScrollBlur = () => {
  const [isBlurred, setIsBlurred] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Use IntersectionObserver for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Remove blur when section is 20% visible
          setIsBlurred(!entry.isIntersecting)
        })
      },
      {
        threshold: 0.2, // Trigger when 20% visible
        rootMargin: "0px 0px -10% 0px", // Trigger slightly before entering
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return { sectionRef, isBlurred }
}

