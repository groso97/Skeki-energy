"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PROJECTS } from "@/config/constants"
import { use3DTilt } from "@/hooks/use-3d-tilt"
import { ArrowRight } from "lucide-react"

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 relative overflow-hidden bg-[#020202]"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 border-4 border-[#2371A2] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border-4 border-[#E0BF18] rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFFFC] text-balance">
            Naši projekti
          </h2>
          <p className="text-lg text-[#FFFFFC]/70 text-balance">
            Pregled nekih od naših uspješno realiziranih solarnih instalacija
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {PROJECTS.map((project, index) => {
            const { elementRef, transform } = use3DTilt({ maxRotation: 5 })
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
                <Card className="border-2 border-[#FFFFFC]/10 bg-[#020202] hover:border-[#E0BF18]/50 transition-all duration-500 group cursor-pointer ar-vr-card relative h-full">
                  <CardHeader>
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-[#E0BF18] uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="text-2xl text-[#FFFFFC] group-hover:text-[#E0BF18] transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#FFFFFC]/70 group-hover:text-[#FFFFFC]/90 transition-colors duration-300 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    {/* Decorative geometric shapes */}
                    <div className="absolute top-4 right-4 w-16 h-16 border-2 border-[#2371A2]/20 rounded-lg rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-[#E0BF18]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6"
          >
            Pogledaj sve projekte
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

