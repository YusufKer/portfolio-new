import React,{useContext} from "react"

import {ShowContactContext} from "../showContactContext"
import {Link} from "react-router-dom"

function Nav(){
    const context = useContext(ShowContactContext)
    return(
        <div className="Nav">
            <Link style={{textDecoration:"none",color:"black"}} to="/">Home</Link>
            <Link style={{textDecoration:"none",color:"black"}} to="/about">About</Link>
            <Link style={{textDecoration:"none",color:"black"}} to="/projects">Projects</Link>
            <div onClick={context.toggleOn} style={{textDecoration:"none",color:"black",cursor:"pointer"}}>Contact</div>
        </div>
    )
}

export default Nav