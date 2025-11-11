import AboutSection from "../components/HomePageSections/AboutSection/AboutSection";
import ContactSection from "../components/HomePageSections/ContactSection/ContactSection";
import HeroSection from "../components/HomePageSections/HeroSection/HeroSection";
import ProjectSection from "../components/HomePageSections/ProjectSection/ProjectSection";
import StackSection from "../components/HomePageSections/StackSection/StackSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <ProjectSection />
            <StackSection />
            <AboutSection />
            <ContactSection />
        </>
    )
}

export default Home;