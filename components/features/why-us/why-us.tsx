"use client"

import { useScrollBlur } from "@/hooks/use-scroll-blur"
import { SectionBadge } from "@/components/shared/section-badge"
import { cn } from "@/lib/utils"
import { Award, Users, Shield, Target, CheckCircle2, Globe } from "lucide-react"

const highlights = [
  {
    icon: Globe,
    value: "300+",
    label: "Projekata u Njemačkoj",
    description: "s Enpal GmbH",
  },
  {
    icon: Award,
    value: "100%",
    label: "Certifikati",
    description: "i dozvole za rad",
  },
  {
    icon: Users,
    value: "24h",
    label: "Odziv",
    description: "na vaš upit",
  },
]

const features = [
  { icon: CheckCircle2, text: "Visoka razina preciznosti" },
  { icon: CheckCircle2, text: "Prilagodba svim tipovima krovova" },
  { icon: CheckCircle2, text: "Jasna komunikacija s klijentima" },
  { icon: CheckCircle2, text: "Poštivanje dogovorenih rokova" },
  { icon: CheckCircle2, text: "Certifikati za rad na visini" },
  { icon: CheckCircle2, text: "Dugotrajno i sigurno rješenje" },
]

export const WhyUs = () => {
  const { sectionRef, isBlurred } = useScrollBlur()

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className={cn(
        "py-20 md:py-32 relative overflow-hidden bg-[#020202] transition-all duration-1000",
        isBlurred ? "blur-sm opacity-50" : "blur-0 opacity-100"
      )}
    >
      {/* Pulsing yellow light effect */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#E0BF18] rounded-full blur-3xl opacity-18 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E0BF18] rounded-full blur-3xl opacity-15 animate-pulse-glow" style={{ animationDelay: "2s" }} />
      
      {/* Large geometric shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 border-4 border-[#2371A2]/20 rounded-lg rotate-45 -translate-y-1/2 translate-x-1/2 animate-spin-slow opacity-25" />
      <div className="absolute bottom-0 left-0 w-56 h-56 border-4 border-[#E0BF18]/20 rounded-lg rotate-12 translate-y-1/2 -translate-x-1/2 animate-spin-reverse opacity-20" />
      
      {/* Medium floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-36 h-36 border-2 border-[#2371A2]/25 rounded-full animate-float-slow opacity-15" />
      <div className="absolute bottom-1/3 left-1/5 w-28 h-28 border-2 border-[#E0BF18]/25 rounded-lg rotate-45 animate-float opacity-20" />
      
      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge text="O nama" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFFFC] text-balance">
            Skeki Energy – vaš partner za solarnu energiju
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
          
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E0BF18] via-[#2371A2] to-transparent rounded-full" />
              <div className="pl-6 space-y-6">
                <p className="text-lg text-[#FFFFFC]/90 leading-relaxed">
                  <span className="text-[#E0BF18] font-semibold">Skeki Energy d.o.o.</span> je tvrtka specijalizirana za montažu solarnih elektrana, s naglaskom na kvalitetu izvedbe, pouzdanost i profesionalan pristup svakom projektu.
                </p>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  Posebno se ističe iskustvo rada u <span className="text-[#2371A2] font-medium">Njemačkoj s tvrtkom Enpal GmbH</span>, gdje smo sudjelovali u realizaciji više od 300 fotonaponskih sustava na stambenim objektima.
                </p>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  Posjedujemo sve potrebne certifikate, obuke i sigurnosne dozvole, uključujući rad na visini.
                </p>
              </div>
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 group"
                >
                  <div className="h-6 w-6 rounded-full bg-[#E0BF18]/20 flex items-center justify-center group-hover:bg-[#E0BF18]/30 transition-colors duration-300">
                    <feature.icon className="h-4 w-4 text-[#E0BF18]" />
                  </div>
                  <span className="text-sm text-[#FFFFFC]/80 group-hover:text-[#FFFFFC] transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Highlight cards */}
          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2371A2]/0 via-[#2371A2]/10 to-[#E0BF18]/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <div className="relative flex items-center gap-6 p-6 rounded-xl bg-[#020202]/80 border-2 border-[#FFFFFC]/10 hover:border-[#2371A2]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2371A2]/10">
                  {/* Icon */}
                  <div className="relative">
                    <div className="absolute -inset-2 bg-[#2371A2]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-16 w-16 rounded-xl bg-gradient-to-br from-[#2371A2]/20 to-[#2371A2]/5 border border-[#2371A2]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <highlight.icon className="h-8 w-8 text-[#2371A2] group-hover:text-[#E0BF18] transition-colors duration-500" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl md:text-4xl font-bold text-[#E0BF18]">
                        {highlight.value}
                      </span>
                      <span className="text-lg font-semibold text-[#FFFFFC] group-hover:text-[#2371A2] transition-colors duration-300">
                        {highlight.label}
                      </span>
                    </div>
                    <p className="text-sm text-[#FFFFFC]/60 mt-1">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Mission statement card */}
            <div className="relative mt-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E0BF18]/20 via-[#2371A2]/20 to-[#E0BF18]/20 rounded-xl blur-xl opacity-50" />
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#2371A2]/10 to-[#E0BF18]/5 border-2 border-[#E0BF18]/30">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#E0BF18]/20 flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-[#E0BF18]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#FFFFFC] mb-2">Naš fokus</h3>
                    <p className="text-[#FFFFFC]/70 text-sm leading-relaxed">
                      Pružanje dugotrajnog, sigurnog i učinkovitog rješenja prilagođenog potrebama svakog klijenta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

