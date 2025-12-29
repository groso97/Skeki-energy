"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BENEFITS } from "@/config/constants"
import { useScrollBlur } from "@/hooks/use-scroll-blur"
import { use3DTilt } from "@/hooks/use-3d-tilt"
import { SectionBadge } from "@/components/shared/section-badge"
import { cn } from "@/lib/utils"

export const Benefits = () => {
  const { sectionRef, isBlurred } = useScrollBlur()

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className={cn(
        "py-20 md:py-32 relative overflow-hidden bg-[#020202] transition-all duration-1000",
        isBlurred ? "blur-sm opacity-50" : "blur-0 opacity-100"
      )}
    >
      {/* Pulsing blue light effect */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#2371A2] rounded-full blur-3xl opacity-20 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#2371A2] rounded-full blur-3xl opacity-15 animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      {/* Geometric shapes overlay */}
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-[#2371A2]/30 rounded-lg rotate-45 animate-spin-slow opacity-30" />
      <div className="absolute bottom-20 left-5 w-24 h-24 border-2 border-[#E0BF18]/30 rounded-lg rotate-12 animate-spin-reverse opacity-25" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-[#2371A2]/20 rounded-lg rotate-45 animate-float-slow opacity-20" />
      <div className="absolute bottom-1/3 right-20 w-28 h-28 border-2 border-[#E0BF18]/20 rounded-lg rotate-12 animate-float opacity-15" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge text="Prednosti" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFFFC] text-balance">Zašto solarni paneli?</h2>
          <p className="text-lg text-[#FFFFFC]/70 text-balance">
            Investirajte u budućnost s tehnologijom koja se isplati već prvog dana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon
            const { elementRef, transform } = use3DTilt({ maxRotation: 8 })
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
                <Card
                  className="border-2 border-[#FFFFFC]/10 bg-[#020202] hover:border-[#2371A2]/50 transition-all duration-500 group ar-vr-card relative h-full"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-[#2371A2]/10 border border-[#2371A2]/20 flex items-center justify-center mb-4 group-hover:bg-[#2371A2]/20 group-hover:border-[#2371A2]/40 group-hover:scale-110 transition-all duration-500 ar-vr-icon">
                    <Icon className="h-5 w-5 text-[#2371A2] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardTitle className="text-xl text-[#FFFFFC] group-hover:text-[#2371A2] transition-colors duration-300">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#FFFFFC]/70 leading-relaxed group-hover:text-[#FFFFFC]/90 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </CardContent>
                  {/* 3D depth effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

