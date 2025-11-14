import { useRef } from "react";
import HeroSection from "./components/Sections/HeroSection/HeroSection"
import StackSection from "./components/Sections/StackSection/StackSection";
import AboutSection from "./components/Sections/AboutSection/AboutSection";
import ProjectSection from "./components/Sections/ProjectSection/ProjectSection";
import ContactSection from "./components/Sections/ContactSection/ContactSection"
import Navbar from "./components/Navbar/Navbar";

function App() {

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const stackRef = useRef(null)
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        onNavigate={(section) => {
          if (section === "hero") scrollToSection(heroRef);
          if (section === "about") scrollToSection(aboutRef);
          if (section === "projects") scrollToSection(projectsRef);
          if (section === "stack") scrollToSection(stackRef);
          if (section === "contact") scrollToSection(contactRef);
        }} />

      <main>
        <section ref={heroRef}><HeroSection /></section>
        <section ref={aboutRef}><AboutSection /></section>
        <section ref={projectsRef}><ProjectSection /></section>
        <section ref={stackRef}><StackSection onNavigate={(section) => {
          if (section === "projects") scrollToSection(projectsRef);
        }} /></section>
        <section ref={contactRef}><ContactSection /></section>
      </main>
    </>
  )
}

export default App;