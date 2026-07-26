import Hero from "@/src/components/sections/Hero";
import Stats from "@/src/components/sections/Stats";
import Clients from "@/src/components/sections/Clients";
import AccredianEdge from "@/src/components/sections/AccredianEdge";
import CAT from "@/src/components/sections/CAT";
import HowItWorks from "@/src/components/sections/HowItWorks";
import FAQ from "@/src/components/sections/FAQ";
import Testimonials from "@/src/components/sections/Testimonials";
import CTA from "@/src/components/sections/CTABaneer";
import CourseSegmentation from "@/src/components/sections/CourseSegmentation";
import DomainExpertise from "@/src/components/sections/DomainExpertise";
export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Clients />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <CAT />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  );
}