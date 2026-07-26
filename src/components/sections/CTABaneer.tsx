"use client";

import { useState } from "react";
import Container from "../common/Container";
import { Headphones, X } from "lucide-react";
import EnquiryForm from "../common/EnquiryForm";

export default function CTA() {
  const [showForm, setShowForm] = useState(false);
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
            <button
              onClick={() => setShowForm(true)}
              className="rounded-xl bg-white px-10 py-5 text-xl font-semibold text-[#2563EB] transition hover:scale-105"
            >
              Contact Us →
            </button>

          </div>

        </div>
      </Container>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">

            <button
              onClick={() => setShowForm(false)}
              className="absolute right-5 top-5 z-10 rounded-full p-2 text-gray-500 transition hover:bg-gray-100"
            >
              <X size={28} />
            </button>

            <EnquiryForm />

          </div>
        </div>
      )}
    </section>

  );
}