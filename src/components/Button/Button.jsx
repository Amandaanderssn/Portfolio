import "./Button.css"
import { useTheme } from "../../hooks/UseTheme";

const Button = ({ callback, isClicked, text }) => {
    const { theme } = useTheme()

    const lightOrDarkButton = theme === "dark" ? "darkCopyButton" : "lightCopyButton"

    return (
        <>
            <button className={`${lightOrDarkButton} ${isClicked ? "clicked" : ""}`} onClick={callback}>{text}</button>
        </>

    )
}

export default Button;