import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import WorkExperiences from "@/components/sections/WorkExperiences";
import Education from "@/components/sections/Education";
import Leadership from "@/components/sections/Leadership";
import Certifications from "@/components/sections/Certifications";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0f0f0f", color: "#ffffff" }}>
      <Navbar />
      <div style={{ maxWidth: "768px", margin: "0 auto", paddingLeft: "64px", paddingRight: "32px" }}>
        <Hero />
        <WorkExperiences />
        <Education />
        <Leadership />
        <Certifications />
      </div>
    </main>
  );
}