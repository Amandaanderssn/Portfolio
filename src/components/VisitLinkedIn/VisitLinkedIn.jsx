import "./VisitLinkedIn.css"
import { useState } from "react";
import Button from "../Button/Button";
import { UseAnimationIfVisible } from "../../hooks/UseAnimationIfVisible";

const VisitLinkedIn = () => {
    const [ref, isVisible] = UseAnimationIfVisible(0.3)

    const [isClicked, setIsClicked] = useState(false);

    const VisitLinkedIn = () => {
        setIsClicked(true)
        setTimeout(() => {
            setIsClicked(false);
            window.open("https://www.linkedin.com/in/amandaanderssn", "_blank", "noopener,noreferrer")
        }, 600);
    }

    return (
        <div className={`linkedIn ${isVisible ? "visible" : ""}`} ref={ref}>
            <p>Amanda Andersson</p>
            <Button callback={VisitLinkedIn} isClicked={isClicked} text={"LINKEDIN"} />
        </div>
    )
}

export default VisitLinkedIn;