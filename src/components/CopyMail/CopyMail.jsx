import { UseAnimationIfVisible } from "../../hooks/UseAnimationIfVisible";
import Button from "../Button/Button";
import "./CopyMail.css"
import { useState } from "react";

const CopyMail = () => {
    const [ref, isVisible] = UseAnimationIfVisible(0.3)

    const [isClicked, setIsClicked] = useState(false);

    const mail = "amanda.andersson.dev@gmail.com"

    const copyMail = () => {
        navigator.clipboard.writeText(mail);
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 500);
    }

    return (
        <div className={`mail ${isVisible ? 'visible' : ''} `} ref={ref}>
            <p>{mail}</p>
            {isClicked && <span className="copiedBubble">Copied!</span>}
            <Button callback={copyMail} isClicked={isClicked} text={"CTRL + C"} />
        </div>
    )

}

export default CopyMail;