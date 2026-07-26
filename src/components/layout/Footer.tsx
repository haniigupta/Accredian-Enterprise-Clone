"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../common/Container";
import { X } from "lucide-react";
import EnquiryForm from "../common/EnquiryForm";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const [showForm, setShowForm] = useState(false);
  return (
    <footer className="border-t py-16">

      <Container>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Left */}

          <div>

            <Image
              src="/images/logo.webp"
              alt="Accredian"
              width={180}
              height={60}
              style={{ height: "auto" }}
            />

            <div className="mt-8 flex gap-4 text-2xl text-gray-700">
              <FaFacebook />
              <FaLinkedin />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>

          </div>

          {/* Middle */}

          <div>

            <h3 className="text-2xl font-bold">
              Accredian
            </h3>

            <ul className="mt-6 space-y-3 text-lg">

              <li>About</li>

              <li>Blog</li>

              <li>Why Accredian</li>

            </ul>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-2xl font-bold">
              Contact Us
            </h3>

            <p className="mt-6 text-lg">
              enterprise@accredian.com
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              4th Floor, 250,
              Phase IV,
              Udyog Vihar,
              Sector 18,
              Gurugram,
              Haryana
            </p>

          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-8 border-t pt-10 lg:flex-row">

          <div>

           <button
  onClick={() => setShowForm(true)}
  className="rounded-lg bg-[#2563EB] px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
>
  Enquire Now
</button>

            <p className="mt-3 text-center text-sm text-gray-500">
              Speak with our Advisor
            </p>

          </div>

          <p className="text-center text-gray-500">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>

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

    </footer>
  );
}