import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CONTACT_INFO } from "@/config/constants"

export const metadata: Metadata = {
  title: "Kolačići",
  description: "Informacije o kolačićima koje koristi web stranica Skeki Energy d.o.o. Saznajte koje kolačiće koristimo i zašto.",
  alternates: {
    canonical: "/kolacici",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function KolaciciPage() {
  const currentDate = "5. siječnja 2026."

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#020202]">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[#2371A2] opacity-20 animate-pulse-glow" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#2371A2] rounded-full blur-3xl opacity-15 animate-pulse-glow -translate-x-1/2 -translate-y-1/2" />
          
          {/* Geometric shapes */}
          <div className="absolute top-10 right-10 w-24 h-24 border-2 border-[#2371A2]/30 rounded-lg rotate-45 animate-spin-slow opacity-20" />
          <div className="absolute bottom-10 left-10 w-20 h-20 border-2 border-[#2371A2]/30 rounded-lg rotate-12 animate-spin-reverse opacity-15" />

          <div className="container px-4 max-w-4xl mx-auto relative z-10">
            <div className="mb-4">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[#2371A2] rounded-2xl blur-xl opacity-30 animate-pulse-glow" />
                <div className="absolute inset-0 bg-[#2371A2]/20 rounded-2xl animate-pulse-glow" />
                <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFC] px-6 py-3 bg-[#2371A2]/10 rounded-2xl border border-[#2371A2]/30 backdrop-blur-sm">
                  Kolačići
                </h1>
              </div>
              <p className="text-[#FFFFFC]/70 text-sm md:text-base mt-4">
                Zadnje ažurirano: {currentDate}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 relative">
          {/* Background effects */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2371A2] rounded-full blur-3xl opacity-10 animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#E0BF18] rounded-full blur-3xl opacity-8 animate-pulse-glow" style={{ animationDelay: "2s" }} />

          <div className="container px-4 max-w-4xl mx-auto relative z-10">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-[#FFFFFC]/80 leading-relaxed text-lg">
                Ova stranica objašnjava što su kolačići, koje kolačiće koristimo na našoj web stranici 
                i zašto ih koristimo. Važno nam je da budete informirani o tome kako prikupljamo i 
                koristimo podatke tijekom vašeg posjeta.
              </p>
            </div>

            {/* Cookie Content */}
            <div className="space-y-10 text-[#FFFFFC]/80">
              
              {/* Što su kolačići */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">Što su kolačići?</h2>
                <p className="leading-relaxed mb-4">
                  Kolačići (eng. cookies) su male tekstualne datoteke koje web stranice pohranjuju 
                  na vaš uređaj (računalo, mobitel, tablet) kada ih posjetite. Koriste se za 
                  pamćenje informacija o vašem posjetu, što može poboljšati vaše korisničko iskustvo.
                </p>
                <p className="leading-relaxed">
                  Kolačići mogu biti "trajni" (ostaju na vašem uređaju dok ih ne izbrišete) ili 
                  "sesijski" (brišu se automatski kada zatvorite preglednik).
                </p>
              </div>

              {/* Koje kolačiće koristimo */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">Koje kolačiće koristimo?</h2>
                <p className="leading-relaxed mb-6">
                  Na našoj web stranici koristimo <strong className="text-[#FFFFFC]">minimalan broj kolačića</strong> koji 
                  su fokusirani na privatnost. Evo potpunog popisa:
                </p>

                {/* Vercel Analytics */}
                <div className="mb-6 p-6 rounded-xl border border-[#2371A2]/30 bg-[#2371A2]/10 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#2371A2]/20 border border-[#2371A2]/30 flex items-center justify-center shrink-0">
                      <svg className="h-5 w-5 text-[#2371A2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#FFFFFC] mb-2">Vercel Analytics</h3>
                      <p className="text-sm text-[#FFFFFC]/70 mb-4">Analitički kolačić fokusiran na privatnost</p>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <tbody className="divide-y divide-[#FFFFFC]/10">
                            <tr>
                              <td className="py-2 pr-4 text-[#FFFFFC]/50 whitespace-nowrap">Naziv</td>
                              <td className="py-2 text-[#FFFFFC]">Vercel Analytics identifikator</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4 text-[#FFFFFC]/50 whitespace-nowrap">Svrha</td>
                              <td className="py-2 text-[#FFFFFC]">Praćenje anonimne statistike posjeta (broj posjetitelja, pregledane stranice)</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4 text-[#FFFFFC]/50 whitespace-nowrap">Trajanje</td>
                              <td className="py-2 text-[#FFFFFC]">Sesijski (briše se zatvaranjem preglednika)</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4 text-[#FFFFFC]/50 whitespace-nowrap">Prikupljeni podaci</td>
                              <td className="py-2 text-[#FFFFFC]">Anonimni - ne prikuplja osobne podatke, IP adrese niti prati korisnike između stranica</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4 text-[#FFFFFC]/50 whitespace-nowrap">Treća strana</td>
                              <td className="py-2 text-[#FFFFFC]">Vercel Inc. (SAD) - GDPR sukladan</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookie Notice */}
                <div className="mb-6 p-6 rounded-xl border border-[#E0BF18]/30 bg-[#E0BF18]/10 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#E0BF18]/20 border border-[#E0BF18]/30 flex items-center justify-center shrink-0">
                      <svg className="h-5 w-5 text-[#E0BF18]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#FFFFFC] mb-2">Lokalna pohrana (Local Storage)</h3>
                      <p className="text-sm text-[#FFFFFC]/70 mb-4">Pamćenje vašeg odabira o obavijesti o kolačićima</p>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <tbody className="divide-y divide-[#FFFFFC]/10">
                            <tr>
                              <td className="py-2 pr-4 text-[#FFFFFC]/50 whitespace-nowrap">Naziv</td>
                              <td className="py-2 text-[#FFFFFC]">skeki-cookie-notice-seen</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4 text-[#FFFFFC]/50 whitespace-nowrap">Svrha</td>
                              <td className="py-2 text-[#FFFFFC]">Pamti da ste vidjeli obavijest o kolačićima kako se ne bi prikazivala svaki put</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4 text-[#FFFFFC]/50 whitespace-nowrap">Trajanje</td>
                              <td className="py-2 text-[#FFFFFC]">Trajno (dok ne očistite podatke preglednika)</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4 text-[#FFFFFC]/50 whitespace-nowrap">Prikupljeni podaci</td>
                              <td className="py-2 text-[#FFFFFC]">Samo vrijednost "true" - bez osobnih podataka</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4 text-[#FFFFFC]/50 whitespace-nowrap">Treća strana</td>
                              <td className="py-2 text-[#FFFFFC]">Ne - pohranjeno lokalno na vašem uređaju</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Što NE koristimo */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">Što NE koristimo</h2>
                <p className="leading-relaxed mb-4">
                  Za razliku od mnogih web stranica, mi <strong className="text-[#FFFFFC]">ne koristimo</strong>:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="h-3 w-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span><strong className="text-[#FFFFFC]">Google Analytics</strong> - ne pratimo vas pomoću Googlea</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="h-3 w-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span><strong className="text-[#FFFFFC]">Facebook Pixel</strong> - ne pratimo vas za oglašavanje</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="h-3 w-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span><strong className="text-[#FFFFFC]">Reklamne kolačiće</strong> - ne prikazujemo personalizirane oglase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="h-3 w-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span><strong className="text-[#FFFFFC]">Kolačiće za praćenje između stranica</strong> - ne pratimo vas na drugim web stranicama</span>
                  </li>
                </ul>
              </div>

              {/* Zašto "Razumijem" a ne "Prihvaćam" */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">Zašto &quot;Razumijem&quot; a ne &quot;Prihvaćam&quot;?</h2>
                <p className="leading-relaxed mb-4">
                  Možda ste primijetili da naša obavijest o kolačićima ima gumb &quot;Razumijem&quot; umjesto 
                  uobičajenog &quot;Prihvaćam&quot;. Evo zašto:
                </p>
                <div className="p-6 rounded-xl border border-[#FFFFFC]/10 bg-[#FFFFFC]/5 backdrop-blur-sm">
                  <p className="leading-relaxed mb-4">
                    <strong className="text-[#2371A2]">&quot;Prihvaćam&quot;</strong> se koristi kada web stranica traži vašu 
                    <strong className="text-[#FFFFFC]"> privolu</strong> za prikupljanje osobnih podataka - na primjer, 
                    za Google Analytics ili reklamno praćenje.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-[#2371A2]">&quot;Razumijem&quot;</strong> se koristi kada vas web stranica samo 
                    <strong className="text-[#FFFFFC]"> informira</strong> o kolačićima koji ne prikupljaju osobne podatke. 
                    Budući da naši kolačići (Vercel Analytics) ne prikupljaju osobne podatke i anonimni su, 
                    samo vas obavještavamo da postoje - ne trebamo vašu privolu.
                  </p>
                </div>
              </div>

              {/* Upravljanje kolačićima */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">Kako upravljati kolačićima?</h2>
                <p className="leading-relaxed mb-4">
                  Možete kontrolirati i/ili izbrisati kolačiće kako želite. Evo kako:
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-[#FFFFFC]/10 bg-[#FFFFFC]/5">
                    <h3 className="font-semibold text-[#FFFFFC] mb-2">Brisanje svih kolačića</h3>
                    <p className="text-sm text-[#FFFFFC]/70">
                      Možete izbrisati sve kolačiće koji su već na vašem računalu. Većina preglednika 
                      ima ovu opciju u postavkama privatnosti ili sigurnosti.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg border border-[#FFFFFC]/10 bg-[#FFFFFC]/5">
                    <h3 className="font-semibold text-[#FFFFFC] mb-2">Blokiranje kolačića</h3>
                    <p className="text-sm text-[#FFFFFC]/70">
                      Možete postaviti preglednik da blokira kolačiće. Napominjemo da to može utjecati 
                      na funkcionalnost nekih web stranica (iako naša stranica radi i bez kolačića).
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg border border-[#FFFFFC]/10 bg-[#FFFFFC]/5">
                    <h3 className="font-semibold text-[#FFFFFC] mb-2">Upute za preglednike</h3>
                    <p className="text-sm text-[#FFFFFC]/70">
                      Za detaljne upute o upravljanju kolačićima u vašem pregledniku, posjetite 
                      stranicu pomoći vašeg preglednika (Chrome, Firefox, Safari, Edge).
                    </p>
                  </div>
                </div>
              </div>

              {/* Kontakt */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">Pitanja?</h2>
                <p className="leading-relaxed mb-4">
                  Ako imate bilo kakvih pitanja o kolačićima koje koristimo, slobodno nas kontaktirajte:
                </p>
                <div className="p-6 rounded-xl border border-[#2371A2]/30 bg-[#2371A2]/10 backdrop-blur-sm">
                  <div className="space-y-2 text-[#FFFFFC]/80">
                    <p><strong className="text-[#FFFFFC]">Email:</strong> {CONTACT_INFO.email}</p>
                    <p><strong className="text-[#FFFFFC]">Telefon:</strong> {CONTACT_INFO.phone}</p>
                  </div>
                </div>
              </div>

              {/* Link to Privacy Policy */}
              <div className="pt-6 border-t border-[#FFFFFC]/10">
                <p className="text-[#FFFFFC]/60">
                  Za više informacija o tome kako obrađujemo vaše podatke, pogledajte našu{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#2371A2] hover:text-[#2371A2]/80 underline underline-offset-2 transition-colors duration-200"
                  >
                    Politiku privatnosti
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

