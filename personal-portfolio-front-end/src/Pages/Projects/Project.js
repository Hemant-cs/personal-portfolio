import React from "react";
import "./Project.css";
import {TopProject} from "../../Utils/TopProject";
const Project = () => {
  return (
    <>
      <div className="container project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here are my top 3 recent project with source code
        </p>
        <div className="row" id="ads">
        {TopProject.map(project=>(<div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">{project.type}</span>
                        <img src={project.img} alt="project"></img>
                    </div>
                    <div className="card-image-overly">
                    {project.techUsed.map(techName=><span className="card-detail-badge">{techName}</span>)}
                    </div>
                    <div className="card-body">
                        <div className="ad-title">
                            <h5 className="text-uppercase">{project.name}</h5>
                        </div>
                    </div>
                    <a className="ad-btn" href={project.sourceCodeLink}>View</a>
                </div>
            </div>))}
        </div>
      </div>
    </>
  );
};

export default Project;
