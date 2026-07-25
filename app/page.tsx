import Hero from "@/src/components/sections/Hero";
import Stats from "@/src/components/sections/Stats";
import Clients from "@/src/components/sections/Clients";
import AccredianEdge from "@/src/components/sections/AccredianEdge";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Clients />
      <AccredianEdge />
    </main>
  );
}