import Hero from "@/components/Hero";
import ProductOverview from "@/components/ProductOverview";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Benefits from "@/components/Benefits";
import WhatsIncluded from "@/components/WhatsIncluded";
import BonusStack from "@/components/BonusStack";
import ValueStack from "@/components/ValueStack";
import FAQ from "@/components/FAQ";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import CTASections from "@/components/CTASections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductOverview />
      <WhoThisIsFor />
      <Benefits />
      <WhatsIncluded />
      <BonusStack />
      <ValueStack />
      <FAQ />
      <AffiliateDisclosure />
      <CTASections />
      <Footer />
    </main>
  );
}
