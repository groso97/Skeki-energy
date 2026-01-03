"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export const Newsletter = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter subscription logic would go here
    console.log("Newsletter subscription:", email)
    alert("Hvala na pretplati!")
    setEmail("")
  }

  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden bg-[#020202]"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 w-96 h-96 border-2 border-[#E0BF18]/20 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-1/2 w-96 h-96 border-2 border-[#2371A2]/20 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="h-16 w-16 rounded-full bg-[#E0BF18]/10 flex items-center justify-center">
              <Mail className="h-8 w-8 text-[#E0BF18]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFFFFC] text-balance">
            Budite u toku s našim vijestima
          </h2>
          <p className="text-lg text-[#FFFFFC]/70 mb-8 text-balance">
            Pretplatite se na naš newsletter i primajte najnovije vijesti, savjete i posebne ponude
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Vaša email adresa"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#FFFFFC]/10 border-[#FFFFFC]/20 text-[#FFFFFC] placeholder:text-[#FFFFFC]/50 focus:border-[#E0BF18]"
            />
            <Button
              type="submit"
              className="bg-[#E0BF18] text-[#020202] hover:bg-[#E0BF18]/90 whitespace-nowrap"
            >
              Pretplati se
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

