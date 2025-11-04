import "./Navbar.css";
import { Link } from "react-router-dom";

import { House, BriefcaseBusiness, AtSign } from 'lucide-react';
import LightDarkModeToggle from "../LightDarkModeToggle/LightDarkModeToggle";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    const iconSize = 20;

    const navitems = [
        { to: "/", icon: <House size={iconSize} />, label: "Home" },
        { to: "/portfolio", icon: <BriefcaseBusiness size={iconSize} />, label: "Portfolio" },
        { to: "/contact", icon: <AtSign size={iconSize} />, label: "Contact" },
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
            <h1>Logo</h1>
            <div className="nav-links">
                {navitems.map((item, index) => (
                    <Link key={index} to={item.to} className="nav-item">
                        <div className="link-wrapper">
                            {item.icon}
                            <span className="nav-item-label">{item.label}</span>
                        </div>
                    </Link>
                ))}
                <LightDarkModeToggle />
            </div>
        </nav>
    )
}

export default Navbar;