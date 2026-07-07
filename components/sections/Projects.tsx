"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    name: "eStoic ↗",
    description: "Web app that brings The Daily Stoic by Ryan Holiday to your browser. Displays the meditation, quote, and reflection that matches today's exact date. Created for free, because everyone deserves to learn philosophy for free.",
    image: "/estoic.png",
    link: "https://estoic.vercel.app/",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        marginTop: "40px",
      }}
    >
      <h2
        style={{
          fontSize: "25px",
          fontWeight: "600",
          color: "#ffffff",
          marginBottom: "30px",
        }}
      >
        Projects
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              padding: "20px",
              borderRadius: "12px",
              border: hoveredIndex === index
                ? "1px solid rgba(255,255,255,0.15)"
                : "1px solid transparent",
              backgroundColor: hoveredIndex === index
                ? "rgba(255,255,255,0.05)"
                : "transparent",
              backdropFilter: hoveredIndex === index ? "blur(8px)" : "none",
              transition: "all 0.3s ease",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            {/* Project Image */}
            <div
              style={{
                width: "120px",
                height: "80px",
                flexShrink: 0,
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Text Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <p style={{ fontSize: "15px", fontWeight: "600", color: "#ffffff", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                {project.name}
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: "1.7" }}>
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}