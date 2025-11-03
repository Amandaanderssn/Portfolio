import "./LightDarkModeToggle.css";
import { useTheme } from "../../hooks/UseTheme";
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

const LightDarkModeToggle = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className={`toggle ${theme === "dark" ? "darkMode" : "lightMode"}`}>
            <div className="icon">
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </div>
        </button>
    )
}

export default LightDarkModeToggle;