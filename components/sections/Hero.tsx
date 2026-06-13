export default function Hero() {
  return (
    <section
        id="home"
        className="min-h-screen flex flex-col justify-center py-32"
>
      {/* Name */}
      <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
        Luis Sebastian
      </h1>

      {/* Bio Paragraphs */}
      <div className="flex flex-col gap-4 mb-8">
        <p className="text-[15px] text-white/70 leading-relaxed">
          I&apos;m an Executive Assistant and a Computer Science graduate with a
          strong background in leadership and project management.
        </p>
        <p className="text-[15px] text-white/70 leading-relaxed">
          As a former Executive Assistant to a CEO and 5 different Executives in
          a Big 4 Audit Firm, I&apos;ve honed my skills in leading teams and
          optimizing operations. I have experience in system analysis, data
          analysis, and data-driven decision-making, using tools like Python,
          Excel, and Tableau.
        </p>
        <p className="text-[15px] text-white/70 leading-relaxed">
          Outside of work, I enjoy reading books, chess, and exploring new tech
          innovations.
        </p>
      </div>

      {/* Location */}
      <p className="text-[13px] text-white/40 tracking-wide">
        Currently based in Manila, Philippines
      </p>
    </section>
  );
}