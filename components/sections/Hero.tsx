"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      {/* Name */}
      <h1 style={{
        fontSize: "48px",
        fontWeight: "800",
        color: "#ffffff",
        marginBottom: "24px",
        letterSpacing: "-1.5px",
      }}>
        Luis Sebastian
      </h1>

      {/* Bio Paragraphs */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
        <p style={{
          fontSize: "15px",
          color: "rgba(255,255,255,0.7)",
          lineHeight: "1.7",
        }}>
          I&apos;m an Executive Assistant and a Computer Science graduate with a
          strong background in leadership and project management.
        </p>
        <p style={{
          fontSize: "15px",
          color: "rgba(255,255,255,0.7)",
          lineHeight: "1.7",
        }}>
          As a former Executive Assistant to a CEO and 5 different Executives in
          a Big 4 Audit Firm, I&apos;ve honed my skills in leading teams and
          optimizing operations. I have experience in system analysis, data
          analysis, and data-driven decision-making, using tools like Python,
          Excel, and Tableau.
        </p>
        <p style={{
          fontSize: "15px",
          color: "rgba(255,255,255,0.7)",
          lineHeight: "1.7",
        }}>
          Outside of work, I enjoy reading books, chess, and exploring new tech
          innovations.
        </p>
      </div>

      {/* Location + Live Clock */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}>
        <p style={{
          fontSize: "13px",
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.3px",
        }}>
          Currently based in Manila, Philippines ✈︎
        </p>
        <p style={{
          fontSize: "13px",
          color: "rgba(255,255,255,0.18)",
          letterSpacing: "0.3px",
          fontVariantNumeric: "tabular-nums",
        }}>
          {time} ·  (PST)
        </p>
      </div>
    </section>
  );
}