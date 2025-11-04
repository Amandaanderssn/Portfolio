// import { useState } from "react";
// import { useState } from "react";
import { UseAnimationIfVisible } from "../../../hooks/UseAnimationIfVisible";
// import Button from "../../Button/Button";
import "./ContactSection.css"
import CopyMail from "../../CopyMail/CopyMail";

const ContactSection = () => {

    const [ref, isVisible] = UseAnimationIfVisible(0.3)

    return (
        <div className="contact-section" ref={ref}>
            <h2 className={`connect-title ${isVisible ? 'visible' : ''} `}> Let's connect</h2>
            <CopyMail />
            <p className={`thanksMsg ${isVisible ? 'visible' : ''} `}>Hope to hear from you</p>
        </div>
    )
}

export default ContactSection;