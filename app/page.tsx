import Hero from "@/components/Hero";
import WarningBox from "@/components/WarningBox";
import VideoSection from "@/components/VideoSection";
import ProductOverview from "@/components/ProductOverview";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Benefits from "@/components/Benefits";
import WhatsIncluded from "@/components/WhatsIncluded";
import BonusStack from "@/components/BonusStack";
import ValueStack from "@/components/ValueStack";
import Testimonials from "@/components/Testimonials";
import WhyBuyFromMe from "@/components/WhyBuyFromMe";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import CTASections from "@/components/CTASections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WarningBox />
      <VideoSection />
      <ProductOverview />
      <WhoThisIsFor />
      <Benefits />
      <WhatsIncluded />
      <BonusStack />
      <ValueStack />
      <Testimonials />
      <WhyBuyFromMe />
      <Guarantee />
      <FAQ />
      <AffiliateDisclosure />
      <CTASections />
      <Footer />
    </main>
  );
}
