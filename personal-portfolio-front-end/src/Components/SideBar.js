import React,{useState} from "react";
import Home from "../Pages/Home/Home";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew  } from "react-icons/md";
import "./StyleSheet/SideBar.css";
import Menu from "./Menu";

const SideBar = () => {
    const [toggle, setToggle] = useState(true);

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
                {toggle? <MdOutlineArrowForwardIos size={40} /> : <MdOutlineArrowBackIosNew size={40} /> }
            </p>
          </div>
            <Menu toggle = {toggle}/>
        </div>
        <div className="container">
          <Home toggle={toggle}/>
        </div>
      </div>
    </>
  );
};

export default SideBar;
