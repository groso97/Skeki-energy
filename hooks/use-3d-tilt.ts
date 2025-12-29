"use client"

import { useEffect, useRef, useState } from "react"

interface Use3DTiltOptions {
  maxRotation?: number
  perspective?: number
}

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

export const use3DTilt = (options: Use3DTiltOptions = {}) => {
  const { maxRotation = 10, perspective = 1000 } = options
  const elementRef = useRef<HTMLElement>(null)
  const [transform, setTransform] = useState("")

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -maxRotation
      const rotateY = ((x - centerX) / centerX) * maxRotation

      setTransform(
        `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
      )
    }

    const handleMouseLeave = () => {
      setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translateZ(0px)`)
    }

    // Throttled version for better performance
    const throttledHandleMouseMove = throttle(handleMouseMove, 16) // ~60fps

    element.addEventListener("mousemove", throttledHandleMouseMove, { passive: true })
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", throttledHandleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [maxRotation, perspective])

  return { elementRef, transform }
}

