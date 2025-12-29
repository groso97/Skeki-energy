"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BLOG_POSTS } from "@/config/constants"
import { useScrollBlur } from "@/hooks/use-scroll-blur"
import { use3DTilt } from "@/hooks/use-3d-tilt"
import { SectionBadge } from "@/components/shared/section-badge"
import { cn } from "@/lib/utils"
import { ArrowRight, Calendar } from "lucide-react"

export const Blog = () => {
  const { sectionRef, isBlurred } = useScrollBlur()

  return (
    <section
      ref={sectionRef}
      id="blog"
      className={cn(
        "py-20 md:py-32 relative overflow-hidden bg-[#020202] transition-all duration-1000",
        isBlurred ? "blur-sm opacity-50" : "blur-0 opacity-100"
      )}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 border-4 border-[#2371A2] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border-4 border-[#E0BF18] rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge text="Blog" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFFFC] text-balance">
            Najnoviji uvidi
          </h2>
          <p className="text-lg text-[#FFFFFC]/70 text-balance">
            Pratite najnovije vijesti i savjete o solarnoj energiji
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {BLOG_POSTS.map((post, index) => {
            const { elementRef, transform } = use3DTilt({ maxRotation: 3 })
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
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-[#FFFFFC] group-hover:text-[#E0BF18] transition-colors duration-300 mb-3">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-[#FFFFFC]/60">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#FFFFFC]/70 group-hover:text-[#FFFFFC]/90 transition-colors duration-300 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
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
            Pogledaj sve članke
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

