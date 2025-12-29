"use client"

import { TRACK_RECORD } from "@/config/constants"
import { useScrollBlur } from "@/hooks/use-scroll-blur"
import { SectionBadge } from "@/components/shared/section-badge"
import { cn } from "@/lib/utils"

export const TrackRecord = () => {
  const { sectionRef, isBlurred } = useScrollBlur()

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-20 md:py-32 relative overflow-hidden bg-[#020202] transition-all duration-1000",
        isBlurred ? "blur-sm opacity-50" : "blur-0 opacity-100"
      )}
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 border-2 border-[#E0BF18]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 border-2 border-[#2371A2]/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionBadge text="Statistike" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFFFC] text-balance">
            Dokazana povijest uspjeha
          </h2>
          <p className="text-lg text-[#FFFFFC]/70 text-balance">
            Brojke koje govore same za sebe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center space-y-4 group">
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFFFFC] group-hover:text-[#E0BF18] transition-colors duration-300">
              {TRACK_RECORD.years}
            </div>
            <div className="text-xl md:text-2xl text-[#FFFFFC]/70 group-hover:text-[#FFFFFC]/90 transition-colors duration-300">
              {TRACK_RECORD.yearsLabel}
            </div>
          </div>

          <div className="text-center space-y-4 group">
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFFFFC] group-hover:text-[#2371A2] transition-colors duration-300">
              {TRACK_RECORD.retention}
            </div>
            <div className="text-xl md:text-2xl text-[#FFFFFC]/70 group-hover:text-[#FFFFFC]/90 transition-colors duration-300">
              {TRACK_RECORD.retentionLabel}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

