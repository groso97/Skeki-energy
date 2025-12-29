"use client"

import { useScrollBlur } from "@/hooks/use-scroll-blur"
import { SectionBadge } from "@/components/shared/section-badge"
import { cn } from "@/lib/utils"

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge text="O nama" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFFFC] text-balance">
            Skeki Energy – vaš partner za solarnu energiju
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[#FFFFFC]/80 leading-relaxed mb-6">
              Skeki Energy d.o.o. je tvrtka specijalizirana za montažu solarnih elektrana, s naglaskom na kvalitetu izvedbe, pouzdanost i profesionalan pristup svakom projektu. Dugogodišnje iskustvo našeg tima stečeno je radom na terenu i suradnjom s renomiranim međunarodnim partnerima.
            </p>
            <p className="text-lg text-[#FFFFFC]/80 leading-relaxed mb-6">
              Posebno se ističe iskustvo rada u Njemačkoj s tvrtkom Enpal GmbH, gdje smo sudjelovali u realizaciji više od 300 fotonaponskih sustava na stambenim objektima. Takav opseg projekata omogućio nam je iznimno praktično znanje, visoku razinu preciznosti te sposobnost prilagodbe različitim tipovima krovova i zahtjevnim montažnim uvjetima.
            </p>
            <p className="text-lg text-[#FFFFFC]/80 leading-relaxed mb-6">
              Osim tehničke stručnosti, veliku pažnju posvećujemo jasnoj komunikaciji s klijentima, poštivanju dogovorenih rokova i urednoj izvedbi radova. Posjedujemo sve potrebne certifikate, obuke i sigurnosne dozvole, uključujući rad na visini.
            </p>
            <p className="text-lg text-[#FFFFFC]/80 leading-relaxed">
              Trenutačni fokus Skeki Energy d.o.o. isključivo je na montaži solarnih elektrana, s ciljem pružanja dugotrajnog, sigurnog i učinkovitog rješenja prilagođenog potrebama svakog klijenta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

