import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import logoBKU from "../assets/logo.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBar } from "./SideBar";
import "./NavBar.css";

function NavBar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <>
      <IconContext.Provider value={{ color: "#323842FF" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "menu-icon" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <img src={logoBKU} alt="" className="logo" />

              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <span className="app-name" style={{marginLeft:"0px"}}>UWC</span>
              </Link>

              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideBar.map((item, index) => {
              return (
                <li key={index} className={item.class_name}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
