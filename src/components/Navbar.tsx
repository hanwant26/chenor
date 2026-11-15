
"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center text-2xl font-semibold tracking-[-0.06em] text-neutral-950"
        >
          chenor
          <span className="text-blue-600 transition-transform duration-300 group-hover:scale-125">
            .
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-neutral-500 transition-colors duration-200 hover:text-neutral-950"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden rounded-full bg-neutral-950 px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-300 hover:bg-blue-600 md:inline-flex"
        >
          Let's Talk
          <span className="ml-2">↗</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="chenor-mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-neutral-950 transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-neutral-950 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-neutral-950 transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="chenor-mobile-menu"
          className="border-t border-neutral-100 bg-white px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {[...navLinks, { label: "Contact", href: "#contact" }].map(
              (link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-neutral-800"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
