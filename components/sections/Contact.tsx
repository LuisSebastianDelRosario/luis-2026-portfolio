"use client";

import { useEffect, useState } from "react";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="contact"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        marginTop: "40px",
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: isMobile ? "40px" : "40px",
      }}>

        {/* LEFT SIDE */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img
              src="/luisprofile.jpg"
              alt="Luis Sebastian"
              style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: "15px", fontWeight: "700", color: "#ffffff" }}>
                Luis Sebastian Del Rosario
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "0.5px" }}>
                Executive Assistant / Junior Consultant
              </p>
            </div>
          </div>
          <div>
            <p style={{ fontSize: "14px", fontWeight: "600", color: "#ffffff", marginBottom: "0.5px" }}>
              Contact me:
            </p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
              delrosario.luissebastian@gmail.com
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", maxWidth: isMobile ? "100%" : "320px" }}>
          <h2 style={{ fontSize: "25px", fontWeight: "600", color: "#ffffff" }}>
            Let&apos;s connect!
          </h2>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: "1.6" }}>
            Feel free to reach out and say hello.
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <a href="https://www.linkedin.com/in/luis-sebastian-del-rosario-59a935287/" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredIcon("linkedin")} onMouseLeave={() => setHoveredIcon(null)} style={{ width: "38px", height: "38px", borderRadius: "50%", border: hoveredIcon === "linkedin" ? "1px solid #ffffff" : "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: hoveredIcon === "linkedin" ? "#000000" : "rgba(255,255,255,0.4)", textDecoration: "none", backgroundColor: hoveredIcon === "linkedin" ? "#ffffff" : "transparent", transition: "all 0.2s ease" }}>
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
</a>
<a href="https://www.instagram.com/iamluisdelrosario/" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredIcon("instagram")} onMouseLeave={() => setHoveredIcon(null)} style={{ width: "38px", height: "38px", borderRadius: "50%", border: hoveredIcon === "instagram" ? "1px solid #ffffff" : "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: hoveredIcon === "instagram" ? "#000000" : "rgba(255,255,255,0.4)", textDecoration: "none", backgroundColor: hoveredIcon === "instagram" ? "#ffffff" : "transparent", transition: "all 0.2s ease" }}>
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
</a>
          </div>
        </div>

      </div>
    </section>
  );
}