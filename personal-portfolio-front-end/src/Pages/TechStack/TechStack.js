import React from "react";
import "./TechStack.css";
import { TechStackList } from "../../Utils/TechStackList";

const TechStack = () => {
  return (
    <>
      <div className="tech-stack">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Technology Stack</h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Including programming Languages, Frameworks, Databases, Front-end
          and Back-end, APIs
        </p>
        <div className="row">
          {TechStackList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
