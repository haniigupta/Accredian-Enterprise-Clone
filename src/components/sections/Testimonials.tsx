import Image from "next/image";
import Container from "../common/Container";
import { testimonials } from "@/src/data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24"
    >
      <Container>
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Testimonials from{" "}
            <span className="text-[#2563EB]">
              Our Partners
            </span>
          </h2>

          <p className="mt-4 text-xl text-gray-700">
            What{" "}
            <span className="text-[#2563EB]">
              Our Clients
            </span>{" "}
            Are Saying
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {testimonials.map((item) => (

            <div
              key={item.company}
              className="rounded-2xl border bg-white p-10 shadow-sm transition hover:shadow-lg"
            >

              <Image
                src={item.logo}
                alt={item.company}
                width={90}
                height={60}
                className="mb-8 h-14 w-auto object-contain"
              />

              <p className="text-lg leading-8 text-gray-700">
                "{item.review}"
              </p>

            </div>

          ))}

        </div>


      </Container>
    </section>
  );
}