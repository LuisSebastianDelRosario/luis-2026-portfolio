const certifications = [
  {
    name: "Atlassian Agile Project Management: Professional Certificate",
    issuer: "Atlassian (Feb 2025)",
  },
  {
    name: "Lean Six Sigma: White Belt Certification",
    issuer: "Six Sigma PH (Aug 2025)",
  },
  {
    name: "Microsoft Security Essentials: Professional Certificate",
    issuer: "Microsoft (Aug 2025)",
  },
  {
    name: "Root Cause Analysis by PMI",
    issuer: "Project Management Institute (Jul 2025)",
  },
  {
    name: "Complete Data Science",
    issuer: "365 Careers (Jul 2025)",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
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
        Certifications
      </h2>

      {/* Certification Entries */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {certifications.map((cert, index) => (
          <div
            key={index}
            style={{ display: "flex", flexDirection: "column", gap: "4px" }}
          >
            {/* Cert Name */}
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "#ffffff",
              }}
            >
              {cert.name}
            </p>
            {/* Issuer + Date */}
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}