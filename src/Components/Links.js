import React from "react"

import gitlogo from "../Images/GitHub_Logo.png"
import linkIn from "../Images/LI-Logo.png"

function Links(){
    return(
        <div className="Links">
            <img src={gitlogo} width="100%" alt="GitHub"/>
            <img src={linkIn} width="100%" alt="Linked In"/>
        </div>
    )
}

export default Links