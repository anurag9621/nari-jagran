import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../Image/logo2.png";

const Sidebarx = (props) => {
  function togglesidebar() {
    document.getElementById("sidebar").classList.toggle("active");
  }
  function togglesubmenu() {
    document.getElementById("sidesubbar").classList.toggle("show");
  }
  function togglesubmenua() {
    document.getElementById("sidesubbar1").classList.toggle("show");
  }
  function togglesubmenub() {
    document.getElementById("sidesubbar2").classList.toggle("show");
  }
  function togglesubmenuc() {
    document.getElementById("sidesubbar3").classList.toggle("show");
  }
  function togglesubmenud() {
    document.getElementById("sidesubbar4").classList.toggle("show");
  }
  function togglesubmenue() {
    document.getElementById("sidesubbar5").classList.toggle("show");
  }
  function togglesubmenuf() {
    document.getElementById("sidesubbar6").classList.toggle("show");
  }
  function togglesubmenug() {
    document.getElementById("sidesubbar7").classList.toggle("show");
  }
  return (
    <>
      <div className="outer-side0of-slider">
        <nav id="sidebar" className="sidebar-on">
          <div className="menu-open-toggle-btn">
            <div className="toggle-btn" onClick={togglesidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="logosidebar">
              <Link to={props.link1}>
                <img src={Logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="sidebar-dextop">
            <ul>
              <li
                style={{
                  display: "flex",
                  alignItems:"center"
                }}
              >
                <i className="fa fa-home " aria-hidden="true" ></i>
                <Link to={props.link1}>{props.name1}</Link>
              </li>
              <li onClick={togglesubmenu}>
                <div className="listone-of-them">
                  <i className="fa fa-gavel" aria-hidden="true"></i>
                  {props.name2}
                </div>
                <ul id="sidesubbar">
                  <li>
                    <Link to={props.link1}>{props.name2a}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name2b}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name2c}</Link>
                  </li>
                </ul>
              </li>
              <li onClick={togglesubmenua}>
                <div className="listone-of-them">
                  <i className="fa fa-book" aria-hidden="true"></i>
                  {props.name3}
                </div>
                <ul id="sidesubbar1">
                  <li>
                    <Link to={props.link1}>{props.name3a}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name3b}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name3c}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name3d}</Link>
                  </li>
                </ul>
              </li>
              <li onClick={togglesubmenub}>
                <div className="listone-of-them">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                  {props.name4}
                </div>
                <ul id="sidesubbar2">
                  <li>
                    <Link to={props.link1}>{props.name4a}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name4b}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name4c}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name4d}</Link>
                  </li>
                </ul>
              </li>
              <li onClick={togglesubmenuc}>
                <div className="listone-of-them">
                  <i className="fa fa-h-square" aria-hidden="true"></i>
                  {props.name9}
                </div>
                <ul id="sidesubbar3">
                  <li>
                    <Link to={props.link1}>{props.name9a}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name9b}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name9c}</Link>
                  </li>
                </ul>
              </li>
              <li onClick={togglesubmenud}>
                <div className="listone-of-them">
                  <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                  {props.name5}
                </div>
                <ul id="sidesubbar4" style={{}}>
                  <li>
                    <Link to={props.link1}>{props.name5a}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name5b}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name5c}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name5d}</Link>
                  </li>
                </ul>
              </li>
              <li onClick={togglesubmenue}>
                <div className="listone-of-them">
                  <i className="fa fa-book" aria-hidden="true"></i>
                  {props.name6}
                </div>
                <ul id="sidesubbar5">
                  <li>
                    <Link to={props.link1}>{props.name6a}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name6b}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name6c}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name6d}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name6e}</Link>
                  </li>
                </ul>
              </li>
              <li onClick={togglesubmenuf}>
                <div className="listone-of-them">
                  <i className="fa fa-book" aria-hidden="true"></i>
                  {props.name7}
                </div>
                <ul id="sidesubbar6">
                  <li>
                    <Link to={props.link1}>{props.name7a}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name7b}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name7c}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name7d}</Link>
                  </li>
                </ul>
              </li>
              <li onClick={togglesubmenug}>
                <div className="listone-of-them">
                  <i className="fa fa-book" aria-hidden="true"></i>
                  {props.name8}
                </div>
                <ul id="sidesubbar7">
                  <li>
                    <Link to={props.link1}>{props.name8a}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name8b}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name8c}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name8d}</Link>
                  </li>
                  <li>
                    <Link to={props.link1}>{props.name8e}</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebarx;
