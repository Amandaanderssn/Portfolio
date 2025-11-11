import AboutSection from "../components/Sections/AboutSection/AboutSection";
import ContactSection from "../components/Sections/ContactSection/ContactSection";
import HeroSection from "../components/Sections/HeroSection/HeroSection";
import ProjectSection from "../components/Sections/ProjectSection/ProjectSection";
import StackSection from "../components/Sections/StackSection/StackSection";

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