import { UseAnimationIfVisible } from "../../../hooks/UseAnimationIfVisible.jsx";
import VerticalTitle from "../../VerticalTitle/VerticalTitle.jsx";
import "./AboutSection.css";

const AboutSection = () => {

    const [ref, isVisible] = UseAnimationIfVisible(0.5)

    return (
        <div className="about-section" ref={ref}>
            <VerticalTitle text="About Me" placement={"left"} />
            <div className="content">
                <div className={`position ${isVisible ? "visible" : ""}`}>
                    <div>
                        <h3 style={{ textTransform: "uppercase" }}>Hi, I'm Amanda, I love making things that help people do their thing.</h3>
                    </div>
                    <div>
                        <p>I'm a junior frontend developer bla bla bla...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;