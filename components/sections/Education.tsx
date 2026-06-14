const education = [
  {
    date: "Sep 2020 - Sep 2024",
    degree: "B.S. in Computer Science",
    school: "Cavite State University - Main Campus",
  },
];

export default function Education() {
  return (
    <section id="education" style={{ paddingTop: "80px", paddingBottom: "80px", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "40px" }}>
      <h2 style={{ fontSize: "25px", fontWeight: "600", color: "#ffffff", marginBottom: "40px" }}>
        Education
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {education.map((edu, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{edu.date}</p>
            <p style={{ fontSize: "15px", fontWeight: "450", color: "#ffffff" }}>{edu.degree}</p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>{edu.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
}