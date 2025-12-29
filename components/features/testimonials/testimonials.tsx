"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TESTIMONIALS } from "@/config/constants"
import { useScrollBlur } from "@/hooks/use-scroll-blur"
import { use3DTilt } from "@/hooks/use-3d-tilt"
import { SectionBadge } from "@/components/shared/section-badge"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

export const Testimonials = () => {
  const { sectionRef, isBlurred } = useScrollBlur()

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={cn(
        "py-20 md:py-32 relative overflow-hidden bg-[#020202] transition-all duration-1000",
        isBlurred ? "blur-sm opacity-50" : "blur-0 opacity-100"
      )}
    >
      {/* Pulsing yellow light effect */}
      <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] bg-[#E0BF18] rounded-full blur-3xl opacity-16 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E0BF18] rounded-full blur-3xl opacity-12 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Large geometric shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 border-4 border-[#2371A2]/20 rounded-lg rotate-45 -translate-y-1/2 translate-x-1/2 animate-spin-slow opacity-25" />
      <div className="absolute bottom-0 left-0 w-56 h-56 border-4 border-[#E0BF18]/20 rounded-lg rotate-12 translate-y-1/2 -translate-x-1/2 animate-spin-reverse opacity-20" />

      {/* Medium floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-36 h-36 border-2 border-[#2371A2]/25 rounded-full animate-float-slow opacity-15" />
      <div className="absolute bottom-1/3 left-1/5 w-28 h-28 border-2 border-[#E0BF18]/25 rounded-lg rotate-45 animate-float opacity-20" />

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge text="Iskustva" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFFFC] text-balance">Što kažu naši klijenti</h2>
          <p className="text-lg text-[#FFFFFC]/70 text-balance">
            Povjerenje naših klijenata je naš najveći uspjeh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => {
            const { elementRef, transform } = use3DTilt({ maxRotation: 3 })
            return (
              <div
                key={index}
                ref={elementRef}
                className="ar-vr-card-wrapper"
                style={{
                  transform: transform,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s ease-out",
                }}
              >
                <Card className="border-2 border-[#FFFFFC]/10 bg-[#020202] hover:border-[#2371A2]/50 transition-all duration-500 group ar-vr-card relative h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <div className="h-10 w-10 rounded-lg bg-[#2371A2]/10 border border-[#2371A2]/20 flex items-center justify-center group-hover:bg-[#2371A2]/20 group-hover:border-[#2371A2]/40 group-hover:scale-110 transition-all duration-500">
                        <Quote className="h-5 w-5 text-[#2371A2] group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    <p className="text-lg mb-6 text-[#FFFFFC]/90 leading-relaxed group-hover:text-[#FFFFFC] transition-colors duration-300">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-[#FFFFFC]/10 pt-4">
                      <div className="font-semibold text-[#FFFFFC] group-hover:text-[#2371A2] transition-colors duration-300">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-[#FFFFFC]/70">
                        {testimonial.company}
                        {testimonial.role && ` • ${testimonial.role}`}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

