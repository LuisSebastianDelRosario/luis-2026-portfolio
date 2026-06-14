"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "home", href: "#home" },
  { label: "experiences", href: "#experiences" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <nav style={{
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 50,
  backgroundColor: "rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
}}>
      <div style={{
        maxWidth: "768px",
        margin: "0 auto",
        paddingLeft: "64px",
        paddingRight: "32px",
        paddingTop: "24px",
        paddingBottom: "24px",
        display: "flex",
        gap: "32px",
      }}>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onMouseEnter={() => setHoveredLink(link.label)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              fontSize: "14px",
              color: hoveredLink === link.label
                ? "rgba(255,255,255,1)"
                : "rgba(255,255,255,0.5)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}