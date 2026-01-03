"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BENEFITS } from "@/config/constants"
import { useScrollBlur } from "@/hooks/use-scroll-blur"
import { SectionBadge } from "@/components/shared/section-badge"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface BenefitCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="relative group h-full">
      {/* Glow effect behind card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#2371A2]/0 via-[#2371A2]/20 to-[#E0BF18]/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      <Card className="relative border-2 border-[#FFFFFC]/10 bg-[#020202]/95 backdrop-blur-sm hover:border-[#2371A2]/60 transition-all duration-500 h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2371A2]/20">
        <CardHeader>
          {/* Icon with glow */}
          <div className="mb-4 relative">
            <div className="absolute -inset-2 bg-[#2371A2]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-[#2371A2]/20 to-[#2371A2]/5 border border-[#2371A2]/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Icon className="h-6 w-6 text-[#2371A2] group-hover:text-[#E0BF18] transition-colors duration-500" />
            </div>
          </div>
          <CardTitle className="text-xl text-[#FFFFFC] group-hover:text-[#2371A2] transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#FFFFFC]/70 leading-relaxed group-hover:text-[#FFFFFC] transition-colors duration-500">
            {description}
          </p>
        </CardContent>
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#2371A2]/0 via-transparent to-[#E0BF18]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </Card>
    </div>
  )
}

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
      {/* Pulsing blue light effect - hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 left-1/4 w-96 h-96 bg-[#2371A2] rounded-full blur-3xl opacity-20 animate-pulse-glow" />
      <div className="hidden md:block absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#2371A2] rounded-full blur-3xl opacity-15 animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      {/* Geometric shapes overlay - hidden on mobile */}
      <div className="hidden md:block absolute top-10 right-10 w-32 h-32 border-2 border-[#2371A2]/30 rounded-lg rotate-45 animate-spin-slow opacity-30" />
      <div className="hidden md:block absolute bottom-20 left-5 w-24 h-24 border-2 border-[#E0BF18]/30 rounded-lg rotate-12 animate-spin-reverse opacity-25" />
      
      {/* Floating geometric shapes - hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 left-10 w-20 h-20 border-2 border-[#2371A2]/20 rounded-lg rotate-45 animate-float-slow opacity-20" />
      <div className="hidden md:block absolute bottom-1/3 right-20 w-28 h-28 border-2 border-[#E0BF18]/20 rounded-lg rotate-12 animate-float opacity-15" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge text="Prednosti" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFFFC] text-balance">Zašto solarni paneli?</h2>
          <p className="text-lg text-[#FFFFFC]/70 text-balance">
            Investirajte u budućnost s tehnologijom koja se isplati već prvog dana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
          {BENEFITS.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

