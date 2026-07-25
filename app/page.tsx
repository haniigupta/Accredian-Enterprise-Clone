import Hero from "@/src/components/sections/Hero";
import Stats from "@/src/components/sections/Stats";
import Clients from "@/src/components/sections/Clients";
import AccredianEdge from "@/src/components/sections/AccredianEdge";
import CAT from "@/src/components/sections/CAT";
import HowItWorks from "@/src/components/sections/HowItWorks";
import FAQ from "@/src/components/sections/FAQ";
import Testimonials from "@/src/components/sections/Testimonials";
export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Clients />
      <AccredianEdge />
      <CAT />
      <HowItWorks />
      <FAQ />
      <Testimonials />
    </main>
  );
}