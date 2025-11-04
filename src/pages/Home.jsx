import AboutSection from "../components/HomePageSections/AboutSection/AboutSection";
import ContactSection from "../components/HomePageSections/ContactSection/ContactSection";
import HeroSection from "../components/HomePageSections/HeroSection/HeroSection";
import StackSection from "../components/HomePageSections/StackSection/StackSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <StackSection />
            <ContactSection />
        </>
    )
}

export default Home;