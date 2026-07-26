"use client";

import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { useState } from "react";

import Container from "../common/Container";
import Modal from "../common/Modal";
import EnquiryForm from "../common/EnquiryForm";

const features = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
];

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <section
      id="home"
      className="bg-white py-8"
    >
      <Container>
        <div className="overflow-hidden rounded-[36px] bg-[#EEF5FF] shadow-xl">
          <div className="grid items-center gap-10 px-8 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-16 lg:py-12">
            {/* Left */}
            <div>
              <h1 className="text-[44px] leading-[1.05] lg:text-[58px] font-bold leading-tight text-black ">
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

              <p className="mt-8 max-w-[480px] text-[18px] leading-9 leading-relaxed text-gray-900">
                Cultivate high-performance teams through
                expert learning.
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                {features.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <CircleCheckBig
                      className="text-green-600"
                      size={20}
                    />

                    <span className="text-base font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setOpen(true)}
                className="mt-12 rounded-xl bg-[#2563EB] px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700"
              >
                Enquire Now
              </button>
            </div>

            {/* Right */}
            <div className="relative flex justify-center lg:justify-end lg:pt-4">
              <Image
                src="/images/hero.webp"
                alt="Enterprise Learning"
                width={560}
                height={600}
                priority
                className="w-full max-w-[500px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <EnquiryForm />
      </Modal>
    </section>
  );
}