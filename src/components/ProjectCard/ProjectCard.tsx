import React from "react";
import "./ProjectCard.css"
import { ProjectCardProps } from "./ProjectCardTypes";
import { UseAnimationIfVisible } from "../../hooks/UseAnimationIfVisible";

const ProjectCard = (props: ProjectCardProps): React.JSX.Element => {
    const { projects } = props

    // const [ref, isVisible] = UseAnimationIfVisible(0.1)
    console.log(projects)
    //Nästa steg är att göra en .map av projects för att man ska kunna skicka enkelt ändra i en config fil för vad som ska renderas.


    React.useEffect(() => {
        if (projects.length === 0) {
            return console.warn("no projects are provided")
        }
    }, [])
    return (
        <div>
            {
                projects.map((project, index): any => {
                    const [ref, isVisible] = UseAnimationIfVisible(0.3);

                    return (
                        // @ts-ignore (added ignore since this is the only typescript file and the ref is not working otherwise)
                        <div className={`project-card-container fadeIn ${isVisible ? "visible" : ""}`} key={index} ref={ref}>
                            <h4 className="project-number">0{index + 1} .</h4>
                            <div className="container-one">
                                <img className="project-img" src="/Images/WeatherApp.png" />
                                <div className="container-two">
                                    <h5>{project.title}</h5>
                                    <p>{project.description} </p>
                                    <div className="stack-container">
                                        {project.stack.map((item, index) => {
                                            return (
                                                <p key={index}>{item}</p>
                                            )
                                        })}
                                    </div>

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