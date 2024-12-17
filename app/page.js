import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import dynamic from "next/dynamic";

// Dynamically import Education and Experience components
const Education = dynamic(() => import("./components/homepage/education"), {
  ssr: false, // Disable server-side rendering
});

const Experience = dynamic(() => import("./components/homepage/experience"), {
  ssr: false, // Disable server-side rendering
});
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";


export default async function Home() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </>
  )
};