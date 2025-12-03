import { useTheme } from "../../../hooks/UseTheme";
import Asterisk from "../../Asterisk/Asterisk";
import "./HeroSection.css";

const HeroSection = () => {
    const { theme } = useTheme();

    const fontSize = "2rem";

    const seeMyWork =
        theme === "dark"
            ? "/Images/SeeMyWork-darkmode.png"
            : "/Images/SeeMyWork-lightmode.png";

    return (
        <div className="hero-section">
            <Asterisk />
            <div className="slideInRight">
                <div style={{ display: "flex", gap: "0.2rem", alignItems: "center" }}>
                    <h6 style={{ fontSize: fontSize, margin: "0" }}>WEB DESIGNER </h6>
                    <h5 style={{ fontSize: fontSize, margin: "0" }}>&</h5>
                </div>
                <h6 style={{ fontSize: fontSize, margin: "0" }}>FRONT END DEVELOPER</h6>
            </div>
            <h1 style={{ fontSize: "8rem", margin: "0", letterSpacing: "20%" }} className="slideInLeft">AMANDA</h1>
            <div className="description slideInRight">
                <p className="description-text">Hi, I’m Amanda Andersson, a web designer and developer passionate about creating seamless digital experiences!</p>
                <img src={seeMyWork} alt="image" className="image" />
            </div>
            <h3 className="slideInUp">AVAILABLE FOR WORK</h3>
        </div>
    )
};

export default HeroSection;