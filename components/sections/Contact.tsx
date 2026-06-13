"use client";

import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

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
      {/* Section Title */}
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "600",
          color: "#ffffff",
          marginBottom: "40px",
        }}
      >
        Let&apos;s connect!
      </h2>

      {/* Form */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {/* Textarea */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
          rows={5}
          style={{
            width: "100%",
            backgroundColor: "#ffffff",
            color: "#000000",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "8px",
            padding: "12px 16px",
            fontSize: "14px",
            resize: "none",
            outline: "none",
            fontFamily: "inherit",
          }}
        />

        {/* Button */}
        <button
          onClick={() => {
            if (message.trim()) {
              alert("Message sent!");
              setMessage("");
            }
          }}
          style={{
            width: "100%",
            backgroundColor: "#1a1a1a",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "8px",
            padding: "12px 16px",
            fontSize: "14px",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Send Message
        </button>
      </div>
    </section>
  );
}