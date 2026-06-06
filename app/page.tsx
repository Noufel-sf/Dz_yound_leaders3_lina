import CtaSection from "./components/CtaSection";
import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import OurValues from "./components/OurValues";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <HeroSection />
      <OurValues />
      <FaqSection />
      {/* <CtaSection /> */}
    </main>
  );
}
    