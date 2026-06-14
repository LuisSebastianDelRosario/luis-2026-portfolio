const experiences = [
  {
    date: "Jan 2025 - Present",
    title: "Executive Assistant to the National Leader",
    company: "PwC Acceleration Center Manila",
  },
  {
    date: "Sep 2023 - Dec 2024",
    title: "Executive Assistant to the CEO",
    company: "Riego de Dios Consulting",
  },
  {
    date: "Jul 2023 - Sep 2023",
    title: "System Analyst",
    company: "Pixel8 Web Solutions & Consultancy Inc.",
  },
];

export default function WorkExperiences() {
  return (
    <section id="experiences" style={{ paddingTop: "80px", paddingBottom: "80px", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "40px" }}>
      <h2 style={{ fontSize: "25px", fontWeight: "600", color: "#ffffff", marginBottom: "40px" }}>
        Work Experiences
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {experiences.map((exp, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{exp.date}</p>
            <p style={{ fontSize: "15px", fontWeight: "450", color: "#ffffff" }}>{exp.title}</p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>{exp.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}