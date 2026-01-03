"use client"

import { Card, CardContent } from "@/components/ui/card"
import { STEPS } from "@/config/constants"
import { SectionBadge } from "@/components/shared/section-badge"

export const HowWeWork = () => {
  return (
    <section
      id="how-we-work"
      className="py-20 md:py-32 relative overflow-hidden bg-[#020202]"
    >
      {/* Pulsing blue light effect - hidden on mobile */}
      <div className="hidden md:block absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#2371A2] rounded-full blur-3xl opacity-15 animate-pulse-glow" />
      <div className="hidden md:block absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#2371A2] rounded-full blur-3xl opacity-12 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Geometric shapes overlay */}
      <div className="absolute top-0 left-0 w-40 h-40 border-4 border-[#E0BF18]/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow opacity-30" />
      <div className="absolute bottom-0 right-0 w-48 h-48 border-4 border-[#2371A2]/20 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-slow opacity-25" style={{ animationDelay: "1s" }} />
      
      {/* Rotating squares - hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-20 w-24 h-24 border-2 border-[#E0BF18]/25 rotate-45 animate-spin-slow opacity-30" />
      <div className="absolute bottom-32 left-16 w-20 h-20 border-2 border-[#2371A2]/25 rotate-12 animate-spin-reverse opacity-25" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge text="Proces" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFFFC] text-balance">Kako radimo</h2>
          <p className="text-lg text-[#FFFFFC]/70 text-balance">
            Jednostavan proces od prvog kontakta do vaše vlastite solarne elektrane
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative ar-vr-step">
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 ar-vr-connector" />
                )}
                <Card className="relative bg-[#020202] border-2 border-[#FFFFFC]/10 hover:border-[#2371A2]/50 hover:shadow-lg transition-all duration-500 group ar-vr-card-3d">
                  <CardContent className="pt-8 text-center">
                    <div className="relative inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#2371A2] text-[#FFFFFC] mb-6 text-2xl font-bold group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ar-vr-badge">
                      {step.step}
                    </div>
                    <div className="mb-4 flex justify-center ar-vr-icon-container">
                      <div className="h-10 w-10 rounded-lg bg-[#2371A2]/10 border border-[#2371A2]/20 flex items-center justify-center group-hover:bg-[#2371A2]/20 group-hover:border-[#2371A2]/40 group-hover:scale-110 transition-all duration-500">
                        <Icon className="h-5 w-5 text-[#2371A2] group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#FFFFFC] group-hover:text-[#2371A2] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[#FFFFFC]/70 leading-relaxed group-hover:text-[#FFFFFC]/90 transition-colors duration-300">
                      {step.description}
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

