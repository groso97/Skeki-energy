"use client"

import { STATISTICS } from "@/config/constants"

export const Statistics = () => {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden bg-[#020202]"
    >
      {/* Subtle background elements - hidden on mobile */}
      <div className="hidden md:block absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 border-2 border-[#E0BF18]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 border-2 border-[#2371A2]/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
          {STATISTICS.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center space-y-2 group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {Icon && (
                  <div className="flex justify-center mb-4">
                    <div className="h-10 w-10 rounded-lg bg-[#2371A2]/10 border border-[#2371A2]/20 flex items-center justify-center group-hover:bg-[#2371A2]/20 group-hover:border-[#2371A2]/40 group-hover:scale-110 transition-all duration-500">
                      <Icon className="h-5 w-5 text-[#2371A2] group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                )}
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFC] group-hover:text-[#E0BF18] transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-[#FFFFFC]/70 group-hover:text-[#FFFFFC]/90 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

