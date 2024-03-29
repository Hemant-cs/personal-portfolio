import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../Assest/HemantResume_1610.pdf"

const Home = ({ toggle }) => {
  return (
    <>
      <div
        className={
          toggle
            ? "container-fluid home-container"
            : "container-fluid home-container-toggle"
        }
      >
        <div className="container home-content">
          <h2>Hi👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "JavaScript Developer!",
                  "ReactJS Developer!",
                  "NodeJS Developer!",
                  "AWS!",
                  "AWS Lambda!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div className="home-btn">
          <button className="btn btn-hire">Hire Me</button>
          <a href={Resume} download="Hemant_Resume.pdf" className="btn btn-resume">Download Resume</a>
        </div>
      </div>
    </>
  );
};

export default Home;
