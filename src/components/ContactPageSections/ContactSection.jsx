import Asterisk from "../Asterisk/Asterisk";
import VisitLinkedIn from "../VisitLinkedIn/VisitLinkedIn";
import "./ContactSection.css"
import CopyMail from "../CopyMail/CopyMail";


const ContactSection = () => {

    return (
        <div className="contact">
            <Asterisk />
            <div className="slideInLeft">
                <h1 className="contact-title">LET'S GET IN TOUCH</h1>
            </div>
            <hr style={{ width: "80vw" }} className="slideInRight" />
            <div style={{ width: "75vw", marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "3rem" }}>
                <CopyMail />
                <VisitLinkedIn />
            </div>
        </div>
    )
}

export default ContactSection;