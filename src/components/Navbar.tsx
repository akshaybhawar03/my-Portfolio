"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#", label: "Home" },
    { href: "#projects", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-900/80 text-slate-100 backdrop-blur supports-backdrop-filter:bg-slate-900/60">
          <nav className="flex items-center justify-between px-4">
            <div className="flex h-14 items-center gap-3">
              <Link href="#" className="text-xl font-bold tracking-tight">A</Link>
            </div>
            <button
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-sm md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              ☰
            </button>
            <ul className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`rounded-full px-4 py-1.5 text-sm transition-colors hover:bg-white/10 ${
                      item.label === "Home" ? "bg-white/10" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden items-center gap-2 md:flex">
              <button className="rounded-full border border-white/15 px-3 py-1.5 text-sm hover:bg-white/10">IG</button>
              <button className="rounded-full border border-white/15 px-3 py-1.5 text-sm hover:bg-white/10">GH</button>
            </div>
          </nav>
          {open && (
            <div id="mobile-menu" className="border-t border-white/10 px-4 py-2 md:hidden">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-md px-3 py-2 hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
