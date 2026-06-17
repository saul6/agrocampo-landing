import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { WaitlistSection } from "@/components/WaitlistSection";
import { DemoSection } from "@/components/DemoSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <WaitlistSection />
        <DemoSection />
      </main>
      <Footer />
    </>
  );
}
