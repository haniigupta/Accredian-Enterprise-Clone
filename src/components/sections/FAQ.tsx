"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Container from "../common/Container";
import { faqData } from "@/src/data/faq";
import { X } from "lucide-react";
import EnquiryForm from "../common/EnquiryForm";

export default function FAQ() {

  const [category, setCategory] = useState<"course" | "delivery" | "misc">("course");

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const [showForm, setShowForm] = useState(false);

  const questions = faqData[category];

  return (
    <section id="faqs" className="py-24">
      <Container>
        <h2 className="text-center text-5xl font-bold">
          Frequently Asked{" "}
          <span className="text-[#2563EB]">
            Questions
          </span>
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-[280px_1fr]">

          {/* Left Buttons */}

          <div className="space-y-6">

            <button
              onClick={() => {
                setCategory("course");
                setOpenIndex(0);
              }}
              className={`w-full rounded-xl border py-5 text-lg font-semibold transition ${category === "course"
                  ? "bg-white text-blue-600 shadow-lg"
                  : "bg-white text-gray-700"
                }`}
            >
              About the Course
            </button>

            <button
              onClick={() => {
                setCategory("delivery");
                setOpenIndex(0);
              }}
              className={`w-full rounded-xl border py-5 text-lg font-semibold transition ${category === "delivery"
                  ? "bg-white text-blue-600 shadow-lg"
                  : "bg-white text-gray-700"
                }`}
            >
              About the Delivery
            </button>

            <button
              onClick={() => {
                setCategory("misc");
                setOpenIndex(0);
              }}
              className={`w-full rounded-xl border py-5 text-lg font-semibold transition ${category === "misc"
                  ? "bg-white text-blue-600 shadow-lg"
                  : "bg-white text-gray-700"
                }`}
            >
              Miscellaneous
            </button>

          </div>

          {/* Accordion */}

          <div>

            {questions.map((item, index) => (

              <div
                key={index}
                className="border-b"
              >

                <button
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index
                        ? null
                        : index
                    )
                  }
                  className="flex w-full items-center justify-between py-6 text-left text-xl font-semibold"
                >

                  {item.question}

                  {openIndex === index ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}

                </button>

                {openIndex === index && (

                  <div className="pb-6 text-lg leading-8 text-gray-600">

                    {item.answer}

                  </div>

                )}

              </div>

            ))}

            <div className="mt-12 text-center">

              <button
                onClick={() => setShowForm(true)}
                className="rounded-lg bg-[#2563EB] px-10 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
              >
                Enquire Now
              </button>

            </div>

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