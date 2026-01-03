import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "arial"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: {
    default: "Skeki Energy - Instalacija Solarnih Panela",
    template: "%s | Skeki Energy",
  },
  description:
    "Profesionalna montaža solarnih elektrana u Hrvatskoj. Uštedite do 90% na računima za struju. 300+ projekata, certifikati i dozvole. Besplatna ponuda!",
  keywords: [
    "solarni paneli",
    "solarna energija",
    "instalacija solarnih panela",
    "montaža solarnih panela",
    "fotonaponski sustavi",
    "solarne elektrane",
    "Hrvatska",
    "Zagreb",
    "ušteda energije",
    "obnovljivi izvori energije",
    "fotovoltaika",
    "solarna energija cijena",
    "solarni paneli za kuću",
  ],
  authors: [{ name: "Skeki Energy d.o.o." }],
  creator: "Skeki Energy d.o.o.",
  publisher: "Skeki Energy d.o.o.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://skeki-energy.hr"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "/",
    siteName: "Skeki Energy",
    title: "Skeki Energy - Profesionalna Instalacija Solarnih Panela",
    description:
      "Profesionalna montaža solarnih elektrana u Hrvatskoj. Uštedite do 90% na računima za struju. 300+ projekata, certifikati i dozvole.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Skeki Energy - Solarni paneli za vaš dom",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  formatDetection: {
    telephone: false,
  },
  category: "technology",
};

// Viewport configuration (exported separately for Next.js 14+)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020202",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Structured Data for SEO (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://skeki-energy.hr/#organization",
              name: "Skeki Energy d.o.o.",
              description:
                "Profesionalna montaža solarnih elektrana s naglaskom na kvalitetu izvedbe, pouzdanost i profesionalan pristup svakom projektu.",
              url: "https://skeki-energy.hr",
              telephone: "+385 97 710 9235",
              email: "info@skeki-energy.hr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sinjska ulica 11",
                addressLocality: "Zagreb",
                addressCountry: "HR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "45.8150",
                longitude: "15.9819",
              },
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
              sameAs: ["https://instagram.com/skekienergy"],
              image: "https://skeki-energy.hr/og-image.jpg",
              logo: "https://skeki-energy.hr/skeki-energy-logo.svg",
              areaServed: {
                "@type": "Country",
                name: "Croatia",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Usluge solarnih panela",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Montaža solarnih panela",
                      description: "Profesionalna montaža fotonaponskih sustava na krovove",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Konzultacije",
                      description: "Savjetovanje o solarnim sustavima",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
