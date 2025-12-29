# Skeki Energy - Website

Profesionalna web stranica za tvrtku Skeki Energy, koja se bavi instalacijom solarnih panela.

## 🚀 Tehnologije

- **Next.js 15** - Najnovija verzija Next.js frameworka
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Modern CSS framework
- **Shadcn UI** - Visokokvalitetne React komponente
- **React 19** - Najnovija verzija Reacta

## 📁 Struktura Projekta

Projekt je organiziran prema best practices za velike projekte:

```
skeki-energy/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Globalni stilovi
│
├── components/
│   ├── features/          # Feature komponente (business logic)
│   │   ├── hero/
│   │   ├── benefits/
│   │   ├── how-we-work/
│   │   ├── why-us/
│   │   ├── faq/
│   │   └── contact/
│   │
│   ├── layout/            # Layout komponente
│   │   ├── header/
│   │   │   ├── header.tsx
│   │   │   ├── navigation.tsx
│   │   │   └── mobile-menu.tsx
│   │   └── footer/
│   │       └── footer.tsx
│   │
│   ├── shared/            # Shared komponente
│   │   ├── logo/
│   │   └── theme-provider/
│   │
│   └── ui/                # Shadcn UI komponente
│
├── config/                # Konfiguracija i konstante
│   ├── constants.ts       # Business konstante
│   └── colors.ts          # Paleta boja
│
├── types/                 # TypeScript tipovi
│   └── index.ts
│
├── lib/                   # Utility funkcije
│   └── utils.ts
│
└── public/                # Statički resursi
```

## 🎨 Paleta Boja

Projekt koristi sljedeću paletu boja:

- **Primarna boja**: `#E0BF18` (Zlatna) - Koristi se za gumbe, akcente, highlights
- **Sekundarna boja**: `#2371A2` (Plava) - Koristi se za sekundarne akcije, linkove
- **Pozadina**: `#FFFFFC` (Off-white) - Glavna pozadinska boja
- **Tekst**: `#020202` (Gotovo crna) - Boja teksta

Boje su definirane u `app/globals.css` kao CSS varijable i dostupne su kroz Tailwind klase.

## 🏗️ Komponente

### Layout Komponente

- **Header** - Glavna navigacija s logo-om i menijem
- **Footer** - Footer s kontakt informacijama i linkovima

### Feature Komponente

- **Hero** - Glavna hero sekcija s CTA
- **Benefits** - Prikaz prednosti solarnih panela
- **HowWeWork** - Proces rada u 4 koraka
- **WhyUs** - Zašto odabrati Skeki Energy
- **FAQ** - Česta pitanja
- **ContactForm** - Kontakt obrazac

### Shared Komponente

- **Logo** - Logo komponenta s prilagodljivim veličinama

## 📝 Konstante i Tipovi

Sve business logike konstante su centralizirane u `config/constants.ts`:
- Navigacijski linkovi
- Benefits, Steps, Features
- FAQ podaci
- Kontakt informacije

TypeScript tipovi su definirani u `types/index.ts` za type-safety.

## 🛠️ Development

### Instalacija

```bash
pnpm install
```

### Pokretanje development servera

```bash
pnpm dev
```

### Build za produkciju

```bash
pnpm build
```

### Pokretanje produkcijskog builda

```bash
pnpm start
```

## 📦 Dependencies

Glavne dependencies:
- `next@^15.1.3` - Next.js framework
- `react@^19.0.0` - React library
- `typescript@^5` - TypeScript
- `tailwindcss@^4.1.9` - Tailwind CSS
- `lucide-react` - Ikone
- `@radix-ui/*` - Headless UI komponente (kroz Shadcn)

## 🎯 Best Practices

Projekt slijedi sljedeće best practices:

1. **Komponentna organizacija** - Komponente su organizirane po domenama (features, layout, shared)
2. **Type Safety** - Sve komponente koriste TypeScript tipove
3. **Konstante** - Business logika je izdvojena u config fajlove
4. **Reusability** - Shared komponente su dostupne svugdje
5. **Accessibility** - Komponente su pristupačne s ARIA labelima
6. **Performance** - Optimizirano za Next.js 15 s App Router

## 📄 Licenca

Privatni projekt za Skeki Energy.

