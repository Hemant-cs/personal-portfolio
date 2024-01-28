import React from "react";
import profilephoto from "../Assest/ProfilePic.jpg";
import "./StyleSheet/Menu.css";
import {
  FcAbout,
  FcAddressBook,
  FcBriefcase,
  FcDocument,
  FcEngineering,
  FcGraduationCap,
  FcHome,
} from "react-icons/fc";
import { SiAngellist } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";

const Menu = ({ toggle }) => {
  return (
    <>
      {!toggle ? (
        <>
          <div className="menu-sidebar-profile-pic">
            <img src={profilephoto} alt="Profile Photo"></img>
          </div>
          <div className="navbar-iteams">
            <div className="navbar-item">
              <FcHome />
              Home
            </div>
            <div className="navbar-item">
              <FcAbout />
              About
            </div>
            <div className="navbar-item">
              <FcBriefcase />
              Work Experience
            </div>
            <div className="navbar-item">
              <FcEngineering />
              Tech Stack
            </div>
            <div className="navbar-item">
              <FcGraduationCap />
              Education
            </div>
            <div className="navbar-item">
              <SiAngellist />
              Achievements
            </div>
            <div className="navbar-item">
              <FcDocument />
              Certifications
            </div>
            <div className="navbar-item">
              <FcAddressBook />
              Contact
            </div>
            <div className="navbar-item">
              <FaDownload />
              Resume Download
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-iteams">
            <div className="navbar-item">
              <FcHome title="Home" />
            </div>
            <div className="navbar-item">
              <FcAbout title="About" />
            </div>
            <div className="navbar-item">
              <FcBriefcase title="Work Experience" />
            </div>
            <div className="navbar-item">
              <FcEngineering title="Tech Stack" />
            </div>
            <div className="navbar-item">
              <FcGraduationCap title="Education" />
            </div>
            <div className="navbar-item">
              <SiAngellist title="Achievements" />
            </div>
            <div className="navbar-item">
              <FcDocument title="Certifications" />
            </div>
            <div className="navbar-item">
              <FcAddressBook title="Contact" />
            </div>
            <div className="navbar-item">
              <FaDownload title="Resume Download" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
