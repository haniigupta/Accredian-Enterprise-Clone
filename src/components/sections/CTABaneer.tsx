import Container from "../common/Container";
import { Headphones } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-[#2563EB] px-8 py-10 text-white shadow-lg">

          {/* Background Circles */}

          <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border-[80px] border-blue-400/20" />

          <div className="absolute -right-24 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full border-[60px] border-blue-300/20" />

          <div className="absolute right-10 top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full border-[45px] border-blue-200/20" />

          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div className="flex items-center gap-6">

              <div className="rounded-2xl bg-white p-4 shadow">

                <Headphones
                  size={50}
                  className="text-[#2563EB]"
                />

              </div>

              <div>

                <h2 className="text-4xl font-bold">
                  Want to Learn More About Our Training Solutions?
                </h2>

                <p className="mt-3 text-xl">
                  Get Expert Guidance for Your Team's Success!
                </p>

              </div>

            </div>

            <button className="rounded-xl bg-white px-10 py-5 text-xl font-semibold text-[#2563EB] transition hover:scale-105">

              Contact Us →

            </button>

          </div>

        </div>
      </Container>
    </section>
  );
}