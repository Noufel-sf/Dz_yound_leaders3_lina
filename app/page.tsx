import CtaSection from "./components/CtaSection";
import HeroSection from "./components/HeroSection";
import OurValues from "./components/OurValues";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <HeroSection />
      <OurValues />
      {/* <CtaSection /> */}
    </main>
  );
}
    