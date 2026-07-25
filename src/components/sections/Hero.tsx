import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import Container from "../common/Container";

const features = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-white py-6 lg:py-8"
    >
      <Container>
        <div className="overflow-hidden rounded-[36px] bg-[#EEF5FF] shadow-xl">
          <div className="grid items-center gap-10 px-8 py-8 lg:grid-cols-[1fr_0.95fr] lg:px-14 lg:py-10">
            {/* Left */}
            <div>
              <h1 className="text-[52px] lg:text-[68px] font-bold leading-tight text-black ">
                Next-Gen{" "}
                <span className="text-[#2563EB]">
                  Expertise
                </span>
                <br />
                For Your{" "}
                <span className="text-[#2563EB]">
                  Enterprise
                </span>
              </h1>

              <p className="mt-10 max-w-xl text-[22px] leading-relaxed text-gray-900">
                Cultivate high-performance teams through
                expert learning.
              </p>

              <div className="mt-10 flex flex-wrap gap-8">
                {features.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <CircleCheckBig
                      className="text-green-600"
                      size={24}
                    />

                    <span className="text-lg font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-12 rounded-xl bg-[#2563EB] px-10 py-4 text-xl font-semibold text-white shadow-lg transition hover:bg-blue-700">
                Enquire Now
              </button>
            </div>

            {/* Right */}
            <div className="relative flex justify-center lg:justify-end">
              <Image
                src="/images/hero.webp"
                alt="Enterprise Learning"
                width={760}
                height={720}
                priority
                className="h-auto w-full max-w-[600px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}