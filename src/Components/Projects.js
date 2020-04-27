import React,{useState} from "react"
import "./projects.css"
import Nav from "./Nav"
import projectsData from "../projectsData"
import DisplayProject from "./DisplayProject"


function Projects(){
    const [project, setProject] = useState(projectsData[0])
    const changeDisplayedProject = (index) =>{
        setProject(projectsData[index])
    }
    const scrollDisplayedProject = (instruction) =>{
        const index = projectsData.indexOf(project)
        if (instruction === "next" && index !== projectsData.length - 1) return setProject(projectsData[index + 1])
        if (instruction === "prev" && index !== 0) return setProject(projectsData[index - 1])
    }
    const projectsList = projectsData.map((project,i) => <li className="project-list-item" onClick={()=> changeDisplayedProject(i)}>{project.title}</li>)
    return(
        <div className="Projects">
            <Nav/>
            <div className="content-projects">
                <h2>These are some projects I've done</h2>
                <br/>
                <p>
                    I've'arranged them according to date. Hopefully this will give you an idea of how I've progressed
                    over the past year.
                </p>
                <hr/>
                <div className="projects">
                    <ul style={{cursor:"pointer"}}>
                        <h2 style={{cursor:"default"}}>Projects</h2>
                        {projectsList}
                        <hr/>
                        <p style={{cursor:"default"}}>Note: To open the project, Click on the image.</p>
                    </ul>
                    <DisplayProject scroll={scrollDisplayedProject} project={project}/>
                </div>
                
            </div>
        </div>
    )
}

export default Projects