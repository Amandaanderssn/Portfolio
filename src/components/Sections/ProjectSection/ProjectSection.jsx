import { UseAnimationIfVisible } from "../../../hooks/UseAnimationIfVisible";
import ProjectCard from "../../ProjectCard/ProjectCard";
import "./ProjectSection.css"

const Projects = [
    {
        title: "weather app",
        description: "some description of my app",
        stack: ["Typescript", "React", "Redux", "Luxon"],
        imageUrl: "/Images/WeatherApp.png"
    },
    {
        title: "weather app",
        description: "some description of my app",
        stack: ["Typescript", "React", "Redux", "Luxon"],
        imageUrl: "/Images/WeatherApp.png"
    },
]

const ProjectSection = () => {
    const [ref, isVisible] = UseAnimationIfVisible(0.1)

    return (
        <div className="projects-section" ref={ref}>
            <h2 style={{ textAlign: "center", fontSize: "3rem" }} className={`projects-title  fadeIn ${isVisible ? "visible" : ""}`}>PROJECTS</h2>
            <ProjectCard projects={Projects} />
        </div>
    )
}

export default ProjectSection;