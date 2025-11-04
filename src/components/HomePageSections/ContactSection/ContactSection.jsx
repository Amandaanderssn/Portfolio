import { useState } from "react";
import { UseAnimationIfVisible } from "../../../hooks/UseAnimationIfVisible";
import "./ContactSection.css"
import { useTheme } from "../../../hooks/UseTheme";

const ContactSection = () => {
    const { theme } = useTheme()

    const [ref, isVisible] = UseAnimationIfVisible(0.3)
    const [copied, setCopied] = useState(false);

    const mail = "amanda.andersson.dev@gmail.com"

    const copyMail = () => {
        navigator.clipboard.writeText(mail);
        setCopied(true);
        setTimeout(() => setCopied(false), 500);
    }

    const lightOrDarkButton = theme === "dark" ? "darkCopyButton" : "lightCopyButton"

    return (
        <div className="contact-section" ref={ref}>
            <h2 className={`connect-title ${isVisible ? 'visible' : ''} `}> Let's connect</h2>
            <div className={`mail ${isVisible ? 'visible' : ''} `}>
                <p>{mail}</p>
                {copied && <span className="copiedBubble">Copied!</span>}
                <button className={`${lightOrDarkButton} ${copied ? "clicked" : ""}`} onClick={copyMail}>CTRL + C </button>
            </div>
            <p className={`thanksMsg ${isVisible ? 'visible' : ''} `}>Hope to hear from you</p>
        </div>
    )
}

export default ContactSection;