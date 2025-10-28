"use client";

import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#0A192F] py-5 text-gray-200">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between gap-3 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase text-center sm:text-left">
          <p className="text-gray-200/90">
            © {year} <span className="px-1">·</span> Akshay Bhawar <span className="px-1">·</span> All Rights Reserved
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-1 text-gray-100 underline underline-offset-4 hover:text-white whitespace-nowrap"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="-mt-px" />
            Scroll to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
