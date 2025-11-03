import "./StackSection.css";
import VerticalTitle from "../../VerticalTitle/VerticalTitle";

import { ArrowUpRight } from 'lucide-react';

import { BiLogoJavascript } from 'react-icons/bi';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { BiLogoRedux } from 'react-icons/bi';
import { RiNextjsFill } from 'react-icons/ri';
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const StackSection = () => {

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting); // true när syns, false när lämnar
            },
            { threshold: 0.3 } // trigga när 20% syns
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);


    return (
        <div className="stack-section">
            <VerticalTitle text="Tech Stack" placement="right" />
            <div className="stack-content" ref={ref}>
                <div className="stack-icons">
                    <FaReact size={50} className={`icon delay-2 ${isVisible ? "visible" : ""}`} />
                    <BiLogoTypescript size={50} className={`icon delay-1 ${isVisible ? "visible" : ""}`} />
                    <BiLogoJavascript size={100} className="icon" />
                    <BiLogoRedux size={50} className={`icon delay-1 ${isVisible ? "visible" : ""}`} />
                    <RiNextjsFill size={50} className={`icon delay-2 ${isVisible ? "visible" : ""}`} />
                </div>
                <div className="stack-text">
                    <p>JavaScript (or TypeScript) and React are my preferred tools for web applications.</p>
                </div>
                <Link className={`linkToProjects ${isVisible ? "visible" : ""}`} to={"/portfolio"}>See my projects <span className="moveArrow"> <ArrowUpRight /> </span></Link>

            </div>
        </div>
    );
};

export default StackSection;