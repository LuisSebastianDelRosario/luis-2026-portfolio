const leadership = [
  {
    role: "President",
    organization: "CEIT Student Council - CvSU Main Campus",
  },
  {
    role: "Secretary General",
    organization: "Central Student Government - CvSU Main Campus",
  },
  {
    role: "Gen AI Representative",
    organization: "BSv Gen AI FY26 - PwC AC Manila",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
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
        Leadership and Extras
      </h2>

      {/* Leadership Entries */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {leadership.map((item, index) => (
          <div
            key={index}
            style={{ display: "flex", flexDirection: "column", gap: "4px" }}
          >
            {/* Role */}
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "#ffffff",
              }}
            >
              {item.role}
            </p>
            {/* Organization */}
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {item.organization}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}