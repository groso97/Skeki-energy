"use client"

import { Card, CardContent } from "@/components/ui/card"
import { SERVICES } from "@/config/constants"
import { useScrollBlur } from "@/hooks/use-scroll-blur"
import { SectionBadge } from "@/components/shared/section-badge"
import { cn } from "@/lib/utils"

export const Services = () => {
  const { sectionRef, isBlurred } = useScrollBlur()

  return (
    <section
      ref={sectionRef}
      id="services"
      className={cn(
        "py-20 md:py-32 relative overflow-hidden bg-[#020202] transition-all duration-1000",
        isBlurred ? "blur-sm opacity-50" : "blur-0 opacity-100"
      )}
    >
      {/* Pulsing blue light effect */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#2371A2] rounded-full blur-3xl opacity-15 animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#2371A2] rounded-full blur-3xl opacity-12 animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Geometric background elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 border-3 border-[#2371A2]/25 rounded-lg rotate-45 animate-spin-slow opacity-25" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 border-3 border-[#E0BF18]/25 rounded-lg rotate-12 animate-spin-reverse opacity-20" />

      {/* Floating shapes */}
      <div className="absolute top-1/3 left-10 w-24 h-24 border-2 border-[#2371A2]/20 rounded-full animate-float-slow opacity-15" />
      <div className="absolute bottom-1/3 right-16 w-28 h-28 border-2 border-[#E0BF18]/20 rounded-lg rotate-45 animate-float opacity-20" />

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge text="Usluge" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFFFC] text-balance">Što radimo</h2>
          <p className="text-lg text-[#FFFFFC]/70 text-balance">
            Kompletan spektar usluga za vašu solarnu energiju
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="relative">
                <Card className="relative bg-[#020202] border-2 border-[#FFFFFC]/10 hover:border-[#2371A2]/50 hover:shadow-lg transition-all duration-500 group h-full">
                  <CardContent className="pt-8 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="h-10 w-10 rounded-lg bg-[#2371A2]/10 border border-[#2371A2]/20 flex items-center justify-center group-hover:bg-[#2371A2]/20 group-hover:border-[#2371A2]/40 group-hover:scale-110 transition-all duration-500">
                        <Icon className="h-5 w-5 text-[#2371A2] group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#FFFFFC] group-hover:text-[#2371A2] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#FFFFFC]/70 leading-relaxed group-hover:text-[#FFFFFC]/90 transition-colors duration-300">
                      {service.description}
                    </p>
                  </CardContent>
                  {/* 3D depth shadow */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

