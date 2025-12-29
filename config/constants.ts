import type { NavigationItem, Benefit, Step, Feature, FAQ, ContactInfo, Statistic, Project, PricingPlan, Testimonial, BlogPost } from "@/types"
import {
  TrendingDown,
  Leaf,
  Zap,
  Home,
  MessageSquare,
  PenTool,
  Wrench,
  CheckCircle2,
  Award,
  Users,
  Shield,
  Sparkles,
  TrendingUp,
  Clock,
  Star,
  Building2,
  Sun,
  Battery,
  Settings,
} from "lucide-react"

export const COMPANY_NAME = "Skeki Energy"
export const COMPANY_TAGLINE = "Vaš partner za solarnu energiju"

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Početna", href: "#" },
  { label: "Prednosti", href: "#benefits" },
  { label: "Kako radimo", href: "#kako-radimo" },
  { label: "O nama", href: "#why-us" },
  { label: "Kontakt", href: "#kontakt" },
]

export const BENEFITS: Benefit[] = [
  {
    icon: TrendingDown,
    title: "Značajne uštede",
    description: "Smanjite račune za struju do 90% i zaštitite se od rastućih cijena energije",
  },
  {
    icon: Leaf,
    title: "Čista energija",
    description: "Proizvodite vlastitu obnovljivu energiju i smanjite ugljični otisak",
  },
  {
    icon: Zap,
    title: "Energetska neovisnost",
    description: "Budite neovisni od javne mreže i osigurajte stabilnu opskrbu energijom",
  },
  {
    icon: Home,
    title: "Povećanje vrijednosti",
    description: "Povećajte tržišnu vrijednost svoje nekretnine s modernom tehnologijom",
  },
]

export const STEPS: Step[] = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Savjetovanje",
    description: "Besplatni razgovor i analiza vaših potreba i mogućnosti",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Projektiranje",
    description: "Izrada personaliziranog projekta i ponude prilagođene vašem domu",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Instalacija",
    description: "Profesionalna montaža opreme s minimalnim ometanjem",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Puštanje u rad",
    description: "Testiranje sustava, obuka i aktiviranje vaše solarne elektrane",
  },
]

export const FEATURES: Feature[] = [
  {
    icon: Award,
    title: "Iskustvo",
    description: "500+ uspješno realiziranih projekata",
  },
  {
    icon: Shield,
    title: "Garancija",
    description: "Produljeno jamstvo na opremu i instalaciju",
  },
  {
    icon: Users,
    title: "Podrška",
    description: "Stalna tehnička pomoć i održavanje",
  },
  {
    icon: Sparkles,
    title: "Premium oprema",
    description: "Samo najkvalitetniji solarne panele i komponente",
  },
]

export const FAQS: FAQ[] = [
  {
    question: "Koliko košta instalacija solarnih panela?",
    answer:
      "Cijena ovisi o veličini sustava i potrebama vašeg kućanstva. Prosječna cijena za obiteljsku kuću kreće se od 6.000 do 15.000 eura. Kontaktirajte nas za besplatnu ponudu prilagođenu vašim potrebama.",
  },
  {
    question: "Za koliko se vremena isplate solarni paneli?",
    answer:
      "S obzirom na uštede na računima za struju, solarni paneli se obično isplate u roku od 6 do 10 godina. Nakon toga proizvodite besplatnu struju još minimum 15-20 godina.",
  },
  {
    question: "Što ako je moj krov u sjeni ili nije idealno orijentiran?",
    answer:
      "Moderna tehnologija omogućuje učinkovitu proizvodnju energije i u manje optimalnim uvjetima. Naš tim će izvršiti detaljnu analizu vašeg krova i predložiti najbolje rješenje.",
  },
  {
    question: "Trebam li dozvolu za instalaciju solarnih panela?",
    answer:
      "Za većinu instalacija potrebna je prijava nadležnim institucijama. Mi preuzimamo kompletnu administraciju i vodimo vas kroz cijeli proces.",
  },
  {
    question: "Koliko dugo traje instalacija?",
    answer:
      "Prosječna instalacija za obiteljsku kuću traje 2-4 dana, ovisno o složenosti projekta. Trudimo se minimizirati neugodnosti i omogućiti brzo puštanje sustava u rad.",
  },
  {
    question: "Što uključuje jamstvo?",
    answer:
      "Nudimo jamstvo od 10 godina na instalaciju i do 25 godina na solarne panele (ovisno o proizvođaču). Također nudimo redovito održavanje i tehničku podršku.",
  },
]

export const CONTACT_INFO: ContactInfo = {
  phone: "+385 97 710 9235",
  email: "info@skekienergy.hr",
  address: "Ulica Solarne energije 1\n10000 Zagreb, Hrvatska",
  workingHours: {
    weekdays: "Ponedjeljak - Petak: 8:00 - 17:00",
    saturday: "Subota: 9:00 - 13:00",
    sunday: "Nedjelja: Zatvoreno",
  },
}

