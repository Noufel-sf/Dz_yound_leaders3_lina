import CtaSection from "./components/CtaSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <HeroSection />
      <CtaSection />
    </main>
  );
}
    