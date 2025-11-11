import { UseAnimationIfVisible } from "../../../hooks/UseAnimationIfVisible";
import ProjectCard from "../../ProjectCard/ProjectCard";
import "./ProjectSection.css"

const Projects = [
    {
        title: "weather app",
        description: "some description of my app",
        stack: ["Typescript", "React", "Redux", "Luxon"],
        imageUrl: "/Images/WeatherApp.png",
        deploydPage: "https://amandasweathrapp.netlify.app",
        githubLink: "https://github.com/Amandaanderssn/weather-app"
    },
    {
        title: "mine sweeper game",
        description: "some description of my app",
        stack: ["Javascript", "React"],
        imageUrl: "/Images/MineSweeper.png",
        deploydPage: "https://my-minesweeper-game.netlify.app",
        githubLink: "https://github.com/Amandaanderssn/Mine-sweeper"
    },
    {
        title: "DrinkedIn",
        description: "some description of my app",
        stack: ["Typescript", "React", "Redux", "React-router"],
        imageUrl: "/Images/DrinkedIn.png",
        deploydPage: "https://final-school-project.netlify.app",
        githubLink: "https://github.com/Amandaanderssn/examens-arbete"
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