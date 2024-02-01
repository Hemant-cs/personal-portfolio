import React from "react";
import ProfilePic from "../../Assest/ProfilePic.jpg"
import "./About.css"

const About = ()=>{
    return(
        <>
            <div className="about">
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 profile-pic">
                        <img src={ProfilePic} alt="profile_pic" />
                    </div>
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                        <h1>About Me</h1>
                        <p>Self-motivated IT professional with knowledge and proficiency in ReactJS, 
NodeJS and AWS. As well as highly potent skills and ability in encoding bug free and efficient code, seeks the position of MERN Web Developer.</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default About