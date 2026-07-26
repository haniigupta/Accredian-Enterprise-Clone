"use client";

import Image from "next/image";

export default function EnquiryForm() {
  return (
    <div className="grid md:grid-cols-[0.9fr_1fr]">
      {/* Left Image */}

      <div className="relative hidden md:block h-full">
        <Image
          src="/images/form.webp"
          alt="Meeting"
          fill
          className="object-cover"
        />
      </div>

      {/* Right */}

     <div className="max-h-[85vh] overflow-y-auto no-scrollbar px-9 py-7">
        <h2 className="text-3xl font-bold mb-8">
          Enquire Now
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full border-b border-gray-300 py-2 outline-none"
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border-b border-gray-300 py-3 outline-none"
          />

          <div className="flex">
            <div className="mr-3 flex items-center gap-2 border-b border-gray-300 pb-3">
              🇮🇳
              <span>+91</span>
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 border-b border-gray-300 py-3 outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Enter company name"
            className="w-full border-b border-gray-300 py-3 outline-none"
          />

          <select className="w-full border-b border-gray-300 py-3 bg-white outline-none">
            <option>Select Domain</option>
            <option>Technology</option>
            <option>Finance</option>
            <option>Healthcare</option>
            <option>Education</option>
          </select>

          <input
            type="number"
            placeholder="Enter No. of candidates"
            className="w-full border-b border-gray-300 py-3 outline-none"
          />

          <select className="w-full border-b border-gray-300 py-3 bg-white outline-none">
            <option>Select Mode of Delivery</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Hybrid</option>
          </select>

          <input
            type="text"
            placeholder="Eg: Gurgaon, Delhi, India"
            className="w-full border-b border-gray-300 py-3 outline-none"
          />

          <button
            className="mt-4 w-full rounded-lg bg-[#2563EB] py-3 text-base font-semibold text-white transition hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}