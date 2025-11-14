import "./Navbar.css";

import { House, BriefcaseBusiness, AtSign } from 'lucide-react';
import LightDarkModeToggle from "../components/LightDarkModeToggle/LightDarkModeToggle";
import { useEffect, useState } from "react";

const Navbar = ({ onNavigate }) => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    const iconSize = 20;

    const navitems = [
        { section: "hero", icon: <House size={iconSize} />, label: "Home" },
        { section: "projects", icon: <BriefcaseBusiness size={iconSize} />, label: "Projects" },
        { section: "contact", icon: <AtSign size={iconSize} />, label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // scrollar nedåt → göm navbar
            if (currentScrollY > lastScrollY && currentScrollY > 700) {
                setVisible(false);
            }
            // scrollar uppåt → visa navbar
            else if (currentScrollY < lastScrollY) {
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={visible ? "visible" : "hidden"}>
            <div className="nav-links">
                {navitems.map((item, index) => (
                    <div key={index} to={item.to} className="nav-item" onClick={() => onNavigate(item.section)}>
                        <div className="link-wrapper">
                            {item.icon}
                            <span className="nav-item-label">{item.label}</span>
                        </div>
                    </div>
                ))}
                <LightDarkModeToggle />
            </div>
        </nav>
    )
}

export default Navbar;