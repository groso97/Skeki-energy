"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("kontakt")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLearnMoreClick = () => {
    const benefitsSection = document.getElementById("benefits")
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#020202]">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#020202] to-[#000000]" />
      
      {/* Subtle floating orbs - optimized with will-change */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#E0BF18]/10 rounded-full blur-3xl animate-float-slow opacity-50 will-change-transform" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#2371A2]/8 rounded-full blur-3xl animate-float opacity-50 will-change-transform" />

      {/* Geometric shapes - optimized with will-change */}
      <div className="absolute top-0 right-0 w-96 h-96">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-[#E0BF18]/20 rotate-45 animate-spin-slow will-change-transform" />
        <div className="absolute top-40 right-40 w-24 h-24 border-2 border-[#2371A2]/20 rotate-12 animate-spin-reverse will-change-transform" />
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96">
        <div className="absolute bottom-20 left-20 w-40 h-40 border-2 border-[#2371A2]/20 -rotate-45 animate-spin-slow will-change-transform" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in ar-vr-parallax">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance animate-slide-up">
            <span className="text-[#FFFFFC]">Uštedi na struji</span>
            <br />
            <span className="text-[#FFFFFC]/70">uz </span>
            <span className="relative inline-block">
              <span className="relative z-10 text-[#E0BF18] drop-shadow-[0_0_20px_rgba(224,191,24,0.4)]">
                solarne panele
              </span>
              {/* Subtle glow effect */}
              <span className="absolute inset-0 blur-xl bg-[#E0BF18] opacity-30 animate-solar-glow-subtle" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-[#FFFFFC]/80 max-w-2xl mx-auto text-balance animate-slide-up-delay">
            Postanite energetski neovisni i smanjite račune za struju do 90% uz profesionalnu instalaciju solarnih
            panela
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-up-delay-2">
            <Button
              size="lg"
              className="text-lg px-8 py-6 group bg-[#E0BF18] text-[#020202] hover:bg-[#E0BF18]/90 shadow-lg shadow-[#E0BF18]/30 hover:shadow-[#E0BF18]/50 transition-all ar-vr-button relative overflow-hidden"
              onClick={handleContactClick}
            >
              <span className="relative z-10 flex items-center">
                Pošaljite upit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#E0BF18] to-[#FFD700] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={handleLearnMoreClick}
            >
              Saznaj više
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-[#FFFFFC]/70 animate-fade-in-delay">
            <div className="flex items-center gap-2 group">
              <div className="h-2 w-2 rounded-full bg-[#E0BF18] group-hover:scale-150 transition-transform" />
              <span>Besplatno savjetovanje</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="h-2 w-2 rounded-full bg-[#2371A2] group-hover:scale-150 transition-transform" />
              <span>Brza instalacija</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="h-2 w-2 rounded-full bg-[#E0BF18] group-hover:scale-150 transition-transform" />
              <span>Jamstvo kvalitete</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

