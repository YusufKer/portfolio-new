import React,{useContext} from "react"

import {Link} from "react-router-dom"

import gitlogo from "../Images/GitHub_Logo.png"
import linkIn from "../Images/LI-Logo.png"
import {ShowContactContext} from "../showContactContext"

function Home(){
    const {toggleOn} = useContext(ShowContactContext)
    const style = {
        textDecoration:"none",
        fontSize:"1.3em",
        cursor:"pointer"}
    return(
        <div className="Homepage">
            <div className="homepage_inner">
            <h1>Yusuf Keraan</h1>
            <div className="nav-bar-home">
                <Link style={style} to="/about"><div className="home-nav-button">About</div></Link>
                <Link style={style} to="/projects"><div className="home-nav-button">Projects</div></Link>
                <div style={style} onClick={()=>toggleOn()} className="home-nav-button">Contact</div>
            </div>
            <div className="external-links">
                <a target="blank" href="https://github.com/YusufKer"><img src={gitlogo} height="25px" alt="git-hub"/></a>
                <a target="blank" href="https://www.linkedin.com/in/yusuf-keraan-b962289a"><img src={linkIn} height="25px "alt="linked-in"/></a>
            </div>
            </div>
        </div>
    )
}
//
export default Home