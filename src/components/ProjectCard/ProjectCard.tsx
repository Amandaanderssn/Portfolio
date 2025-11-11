import React from "react";
import "./ProjectCard.css"
import { ProjectCardProps } from "./ProjectCardTypes";
import { UseAnimationIfVisible } from "../../hooks/UseAnimationIfVisible";
import { useTheme } from "../../hooks/UseTheme";
import { ExternalLink } from 'lucide-react';

const ProjectCard = (props: ProjectCardProps): React.JSX.Element => {
    const { projects } = props

    // @ts-ignore
    const { theme } = useTheme()

    const stackColor =
        theme === "dark"
            ? "dark-stack"
            : "light-stack";

    const borderColor =
        theme === "dark"
            ? "dark-border"
            : "light-border"

    React.useEffect(() => {
        if (projects.length === 0) {
            return console.warn("no projects are provided")
        }
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {
                projects.map((project, index): any => {
                    const [ref, isVisible] = UseAnimationIfVisible(0.3);

                    return (
                        // @ts-ignore (added ignore since this is the only typescript file and the ref is not working otherwise)
                        <div className={`project-card-container fadeIn ${isVisible ? "visible" : ""} ${borderColor}`} key={index} ref={ref}>
                            <h4 className="project-number">0{index + 1} .</h4>
                            <div className="container-one">
                                <img className="project-img" src={project.imageUrl} onClick={() => window.open(`${project.deploydPage}`, "_blank")} title="visit deployed website" />
                                <div className="container-two">
                                    <h5 className="project-title">{project.title}</h5>
                                    <p>{project.description} </p>
                                    <div className="stacks-container">
                                        {project.stack.map((item, index) => {
                                            return (
                                                <p className={`stack ${stackColor}`} key={index}>{item}</p>
                                            )
                                        })}
                                    </div>
                                    <p className="project-link">{project.githubLink} <span className="moveIcon"><ExternalLink size={12} /></span></p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectCard;