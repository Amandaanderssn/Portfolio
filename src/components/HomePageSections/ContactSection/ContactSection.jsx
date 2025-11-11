import { UseAnimationIfVisible } from "../../../hooks/UseAnimationIfVisible";
import "./ContactSection.css"
import CopyMail from "../../CopyMail/CopyMail";
import VisitLinkedIn from "../../VisitLinkedIn/VisitLinkedIn";

const ContactSection = () => {

    const [ref, isVisible] = UseAnimationIfVisible(0.3)

    return (
        <div className="contact-section" ref={ref}>
            <h2 className={`connect-title ${isVisible ? 'visible' : ''} `}> Let's connect</h2>
            <CopyMail />
            <VisitLinkedIn />
            <p className={`thanksMsg ${isVisible ? 'visible' : ''} `}>Hope to hear from you</p>
        </div>
    )
}

export default ContactSection;