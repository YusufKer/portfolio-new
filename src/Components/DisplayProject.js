import React from "react"

function DisplayProject(props){
    const {title,description,link,image} = props.project
    const {scroll} = props
    console.log(scroll)
    return(
        <div className="project-description">
            <h3>{title}</h3>
            <br/>
            <a href={link} rel="noopener noreferrer" target="_blank"><img width="600px" className="project-image" src={image} alt="picture of project"/></a>
            <p>{description}</p>
            <div className="change-project">
                <div onClick={()=>scroll("prev")} className="arrow" id="prev"></div><div onClick={()=>scroll("next")} className="arrow" id="next"></div>
            </div>
         </div>
    )
}

export default DisplayProject