import dynamic from "next/dynamic";
import { Hero } from "@/components/features/hero";
import { Header } from "@/components/layout/header";

// Lazy load all non-critical components
const Header = dynamic(
  () =>
    import("@/components/layout/header").then((mod) => ({
      default: mod.Header,
    })),
  {
    ssr: true,
  }
);
const Statistics = dynamic(
  () =>
    import("@/components/features/statistics").then((mod) => ({
      default: mod.Statistics,
    })),
  {
    loading: () => null,
  }
);

// Lazy load non-critical sections for better performance
const Benefits = dynamic(
  () =>
    import("@/components/features/benefits").then((mod) => ({
      default: mod.Benefits,
    })),
  {
    loading: () => null,
  }
);
const CTA = dynamic(
  () =>
    import("@/components/features/cta").then((mod) => ({ default: mod.CTA })),
  {
    loading: () => null,
  }
);
const HowWeWork = dynamic(
  () =>
    import("@/components/features/how-we-work").then((mod) => ({
      default: mod.HowWeWork,
    })),
  {
    loading: () => null,
  }
);
const Services = dynamic(
  () =>
    import("@/components/features/services").then((mod) => ({
      default: mod.Services,
    })),
  {
    loading: () => null,
  }
);
const WhyUs = dynamic(
  () =>
    import("@/components/features/why-us").then((mod) => ({
      default: mod.WhyUs,
    })),
  {
    loading: () => null,
  }
);
const ContactForm = dynamic(
  () =>
    import("@/components/features/contact").then((mod) => ({
      default: mod.ContactForm,
    })),
  {
    loading: () => null,
  }
);
const Footer = dynamic(
  () =>
    import("@/components/layout/footer").then((mod) => ({
      default: mod.Footer,
    })),
  {
    ssr: true,
  }
);
export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <WhyUs />
        <Benefits />
        <CTA />
        <HowWeWork />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
