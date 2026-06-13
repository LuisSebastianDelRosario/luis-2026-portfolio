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
    <section id="experiences" className="py-16">
      {/* Section Title */}
      <h2 className="text-xl font-semibold text-white mb-8">
        Work Experiences
      </h2>

      {/* Experience Entries */}
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col gap-1">
            {/* Date */}
            <p className="text-[13px] text-white/50">
              {exp.date}
            </p>
            {/* Job Title */}
            <p className="text-[15px] font-semibold text-white">
              {exp.title}
            </p>
            {/* Company */}
            <p className="text-[13px] text-white/40">
              {exp.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}