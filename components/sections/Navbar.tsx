"use client";

import Link from "next/link";

const navLinks = [
  { label: "home", href: "#home" },
  { label: "experiences", href: "#experiences" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]">
      <div style={{ paddingLeft: "64px", paddingTop: "24px", paddingBottom: "24px", display: "flex", gap: "32px" }}>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-white/70 hover:text-white transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}