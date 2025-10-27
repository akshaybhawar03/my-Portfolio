"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  title?: string;
  ctaLabel?: string;
  href?: string; // mailto or route
};

export default function ContactCTA({
  title = "GOT A PROJECT IN MIND?",
  ctaLabel = "CONTACT ME",
  href = "mailto:akshaybhawar03@gmail.com",
}: Props) {
  return (
    <section id="contact-cta" className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-700/40 bg-gradient-to-b from-[#0D1B2A] to-[#13293D] text-white">
          <div className="flex items-center justify-between gap-4 p-5 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-wide uppercase text-gray-100">
              {title}
            </h2>

            <Link
              href={href}
              className="inline-flex items-center gap-2 rounded-xl border border-white/70 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition-colors"
            >
              {ctaLabel}
              <FiArrowRight className="hidden sm:block" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
