import "./VerticalTitle.css";

const VerticalTitle = ({ text, placement }) => {

    let titleRotation = "";

    if (placement === "right") {
        titleRotation = "rotate(360deg)";
    } else {
        titleRotation = "rotate(180deg)";
    }

    return (
        <h2 className="title" style={{ transform: titleRotation }}>{text}</h2>
    );
};

export default VerticalTitle;   