import type React from "react";
import type { Metadata } from "next";
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
    "Profesionalna instalacija solarnih panela. Uštedite do 90% na računima za struju uz čistu i obnovljivu energiju. Besplatna ponuda.",
  keywords: [
    "solarni paneli",
    "solarna energija",
    "instalacija solarnih panela",
    "Hrvatska",
    "ušteda energije",
    "obnovljivi izvori",
    "solarne elektrane",
    "fotovoltaika",
  ],
  authors: [{ name: "Skeki Energy" }],
  creator: "Skeki Energy",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://skekienergy.hr"
  ),
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "/",
    siteName: "Skeki Energy",
    title: "Skeki Energy - Instalacija Solarnih Panela",
    description:
      "Profesionalna instalacija solarnih panela. Uštedite do 90% na računima za struju uz čistu i obnovljivu energiju.",
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
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
