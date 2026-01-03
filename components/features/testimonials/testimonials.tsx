"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { TESTIMONIALS } from "@/config/constants"
import { useScrollBlur } from "@/hooks/use-scroll-blur"
import { SectionBadge } from "@/components/shared/section-badge"
import { cn } from "@/lib/utils"
import { Quote, Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  role?: string
}

const TestimonialCard = ({ quote, author, company, role }: TestimonialCardProps) => {
  return (
    <div className="relative group h-full">
      {/* Glow effect behind card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#2371A2]/0 via-[#2371A2]/20 to-[#E0BF18]/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      <Card className="relative border-2 border-[#FFFFFC]/10 bg-[#020202]/95 backdrop-blur-sm hover:border-[#2371A2]/60 transition-all duration-500 h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2371A2]/20">
        <CardContent className="pt-8 pb-6">
          {/* Quote icon with glow */}
          <div className="mb-6 relative">
            <div className="absolute -inset-2 bg-[#2371A2]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-[#2371A2]/20 to-[#2371A2]/5 border border-[#2371A2]/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Quote className="h-6 w-6 text-[#2371A2] group-hover:text-[#E0BF18] transition-colors duration-500" />
            </div>
          </div>
          
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 text-[#E0BF18] fill-[#E0BF18] group-hover:scale-110 transition-transform duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
          
          {/* Quote text */}
          <p className="text-lg mb-6 text-[#FFFFFC]/85 leading-relaxed group-hover:text-[#FFFFFC] transition-colors duration-500 italic">
            "{quote}"
          </p>
          
          {/* Author info */}
          <div className="border-t border-[#FFFFFC]/10 group-hover:border-[#2371A2]/30 pt-5 transition-colors duration-500">
            <div className="flex items-center gap-3">
              {/* Avatar placeholder */}
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#2371A2] to-[#E0BF18] flex items-center justify-center text-[#020202] font-bold text-sm group-hover:scale-110 transition-transform duration-500">
                {author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-[#FFFFFC] group-hover:text-[#2371A2] transition-colors duration-300">
                  {author}
                </div>
                <div className="text-sm text-[#FFFFFC]/60 group-hover:text-[#FFFFFC]/80 transition-colors duration-300">
                  {company}
                  {role && ` • ${role}`}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#2371A2]/0 via-transparent to-[#E0BF18]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </Card>
    </div>
  )
}

export const Testimonials = () => {
  const { sectionRef, isBlurred } = useScrollBlur()

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={cn(
        "py-20 md:py-32 relative overflow-hidden bg-[#020202] transition-all duration-1000",
        isBlurred ? "blur-sm opacity-50" : "blur-0 opacity-100"
      )}
    >
      {/* Pulsing yellow light effect - hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 left-1/2 w-[550px] h-[550px] bg-[#E0BF18] rounded-full blur-3xl opacity-16 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E0BF18] rounded-full blur-3xl opacity-12 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Large geometric shapes - hidden on mobile */}
      <div className="hidden md:block absolute top-0 right-0 w-64 h-64 border-4 border-[#2371A2]/20 rounded-lg rotate-45 -translate-y-1/2 translate-x-1/2 animate-spin-slow opacity-25" />
      <div className="hidden md:block absolute bottom-0 left-0 w-56 h-56 border-4 border-[#E0BF18]/20 rounded-lg rotate-12 translate-y-1/2 -translate-x-1/2 animate-spin-reverse opacity-20" />

      {/* Medium floating shapes - hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 right-1/4 w-36 h-36 border-2 border-[#2371A2]/25 rounded-full animate-float-slow opacity-15" />
      <div className="hidden md:block absolute bottom-1/3 left-1/5 w-28 h-28 border-2 border-[#E0BF18]/25 rounded-lg rotate-45 animate-float opacity-20" />

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge text="Iskustva" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFFFC] text-balance">Što kažu naši klijenti</h2>
          <p className="text-lg text-[#FFFFFC]/70 text-balance">
            Povjerenje naših klijenata je naš najveći uspjeh
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6 py-4">
              {TESTIMONIALS.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2">
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    company={testimonial.company}
                    role={testimonial.role}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation buttons below carousel */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious 
                className="static translate-y-0 h-12 w-12 bg-[#020202] border-2 border-[#2371A2]/50 text-[#2371A2] hover:bg-[#2371A2] hover:text-[#FFFFFC] hover:border-[#2371A2] transition-all duration-300 disabled:opacity-30"
                aria-label="Prethodni komentar"
              />
              <CarouselNext 
                className="static translate-y-0 h-12 w-12 bg-[#020202] border-2 border-[#2371A2]/50 text-[#2371A2] hover:bg-[#2371A2] hover:text-[#FFFFFC] hover:border-[#2371A2] transition-all duration-300 disabled:opacity-30"
                aria-label="Sljedeći komentar"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