export const STATISTICS: Statistic[] = [
  {
    value: "300+",
    label: "Uspješno realiziranih projekata",
    icon: TrendingUp,
  },
  {
    value: "1-2 dana",
    label: "Prosječno vrijeme instalacije",
    icon: Clock,
  },
]

export const PROJECTS: Project[] = [
  {
    title: "Obiteljska kuća - Zagreb",
    description: "Kompletan solarni sustav za obiteljsku kuću s baterijskim skladištem energije",
    category: "Stambeni objekti",
  },
  {
    title: "Poslovni objekt - Split",
    description: "Velika solarna instalacija za poslovni objekt s monitoring sustavom",
    category: "Poslovni objekti",
  },
  {
    title: "Vikendica - Istra",
    description: "Autonomni solarni sustav za vikendicu bez priključka na mrežu",
    category: "Autonomni sustavi",
  },
  {
    title: "Poljoprivredno gospodarstvo",
    description: "Solarna elektrana za poljoprivredno gospodarstvo s maksimalnom učinkovitošću",
    category: "Poljoprivreda",
  },
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Osnovni",
    price: "€6.500",
    description: "Idealno za manje kućanstvo",
    features: [
      "3kW solarni sustav",
      "10 premium panela",
      "Inverter i monitoring",
      "Profesionalna instalacija",
      "10 godina jamstva",
      "Besplatno održavanje (1. godina)",
    ],
    cta: "Odaberi plan",
  },
  {
    name: "Premium",
    price: "€10.500",
    description: "Najpopularniji izbor",
    features: [
      "5kW solarni sustav",
      "18 premium panela",
      "Baterijsko skladište",
      "Smart monitoring sustav",
      "15 godina jamstva",
      "Besplatno održavanje (2 godine)",
      "24/7 tehnička podrška",
    ],
    highlighted: true,
    cta: "Odaberi plan",
  },
  {
    name: "Enterprise",
    price: "€15.000+",
    description: "Za maksimalnu neovisnost",
    features: [
      "8kW+ solarni sustav",
      "30+ premium panela",
      "Napredno baterijsko skladište",
      "AI-powered monitoring",
      "25 godina jamstva",
      "Besplatno održavanje (5 godina)",
      "Dedicated support manager",
      "Prilagođeno rješenje",
    ],
    cta: "Kontaktiraj nas",
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Nakon instalacije solarnih panela, naši računi za struju su se smanjili za preko 85%. Investicija se isplatila za manje od 7 godina.",
    author: "Marko Horvat",
    company: "Vlasnik obiteljske kuće",
    role: "Zagreb",
  },
  {
    quote: "Profesionalni pristup od početka do kraja. Tim je bio izuzetno stručan i instalacija je prošla bez ikakvih problema.",
    author: "Ana Marić",
    company: "Vlasnica poslovnog objekta",
    role: "Split",
  },
  {
    quote: "Najbolja investicija koju smo napravili. Ne samo što štedimo novac, već i znamo da doprinosimo zaštiti okoliša.",
    author: "Ivan Petrović",
    company: "Vlasnik vikendice",
    role: "Istra",
  },
  {
    quote: "Solarni sustav je premašio naša očekivanja. Monitoring sustav omogućava nam da pratimo proizvodnju u realnom vremenu.",
    author: "Petra Novak",
    company: "Vlasnica poljoprivrednog gospodarstva",
    role: "Slavonija",
  },
]

export const TRACK_RECORD = {
  years: "10+",
  yearsLabel: "Godina iskustva",
  retention: "95%",
  retentionLabel: "Zadržavanje klijenata",
}

export const SERVICES = [
  {
    icon: Sun,
    title: "Instalacija solarnih panela",
    description: "Profesionalna instalacija premium solarnih panela za domove i poslovne objekte",
  },
  {
    icon: Battery,
    title: "Baterijska skladišta",
    description: "Napredni sustavi za skladištenje energije za maksimalnu neovisnost od mreže",
  },
  {
    icon: Settings,
    title: "Održavanje i podrška",
    description: "Redovito održavanje, monitoring i tehnička podrška za optimalan rad sustava",
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Kako odabrati pravi solarni sustav za vaš dom",
    excerpt: "Vodič kroz sve što trebate znati prije odabira solarnog sustava, uključujući veličinu, tip panela i dodatne opcije.",
    date: "15. siječnja 2024.",
    category: "Vodiči",
  },
  {
    title: "5 razloga zašto je sada pravo vrijeme za solarnu energiju",
    excerpt: "Cijene opreme padaju, subvencije su dostupne, a uštede nikad veće. Saznajte zašto je sada idealno vrijeme za investiciju.",
    date: "8. siječnja 2024.",
    category: "Vijesti",
  },
  {
    title: "Subvencije za solarnu energiju u Hrvatskoj 2024",
    excerpt: "Kompletan pregled dostupnih subvencija i poticaja za instalaciju solarnih panela u Hrvatskoj.",
    date: "2. siječnja 2024.",
    category: "Subvencije",
  },
]

