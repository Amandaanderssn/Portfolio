import { UseAnimationIfVisible } from "../../../hooks/UseAnimationIfVisible";
import "./ContactSection.css"
import CopyMail from "../../CopyMail/CopyMail";
import VisitLinkedIn from "../../VisitLinkedIn/VisitLinkedIn";

const ContactSection = () => {

    const [ref, isVisible] = UseAnimationIfVisible(0.3)

    return (
        <div className="contact-section" ref={ref}>
            <h2 className={`connect-title ${isVisible ? 'visible' : ''} `}> Let's connect</h2>
            <div className="connect-container">
                <CopyMail />
                <VisitLinkedIn />
            </div>
            {/* <p className={`thanksMsg ${isVisible ? 'visible' : ''} `}>Hope to hear from you</p> */}
            <h2 className={`connect-title-2 ${isVisible ? 'visible' : ''}`}>AND make something great</h2>
        </div>
    )
}

export default ContactSection;