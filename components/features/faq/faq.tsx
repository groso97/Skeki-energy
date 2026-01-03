"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQS } from "@/config/constants"
import { SectionBadge } from "@/components/shared/section-badge"

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-20 md:py-32 relative overflow-hidden bg-[#020202]"
    >
      {/* Pulsing yellow light effect */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#E0BF18] rounded-full blur-3xl opacity-12 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2371A2] rounded-full blur-3xl opacity-10 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Geometric background elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 border-3 border-[#E0BF18]/20 rounded-lg rotate-45 animate-spin-slow opacity-25" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 border-3 border-[#2371A2]/20 rounded-lg rotate-12 animate-spin-reverse opacity-20" />
      
      {/* Floating shapes */}
      <div className="absolute top-1/3 left-10 w-24 h-24 border-2 border-[#E0BF18]/20 rounded-full animate-float-slow opacity-15" />
      <div className="absolute bottom-1/3 right-16 w-28 h-28 border-2 border-[#2371A2]/20 rounded-lg rotate-45 animate-float opacity-20" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge text="Pitanja" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFFFC] text-balance">Česta pitanja</h2>
          <p className="text-lg text-[#FFFFFC]/70 text-balance">
            Odgovori na najčešća pitanja o solarnim panelima i instalaciji
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-[#FFFFFC]/10 bg-[#020202] rounded-lg px-6 data-[state=open]:border-[#E0BF18]/50 transition-all duration-500 group ar-vr-accordion"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-[#FFFFFC] hover:no-underline py-6 group-hover:text-[#E0BF18] transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#FFFFFC]/70 leading-relaxed pb-6 data-[state=open]:animate-accordion-content">
                  {faq.answer}
                </AccordionContent>
                {/* Interactive glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

