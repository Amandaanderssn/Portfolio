import "./Navbar.css";
import { Link } from "react-router-dom";

import { House, BriefcaseBusiness, AtSign } from 'lucide-react';
import LightDarkModeToggle from "../LightDarkModeToggle/LightDarkModeToggle";

const Navbar = () => {
    const iconSize = 20;

    const navitems = [
        { to: "/", icon: <House size={iconSize} />, label: "Home" },
        { to: "/portfolio", icon: <BriefcaseBusiness size={iconSize} />, label: "Portfolio" },
        { to: "/contact", icon: <AtSign size={iconSize} />, label: "Contact" },
    ];

    return (
        <nav>
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