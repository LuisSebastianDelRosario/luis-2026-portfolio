import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import WorkExperiences from "@/components/sections/WorkExperiences";
import Education from "@/components/sections/Education";
import Leadership from "@/components/sections/Leadership";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#000000", color: "#ffffff" }}>
      <Navbar />
      <div style={{ maxWidth: "768px", margin: "0 auto", paddingLeft: "64px", paddingRight: "32px" }}>
        <Hero />
        <FadeIn>
          <WorkExperiences />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Education />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Leadership />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Certifications />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Contact />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Footer />
        </FadeIn>
      </div>
    </main>
  );
}