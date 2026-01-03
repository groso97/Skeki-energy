import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CONTACT_INFO } from "@/config/constants"

export const metadata: Metadata = {
  title: "Uvjeti korištenja",
  description: "Uvjeti korištenja web stranice Skeki Energy d.o.o. Pravila i uvjeti za korištenje naših usluga montaže solarnih panela.",
  alternates: {
    canonical: "/terms-of-use",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function UvjetiKoristenjaPage() {
  const currentDate = new Date().toLocaleDateString("hr-HR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#020202]">
        {/* Hero Section with Pulsing Blue Background */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          {/* Pulsing blue background effect */}
          <div className="absolute inset-0 bg-[#2371A2] opacity-20 animate-pulse-glow" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#2371A2] rounded-full blur-3xl opacity-15 animate-pulse-glow -translate-x-1/2 -translate-y-1/2" />
          
          {/* Geometric shapes */}
          <div className="absolute top-10 right-10 w-24 h-24 border-2 border-[#2371A2]/30 rounded-lg rotate-45 animate-spin-slow opacity-20" />
          <div className="absolute bottom-10 left-10 w-20 h-20 border-2 border-[#2371A2]/30 rounded-lg rotate-12 animate-spin-reverse opacity-15" />

          <div className="container px-4 max-w-4xl mx-auto relative z-10">
            {/* Title with pulsing blue background */}
            <div className="mb-4">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[#2371A2] rounded-2xl blur-xl opacity-30 animate-pulse-glow" />
                <div className="absolute inset-0 bg-[#2371A2]/20 rounded-2xl animate-pulse-glow" />
                <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFC] px-6 py-3 bg-[#2371A2]/10 rounded-2xl border border-[#2371A2]/30 backdrop-blur-sm">
                  Uvjeti korištenja
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
                Dobrodošli na web stranicu Skeki Energy d.o.o. Korištenjem naše web stranice prihvaćate 
                sljedeće uvjete korištenja. Molimo vas da pažljivo pročitate ove uvjete prije korištenja 
                naše web stranice. Ako se ne slažete s bilo kojim dijelom ovih uvjeta, ne koristite našu 
                web stranicu.
              </p>
            </div>

            {/* Company Information Box */}
            <div className="mb-12 p-6 rounded-xl border border-[#FFFFFC]/10 bg-[#FFFFFC]/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-[#FFFFFC] mb-4">Podaci o tvrtki</h2>
              <div className="space-y-2 text-[#FFFFFC]/80 text-sm">
                <p><span className="font-medium">Pravno ime:</span> Skeki Energy d.o.o.</p>
                <p><span className="font-medium">Adresa:</span> Sinjska ulica 11, Sesvete</p>
                <p><span className="font-medium">Djelatnost:</span> 43210, Elektroinstalacijski radovi</p>
                <p><span className="font-medium">OIB:</span> 75956498621</p>
                <p><span className="font-medium">MB:</span> 06191134</p>
                <p><span className="font-medium">Godina osnivanja:</span> 2025.</p>
                <p><span className="font-medium">Kontakt:</span> {CONTACT_INFO.phone}</p>
                <p><span className="font-medium">Email:</span> {CONTACT_INFO.email}</p>
              </div>
            </div>

            {/* Terms Content */}
            <div className="space-y-8 text-[#FFFFFC]/80">
              {/* 1. Definicije */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">1. Definicije</h2>
                <div className="space-y-3 text-[#FFFFFC]/70 leading-relaxed">
                  <p>
                    <strong className="text-[#FFFFFC]">1.1.</strong> "Tvrtka", "mi", "nas", "naš" se odnosi na 
                    Skeki Energy d.o.o., pravnu osobu registriranu u Republici Hrvatskoj.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">1.2.</strong> "Web stranica" se odnosi na sve web stranice, 
                    podstranice i sadržaj koji je dostupan na domeni skeki-energy.hr.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">1.3.</strong> "Korisnik", "vi", "vaš" se odnosi na svaku 
                    osobu koja pristupa ili koristi našu web stranicu.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">1.4.</strong> "Usluge" se odnosi na sve usluge koje 
                    pružamo kroz našu web stranicu, uključujući informacije o našim proizvodima i uslugama.
                  </p>
                </div>
              </div>

              {/* 2. Usluge */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">2. Usluge</h2>
                <div className="space-y-3 text-[#FFFFFC]/70 leading-relaxed">
                  <p>
                    <strong className="text-[#FFFFFC]">2.1. Opseg usluga</strong>
                  </p>
                  <p>
                    Naša web stranica pruža informacije o našim uslugama instalacije solarnih panela, 
                    elektroinstalacijskim radovima i povezanim uslugama. Sve informacije na web stranici 
                    su informativne prirode i ne predstavljaju obvezujuću ponudu.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">2.2. Izvršenje usluga</strong>
                  </p>
                  <p>
                    Sve usluge koje pružamo temelje se na posebnim ugovorima koji se sklapaju između 
                    tvrtke i klijenta. Uvjeti iz ovih ugovora imaju prednost nad informacijama na web stranici.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">2.3. Odgovornosti klijenta</strong>
                  </p>
                  <p>
                    Klijent je dužan osigurati sve potrebne informacije, dokumentaciju i pristup lokaciji 
                    potrebne za izvršenje usluga. Klijent je također dužan osigurati sve potrebne dozvole 
                    i odobrenja prije početka radova.
                  </p>
                </div>
              </div>

              {/* 3. Naknade i plaćanje */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">3. Naknade i plaćanje</h2>
                <div className="space-y-3 text-[#FFFFFC]/70 leading-relaxed">
                  <p>
                    <strong className="text-[#FFFFFC]">3.1. Cijene</strong>
                  </p>
                  <p>
                    Sve cijene prikazane na web stranici su informativne i mogu se promijeniti bez prethodne 
                    najave. Konačne cijene određuju se na temelju individualne ponude koja se priprema za 
                    svakog klijenta posebno.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">3.2. Uvjeti plaćanja</strong>
                  </p>
                  <p>
                    Uvjeti plaćanja određuju se u posebnom ugovoru. Općenito, plaćanje se vrši prema 
                    dogovorenom rasporedu koji je naveden u ugovoru o izvršenju radova.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">3.3. Dodatni radovi</strong>
                  </p>
                  <p>
                    Svi dodatni radovi koji nisu uključeni u izvorni ugovor bit će naplaćeni prema 
                    važećim cjenicima i uz prethodnu pisanu suglasnost klijenta.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">3.4. Troškovi trećih strana</strong>
                  </p>
                  <p>
                    Svi troškovi dozvola, prijava i drugih administrativnih postupaka koji se odnose 
                    na treće strane naplaćuju se klijentu dodatno, osim ako nije drugačije dogovoreno.
                  </p>
                </div>
              </div>

              {/* 4. Intelektualno vlasništvo */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">4. Intelektualno vlasništvo</h2>
                <div className="space-y-3 text-[#FFFFFC]/70 leading-relaxed">
                  <p>
                    <strong className="text-[#FFFFFC]">4.1. Vlasništvo nad rezultatima rada</strong>
                  </p>
                  <p>
                    Sva prava intelektualnog vlasništva na rezultatima radova, uključujući projekte, 
                    dokumentaciju i druge materijale, pripadaju klijentu nakon potpunog plaćanja svih 
                    obveza prema ugovoru.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">4.2. Zadržana prava</strong>
                  </p>
                  <p>
                    Tvrtka zadržava pravo korištenja općih znanja, vještina i tehnika stečenih tijekom 
                    izvršenja usluga, kao i pravo korištenja anonimiziranih podataka za statističke i 
                    razvojne svrhe.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">4.3. Prava na portfolio</strong>
                  </p>
                  <p>
                    Tvrtka ima pravo koristiti fotografije i opise realiziranih projekata u marketinške 
                    svrhe, osim ako klijent pismeno ne zatraži drugačije.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">4.4. Materijali trećih strana</strong>
                  </p>
                  <p>
                    Svi materijali trećih strana korišteni u izvršenju usluga podliježu licencnim uvjetima 
                    tih trećih strana. Klijent je dužan poštivati sve relevantne licence.
                  </p>
                </div>
              </div>

              {/* 5. Revizije i promjene */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">5. Revizije i promjene</h2>
                <div className="space-y-3 text-[#FFFFFC]/70 leading-relaxed">
                  <p>
                    <strong className="text-[#FFFFFC]">5.1. Uključene revizije</strong>
                  </p>
                  <p>
                    Broj uključenih revizija određuje se u ugovoru. Standardno, uključene su razumne 
                    revizije koje se odnose na ispravke grešaka i manje prilagodbe.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">5.2. Dodatne revizije</strong>
                  </p>
                  <p>
                    Sve dodatne revizije koje prelaze uključene revizije naplaćuju se prema važećim 
                    cjenicima.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">5.3. Promjene opsega</strong>
                  </p>
                  <p>
                    Sve promjene opsega radova zahtijevaju pisanu suglasnost obje strane i mogu utjecati 
                    na cijenu i rokove izvršenja.
                  </p>
                </div>
              </div>

              {/* 6. Jamstva i odricanja */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">6. Jamstva i odricanja</h2>
                <div className="space-y-3 text-[#FFFFFC]/70 leading-relaxed">
                  <p>
                    <strong className="text-[#FFFFFC]">6.1. Jamstvo usluge</strong>
                  </p>
                  <p>
                    Tvrtka jamči da će usluge biti izvršene u skladu s profesionalnim standardima i 
                    važećim propisima. Jamstvo na instalaciju određuje se u ugovoru.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">6.2. Odricanje</strong>
                  </p>
                  <p>
                    Tvrtka ne jamči rezultate koji ovise o vanjskim čimbenicima izvan naše kontrole, 
                    kao što su vremenski uvjeti, promjene u zakonodavstvu ili radnje trećih strana.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">6.3. Usluge trećih strana</strong>
                  </p>
                  <p>
                    Za sve proizvode i usluge trećih strana, jamstva pružaju proizvođači ili dobavljači. 
                    Tvrtka djeluje kao posrednik u rješavanju eventualnih problema.
                  </p>
                </div>
              </div>

              {/* 7. Ograničenje odgovornosti */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">7. Ograničenje odgovornosti</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  U najvećoj mjeri dopuštenoj zakonom, odgovornost tvrtke ograničena je na iznos 
                  vrijednosti ugovora. Tvrtka ne snosi odgovornost za posredne, slučajne ili posljedične 
                  štete, uključujući gubitak dobiti ili prihoda.
                </p>
              </div>

              {/* 8. Povjerljivost */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">8. Povjerljivost</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  Tvrtka se obvezuje čuvati povjerljivost svih informacija koje dobije od klijenta u 
                  vezi s projektom. Ove informacije neće biti otkrivene trećim stranama bez prethodne 
                  pismene suglasnosti klijenta, osim u slučajevima kada to zahtijeva zakon.
                </p>
              </div>

              {/* 9. Raskid */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">9. Raskid</h2>
                <div className="space-y-3 text-[#FFFFFC]/70 leading-relaxed">
                  <p>
                    <strong className="text-[#FFFFFC]">9.1. Raskid od strane klijenta</strong>
                  </p>
                  <p>
                    Klijent može raskinuti ugovor pisanom obavijesti, uz plaćanje svih do tada 
                    izvršenih radova i troškova nastalih raskidom.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">9.2. Raskid od strane tvrtke</strong>
                  </p>
                  <p>
                    Tvrtka može raskinuti ugovor u slučaju neplaćanja, nepoštivanja obveza klijenta 
                    ili drugih ozbiljnih povreda ugovora.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">9.3. Posljedice raskida</strong>
                  </p>
                  <p>
                    U slučaju raskida, klijent je dužan platiti sve do tada izvršene radove i troškove. 
                    Tvrtka će predati sve do tada izrađene materijale nakon potpunog plaćanja.
                  </p>
                </div>
              </div>

              {/* 10. Održavanje i podrška */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">10. Održavanje i podrška</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  Održavanje i podrška određuju se u posebnom ugovoru. Standardno, tvrtka pruža 
                  tehničku podršku i održavanje prema uvjetima navedenim u ugovoru o instalaciji.
                </p>
              </div>

              {/* 11. Viša sila */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">11. Viša sila</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  Tvrtka ne snosi odgovornost za neizvršenje obveza koje je uzrokovano okolnostima 
                  više sile, uključujući prirodne katastrofe, ratove, štrajkove, promjene zakona 
                  ili druge okolnosti izvan naše kontrole.
                </p>
              </div>

              {/* 12. Mjerodavno pravo i nadležnost */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">12. Mjerodavno pravo i nadležnost</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  Ovi uvjeti korištenja regulirani su zakonima Republike Hrvatske. Za sve sporove 
                  koji proizlaze iz ovih uvjeta ili korištenja web stranice, nadležni su sudovi u 
                  Republici Hrvatskoj.
                </p>
              </div>

              {/* 13. Promjene uvjeta */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">13. Promjene uvjeta</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  Tvrtka zadržava pravo promijeniti ove uvjete korištenja u bilo kojem trenutku. 
                  Promjene stupaju na snagu objavom na web stranici. Nastavkom korištenja web stranice 
                  nakon promjena, prihvaćate nove uvjete.
                </p>
              </div>

              {/* 14. Djelomična nevažnost */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">14. Djelomična nevažnost</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  Ako se bilo koji dio ovih uvjeta smatra nevažećim ili neprovedivim, preostali dijelovi 
                  ostaju u punoj snazi. Nevažeći dio će biti zamijenjen valjanim odredbom koja je 
                  najbliža namjeri izvorne odredbe.
                </p>
              </div>

              {/* 15. Cjelovit sporazum */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">15. Cjelovit sporazum</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  Ovi uvjeti korištenja, zajedno s posebnim ugovorima koji se sklapaju između tvrtke 
                  i klijenta, predstavljaju cjelovit sporazum između strana u vezi s korištenjem web 
                  stranice i pružanjem usluga.
                </p>
              </div>

              {/* 16. Kontakt informacije */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">16. Kontakt informacije</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed mb-4">
                  Ako imate bilo kakva pitanja o ovim Uvjetima korištenja, molimo vas da nas kontaktirate:
                </p>
                <div className="p-6 rounded-xl border border-[#FFFFFC]/10 bg-[#FFFFFC]/5 backdrop-blur-sm">
                  <div className="space-y-2 text-[#FFFFFC]/80">
                    <p><span className="font-medium">Skeki Energy d.o.o.</span></p>
                    <p>Sinjska ulica 11, Sesvete</p>
                    <p>Telefon: {CONTACT_INFO.phone}</p>
                    <p>Email: {CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

