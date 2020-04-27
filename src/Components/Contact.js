import React,{useContext} from "react"

import {ShowContactContext} from "../showContactContext"

function Contact(){
    const context = useContext(ShowContactContext)
    return(
        <div className="Contact">
            <div className={`info${context.on?"-active":''}`}>
                <h2 className='name'>Yusuf Keraan</h2>
                <a className="link" rel="noopener noreferrer" target="_blank" href="https://github.com/YusufKer"><pre>github: YusufKer</pre></a>
                <a className="link" rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/yusuf-keraan-b962289a'><pre>Linked In: Yusuf Keraan</pre></a>
                <pre>Email: yus.ker1994@gmail.com</pre>
                <pre>cell:  078 153 9093</pre> 
                <button className="btn btn-primary" onClick={()=>context.toggleOn()}>Got it</button>
            </div>
            <div>{/*Thank You message goes here*/}</div>

        </div>
    )
}

export default Contact

//<button type="button" class="btn btn-info">Info</button>