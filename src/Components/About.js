import React from "react"
import "./about.css"
import Nav from "./Nav"
//import Links from "./Links"

function About(){
    const two_stars = <div className="rating">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
    const three_stars = <div className="rating">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
    const one_star = <div className="rating">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
    return(
        <div className="About">
            <Nav/>
            <div className="content-about">
                <div className="intro">
                    <div>
                        <h2>Thank you for taking the time to veiw my Portfolio</h2>
                        <br/>
                        <p>
                            My name is Yusuf Keraan, I am 25 years old and I am an aspiring full stack developer. 
                            I am a hardworking individual who enjoys problem solving. The bigger the problem the greater the "Aha!"
                            moment and the more skilled you become once you understand said problem. My goal is to build valuable skills
                            in software developement, and then to sharpen them, and then to keep sharpening them, and also to build beautiful 
                            things along the way.
                        </p>
                        <hr/>
                        <p>
                            My ambition is to become a fullstack developer. I'm currently enrolled in a brilliant advanced 
                            <a style={{color:"#218c74"}} target="_blank" href="https://scrimba.com/g/greact"> React course </a>
                             on Scrimba which I would recomend to anyone. I've started learning the basics of Mongo DB and PHP, though I wouldn't go advertising 
                            myself as possessing those skills just yet. My intention is most certainly to aquire them in the near future.
                        </p>
                        <hr/>
                        <p>
                            My coding journey began in 2019 when I joined 
                            <a style={{color:"#218c74"}} target="_blank" href="https://www.lifechoices.co.za/academy"> Life Choices Academy </a> 
                            who, at the time, were partnered
                            with 
                            <a style={{color:"#218c74"}} target="_blank" href="https://www.cogrammar.com/s"> CoGrammar </a>
                            and 
                            <a style={{color:"#218c74"}} target="_blank" href="https://www.hyperiondev.com/"> Hyperion Developement </a>
                            . What they offered was a 6 month coding bootcamp where I learned
                            the basics of HTML CSS Javascript. Also included in the course was Python and frameworks such as node and Express.
                        </p>
                        
                    </div>
                    <div className="skills">
                        <h2>Skills</h2>
                        <br/>
                        <ul>
                            <li>HTML, CSS, & JavaScript</li>{three_stars}
                            <li>npm</li><div className="rating"></div>{three_stars}
                            <li>React</li><div className="rating"></div>{three_stars}
                            <li>Express</li><div className="rating"></div>{two_stars}
                            <li>Python</li><div className="rating"></div>{one_star}
                            <li>Mongo DB</li><div className="loader"></div>
                            <li>PHP</li><div className="loader"></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About