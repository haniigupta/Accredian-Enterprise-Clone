"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
//import { Link as ScrollLink } from "react-scroll";
import { NAV_LINKS } from "../../constants/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <a href="#home" className="cursor-pointer">
                    <Image
                        src="/images/logo.webp"
                        alt="Accredian"
                        width={170}
                        height={55}
                        priority
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-10 lg:flex">
                    {NAV_LINKS.map((item) => (
                       <a
  key={item.label}
  href={item.href}
  className={clsx(
    "relative text-[16px] font-medium text-gray-800 transition hover:text-blue-600",
    "after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
  )}
>
  {item.label}
</a>
                    ))}
                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-md p-2 lg:hidden"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={clsx(
                    "overflow-hidden transition-all duration-300 lg:hidden",
                    isOpen ? "max-h-96 border-t" : "max-h-0"
                )}
            >
                <nav className="flex flex-col bg-white px-6 py-4">
                    {NAV_LINKS.map((item) => (
                        <a
  key={item.label}
  href={item.href}
  onClick={() => setIsOpen(false)}
  className="cursor-pointer rounded-md py-3 text-gray-800 transition hover:text-blue-600"
>
  {item.label}
</a>
                    ))}
                </nav>
            </div>
        </header>
    );
}