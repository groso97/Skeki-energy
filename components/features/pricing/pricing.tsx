"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PRICING_PLANS } from "@/config/constants"
import { useScrollBlur } from "@/hooks/use-scroll-blur"
import { use3DTilt } from "@/hooks/use-3d-tilt"
import { SectionBadge } from "@/components/shared/section-badge"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

export const Pricing = () => {
  const { sectionRef, isBlurred } = useScrollBlur()

  const handleContactClick = () => {
    const contactSection = document.getElementById("kontakt")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className={cn(
        "py-20 md:py-32 relative overflow-hidden bg-[#020202] transition-all duration-1000",
        isBlurred ? "blur-sm opacity-50" : "blur-0 opacity-100"
      )}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 border-4 border-[#2371A2] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 border-4 border-[#E0BF18] rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge text="Cijene" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFFFC] text-balance">
            Jednostavne, transparentne cijene
          </h2>
          <p className="text-lg text-[#FFFFFC]/70 text-balance">
            Odaberite paket koji najbolje odgovara vašim potrebama
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => {
            const { elementRef, transform } = use3DTilt({ maxRotation: 3 })
            const isHighlighted = plan.highlighted

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
                  className={cn(
                    "border-2 relative h-full transition-all duration-500 group cursor-pointer ar-vr-card",
                    isHighlighted
                      ? "border-[#E0BF18] bg-[#E0BF18]/5 shadow-lg shadow-[#E0BF18]/20"
                      : "border-[#FFFFFC]/10 bg-[#020202] hover:border-[#2371A2]/50"
                  )}
                >
                  {isHighlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#E0BF18] text-[#020202] px-4 py-1 rounded-full text-sm font-semibold">
                        Najpopularniji
                      </span>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <CardTitle
                      className={cn(
                        "text-2xl mb-2",
                        isHighlighted ? "text-[#E0BF18]" : "text-[#FFFFFC]"
                      )}
                    >
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-[#FFFFFC]/70 mb-4">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl md:text-5xl font-bold text-[#FFFFFC]">
                        {plan.price}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div
                            className={cn(
                              "h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                              isHighlighted ? "bg-[#E0BF18]" : "bg-[#2371A2]"
                            )}
                          >
                            <Check className="h-3 w-3 text-[#020202]" />
                          </div>
                          <span className="text-sm text-[#FFFFFC]/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={handleContactClick}
                      className={cn(
                        "w-full",
                        isHighlighted
                          ? "bg-[#E0BF18] text-[#020202] hover:bg-[#E0BF18]/90"
                          : "bg-transparent border-2 border-[#FFFFFC]/20 text-[#FFFFFC] hover:border-[#2371A2] hover:text-[#2371A2]"
                      )}
                    >
                      {plan.cta}
                    </Button>
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

