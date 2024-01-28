import React,{useState} from "react";
import Home from "../Pages/Home";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew  } from "react-icons/md";
import "./SideBar.css";

const SideBar = () => {
    const [toggle, setToggle] = useState(false);

    //handle toggle
    const handleToggle = ()=>{
        console.log("toggled");
        setToggle(!toggle);
    }
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar": "sidebar sidebar-toggle"}>
          <div className="sidebar-toggle-icon">
            <p onClick={handleToggle}>
                {toggle? <MdOutlineArrowBackIosNew size={40} /> : <MdOutlineArrowForwardIos size={40} />}
            </p>
          </div>
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default SideBar;
