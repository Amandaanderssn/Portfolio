import "./StackSection.css";
import VerticalTitle from "../../VerticalTitle/VerticalTitle";

import { ArrowUpRight } from 'lucide-react';

import { BiLogoJavascript } from 'react-icons/bi';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { BiLogoRedux } from 'react-icons/bi';
import { RiNextjsFill } from 'react-icons/ri';
import { UseAnimationIfVisible } from "../../../hooks/UseAnimationIfVisible"

const StackSection = ({ onNavigate }) => {

    const [ref, isVisible] = UseAnimationIfVisible(0.3)


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
                <div className={`linkToProjects ${isVisible ? "visible" : ""}`} onClick={() => onNavigate("projects")}>See my projects <span className="moveArrow"> <ArrowUpRight /> </span></div>

            </div>
        </div>
    );
};

export default StackSection;