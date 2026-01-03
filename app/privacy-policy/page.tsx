import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CONTACT_INFO } from "@/config/constants"

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description: "Politika privatnosti web stranice Skeki Energy d.o.o. Saznajte kako prikupljamo, koristimo i štitimo vaše osobne podatke.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PolitikaPrivatnostiPage() {
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
                  Politika privatnosti
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
                Skeki Energy d.o.o. (u daljnjem tekstu "mi", "nas", "naš") posvećena je zaštiti vaše 
                privatnosti. Ova Politika privatnosti objašnjava kako prikupljamo, koristimo, otkrivamo 
                i štitimo vaše informacije kada posjetite našu web stranicu.
              </p>
              <p className="text-[#FFFFFC]/80 leading-relaxed text-lg mt-4">
                Korištenjem naših usluga pristajete na prikupljanje i korištenje informacija u skladu s 
                ovom politikom. Ako se ne slažete s uvjetima ove Politike privatnosti, molimo vas da ne 
                pristupate ili koristite našu web stranicu.
              </p>
            </div>

            {/* Company Information Box */}
            <div className="mb-12 p-6 rounded-xl border border-[#FFFFFC]/10 bg-[#FFFFFC]/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-[#FFFFFC] mb-4">Podaci o tvrtki</h2>
              <div className="space-y-2 text-[#FFFFFC]/80 text-sm">
                <p><span className="font-medium">Pravno ime:</span> Skeki Energy d.o.o.</p>
                <p><span className="font-medium">Adresa:</span> Sinjska ulica 11, Sesvete</p>
                <p><span className="font-medium">OIB:</span> 75956498621</p>
                <p><span className="font-medium">Email:</span> {CONTACT_INFO.email}</p>
              </div>
            </div>

            {/* Privacy Policy Content */}
            <div className="space-y-8 text-[#FFFFFC]/80">
              {/* 1. Informacije koje prikupljamo */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">1. Informacije koje prikupljamo</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#FFFFFC] mb-2">1.1 Osobni podaci</h3>
                    <p className="text-[#FFFFFC]/70 leading-relaxed mb-3">
                      Možemo prikupljati osobne podatke koje nam dobrovoljno dostavite kada:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-[#FFFFFC]/70 ml-4">
                      <li>Ispunite kontaktni obrazac na našoj web stranici</li>
                      <li>Pretplatite se na naš newsletter ili marketinške komunikacije</li>
                      <li>Zatražite ponudu ili savjetovanje</li>
                      <li>Koristite naše usluge</li>
                    </ul>
                    <p className="text-[#FFFFFC]/70 leading-relaxed mt-3">
                      Ovi podaci mogu uključivati:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-[#FFFFFC]/70 ml-4">
                      <li>Ime i prezime</li>
                      <li>Email adresu</li>
                      <li>Broj telefona</li>
                      <li>Adresu</li>
                      <li>Naziv tvrtke (ako je primjenjivo)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#FFFFFC] mb-2">1.2 Automatski prikupljene informacije</h3>
                    <p className="text-[#FFFFFC]/70 leading-relaxed mb-3">
                      Kada posjetite našu web stranicu, možemo automatski prikupljati određene informacije 
                      o vašem uređaju i korištenju stranice, uključujući:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-[#FFFFFC]/70 ml-4">
                      <li>IP adresu</li>
                      <li>Vrstu i verziju preglednika</li>
                      <li>Operativni sustav</li>
                      <li>Posjećene stranice i vrijeme provedeno na stranicama</li>
                      <li>Stranice koje upućuju (referring websites)</li>
                      <li>Datum i vrijeme posjeta</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Kako koristimo vaše informacije */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">2. Kako koristimo vaše informacije</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed mb-3">
                  Koristimo prikupljene informacije za sljedeće svrhe:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#FFFFFC]/70 ml-4">
                  <li>Za odgovaranje na vaše upite i pružanje korisničke podrške</li>
                  <li>Za obradu i ispunjenje vaših zahtjeva za uslugama</li>
                  <li>Za slanje ažuriranja o našim uslugama, promocijama i novostima (uz vaš pristanak)</li>
                  <li>Za poboljšanje naše web stranice i usluga</li>
                  <li>Za analizu korištenja i optimizaciju korisničkog iskustva</li>
                  <li>Za usklađenost s zakonskim obvezama</li>
                  <li>Za sprječavanje prijevara i osiguranje web stranice</li>
                </ul>
              </div>

              {/* 3. Pravna osnova za obradu (GDPR) */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">3. Pravna osnova za obradu (GDPR)</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed mb-3">
                  Prema Općoj uredbi o zaštiti podataka (GDPR), obrađujemo vaše osobne podatke na temelju 
                  sljedećih pravnih osnova:
                </p>
                <div className="space-y-3 text-[#FFFFFC]/70">
                  <p>
                    <strong className="text-[#FFFFFC]">Privola:</strong> Dali ste nam izričitu privolu za 
                    obradu vaših osobnih podataka za određene svrhe (npr. marketinške komunikacije).
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">Izvršenje ugovora:</strong> Obrada je nužna za 
                    ispunjenje ugovora s vama ili za poduzimanje koraka na vaš zahtjev prije sklapanja ugovora.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">Legitimni interesi:</strong> Obrada je nužna za naše 
                    legitimne poslovne interese, kao što je poboljšanje naših usluga.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">Zakonska obveza:</strong> Obrada je nužna za 
                    usklađenost sa zakonskim zahtjevima.
                  </p>
                </div>
              </div>

              {/* 4. Kolačići i tehnologije praćenja */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">4. Kolačići i tehnologije praćenja</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed mb-3">
                  Koristimo kolačiće i slične tehnologije praćenja za praćenje aktivnosti na našoj web 
                  stranici i pohranu određenih informacija. Kolačići su datoteke s malom količinom podataka 
                  koje se mogu pohraniti na vaš uređaj.
                </p>
                <p className="text-[#FFFFFC]/70 leading-relaxed mb-3">
                  Naše korištenje kolačića uključuje:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#FFFFFC]/70 ml-4">
                  <li><strong className="text-[#FFFFFC]">Neophodni kolačići:</strong> Nužni za funkcioniranje web stranice</li>
                  <li><strong className="text-[#FFFFFC]">Analitički kolačići:</strong> Pomažu nam razumjeti kako posjetitelji koriste stranicu</li>
                  <li><strong className="text-[#FFFFFC]">Funkcionalni kolačići:</strong> Omogućuju poboljšanu funkcionalnost i personalizaciju</li>
                </ul>
                <p className="text-[#FFFFFC]/70 leading-relaxed mt-3">
                  Možete postaviti svoj preglednik da odbije sve kolačiće ili da vas obavijesti kada se 
                  kolačić šalje. Napominjemo da ako onemogućite kolačiće, neki dijelovi naše web stranice 
                  možda neće pravilno funkcionirati.
                </p>
              </div>

              {/* 5. Dijeljenje i otkrivanje podataka */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">5. Dijeljenje i otkrivanje podataka</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed mb-3">
                  Ne prodajemo, ne trgujemo niti na drugi način prenosimo vaše osobne podatke trećim 
                  stranama. Možemo dijeliti vaše podatke u sljedećim slučajevima:
                </p>
                <div className="space-y-3 text-[#FFFFFC]/70">
                  <p>
                    <strong className="text-[#FFFFFC]">Pružatelji usluga:</strong> Možemo dijeliti podatke s 
                    pouzdanim trećim stranama koje nam pomažu u poslovanju, kao što su pružatelji hostinga, 
                    analitičkih alata i emaila.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">Zakonski zahtjevi:</strong> Možemo otkriti vaše podatke 
                    ako to zahtijeva zakon, sudski nalog ili državno tijelo.
                  </p>
                  <p>
                    <strong className="text-[#FFFFFC]">Poslovno restrukturiranje:</strong> U slučaju spajanja, 
                    preuzimanja ili prodaje imovine, vaši podaci mogu biti preneseni kao dio te transakcije.
                  </p>
                </div>
                <p className="text-[#FFFFFC]/70 leading-relaxed mt-3">
                  Sve treće strane s kojima dijelimo podatke dužne su održavati povjerljivost i sigurnost 
                  vaših osobnih podataka.
                </p>
              </div>

              {/* 6. Zadržavanje podataka */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">6. Zadržavanje podataka</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  Vaše osobne podatke čuvamo samo onoliko dugo koliko je potrebno za ispunjenje svrha 
                  navedenih u ovoj Politici privatnosti. Kada vaši podaci više nisu potrebni, sigurno 
                  ćemo ih izbrisati ili anonimizirati. Također možemo zadržati podatke dulje ako to 
                  zahtijevaju zakonske obveze ili za rješavanje sporova.
                </p>
              </div>

              {/* 7. Vaša prava prema GDPR-u */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">7. Vaša prava prema GDPR-u</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed mb-3">
                  Ako ste stanovnik Europske unije, imate sljedeća prava u vezi s vašim osobnim podacima:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#FFFFFC]/70 ml-4">
                  <li><strong className="text-[#FFFFFC]">Pravo pristupa:</strong> Zatražiti kopiju osobnih podataka koje imamo o vama</li>
                  <li><strong className="text-[#FFFFFC]">Pravo na ispravak:</strong> Zatražiti ispravak netočnih ili nepotpunih podataka</li>
                  <li><strong className="text-[#FFFFFC]">Pravo na brisanje:</strong> Zatražiti brisanje vaših osobnih podataka ("pravo na zaborav")</li>
                  <li><strong className="text-[#FFFFFC]">Pravo na ograničenje obrade:</strong> Zatražiti ograničenje obrade vaših podataka</li>
                  <li><strong className="text-[#FFFFFC]">Pravo na prenosivost podataka:</strong> Dobiti svoje podatke u strukturiranom, uobičajenom formatu</li>
                  <li><strong className="text-[#FFFFFC]">Pravo na prigovor:</strong> Prigovoriti obradi vaših podataka u određenim okolnostima</li>
                  <li><strong className="text-[#FFFFFC]">Pravo na povlačenje privole:</strong> Povući privolu za obradu podataka u bilo kojem trenutku</li>
                </ul>
                <p className="text-[#FFFFFC]/70 leading-relaxed mt-3">
                  Za ostvarenje bilo kojeg od ovih prava, molimo kontaktirajte nas na {CONTACT_INFO.email}. 
                  Odgovorit ćemo na vaš zahtjev unutar 30 dana.
                </p>
              </div>

              {/* 8. Sigurnost podataka */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">8. Sigurnost podataka</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed mb-3">
                  Provodimo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših osobnih podataka 
                  od neovlaštenog pristupa, izmjene, otkrivanja ili uništenja. Ove mjere uključuju:
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#FFFFFC]/70 ml-4">
                  <li>Enkripciju osjetljivih podataka</li>
                  <li>Redovite sigurnosne provjere</li>
                  <li>Ograničen pristup podacima samo ovlaštenom osoblju</li>
                  <li>Kontrolu pristupa i autentifikaciju</li>
                  <li>Edukaciju zaposlenika o zaštiti podataka</li>
                </ul>
                <p className="text-[#FFFFFC]/70 leading-relaxed mt-3">
                  Međutim, nijedan prijenos podataka putem interneta ili elektroničko skladištenje nije 
                  100% sigurno. Iako nastojimo zaštititi vaše podatke, ne možemo jamčiti apsolutnu sigurnost.
                </p>
              </div>

              {/* 9. Međunarodni prijenosi podataka */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">9. Međunarodni prijenosi podataka</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  Vaši podaci mogu se prenositi i obrađivati u zemljama izvan Hrvatske i Europskog 
                  gospodarskog prostora. Kada prenosimo podatke izvan EGP-a, osiguravamo primjenu 
                  odgovarajućih zaštitnih mjera u skladu s GDPR-om, kao što su standardne ugovorne 
                  klauzule koje je odobrila Europska komisija.
                </p>
              </div>

              {/* 10. Privatnost djece */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">10. Privatnost djece</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  Naše usluge nisu namijenjene osobama mlađim od 18 godina. Ne prikupljamo svjesno osobne 
                  podatke od djece. Ako doznamo da smo prikupili osobne podatke od djeteta bez roditeljske 
                  suglasnosti, poduzet ćemo korake za uklanjanje tih podataka.
                </p>
              </div>

              {/* 11. Veze na treće strane */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">11. Veze na treće strane</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  Naša web stranica može sadržavati veze na web stranice trećih strana. Nismo odgovorni 
                  za prakse privatnosti ili sadržaj tih stranica. Preporučujemo vam da pročitate politiku 
                  privatnosti svake web stranice koju posjetite.
                </p>
              </div>

              {/* 12. Promjene ove Politike privatnosti */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">12. Promjene ove Politike privatnosti</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed">
                  Možemo ažurirati ovu Politiku privatnosti s vremena na vrijeme kako bismo odrazili 
                  promjene u našim praksama ili zakonskim zahtjevima. Obavijestit ćemo vas o značajnim 
                  promjenama objavljivanjem nove verzije na ovoj stranici s novim datumom "Zadnje ažurirano". 
                  Vaš nastavak korištenja naše web stranice nakon takvih promjena predstavlja vaš pristanak 
                  na ažuriranu politiku.
                </p>
              </div>

              {/* 13. Kontaktirajte nas */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">13. Kontaktirajte nas</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed mb-4">
                  Ako imate pitanja ili zabrinutosti u vezi s ovom Politikom privatnosti ili našim 
                  postupcima zaštite podataka, molimo kontaktirajte nas:
                </p>
                <div className="p-6 rounded-xl border border-[#2371A2]/30 bg-[#2371A2]/10 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-[#FFFFFC] mb-3">Služba za zaštitu podataka</h3>
                  <div className="space-y-2 text-[#FFFFFC]/80">
                    <p>Skeki Energy d.o.o.</p>
                    <p>Sinjska ulica 11, Sesvete</p>
                    <p>Telefon: {CONTACT_INFO.phone}</p>
                    <p>Email: {CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>

              {/* 14. Pravo na podnošenje pritužbe */}
              <div>
                <h2 className="text-2xl font-semibold text-[#FFFFFC] mb-4">14. Pravo na podnošenje pritužbe</h2>
                <p className="text-[#FFFFFC]/70 leading-relaxed mb-4">
                  Ako smatrate da su vaša prava na zaštitu podataka povrijeđena, imate pravo podnijeti 
                  pritužbu nadležnom nadzornom tijelu za zaštitu podataka:
                </p>
                <div className="p-6 rounded-xl border border-[#FFFFFC]/10 bg-[#FFFFFC]/5 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-[#FFFFFC] mb-3">Agencija za zaštitu osobnih podataka (AZOP)</h3>
                  <div className="space-y-2 text-[#FFFFFC]/80">
                    <p>Martićeva 14, 10000 Zagreb, Hrvatska</p>
                    <p>Telefon: +385 1 4609 000</p>
                    <p>Web: azop.hr</p>
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

