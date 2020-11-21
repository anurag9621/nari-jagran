import React from "react"
import { Link } from "react-router-dom";

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 200);
  });
  function togglesidebar() {
    document.getElementById("sidebar").classList.toggle("active");
  }

const menux = (props) => {
    return (
        <>
             <header>
        <ul>
          <li className="topo">
            <div className="toggle_btn" onClick={togglesidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </li>
          <li>
            <Link to={props.link1}> {props.name1} </Link>
          </li>
          <li>
            <Link to="/herright">HerRights</Link>
           
          </li>
          <li>
            <Link to="/herstory">HerStory</Link>
            
          </li>
          <li>
            <Link to="/news">InNews</Link>
            
          </li>
          <li>
            <Link to="/hercare">HerCare</Link>
           
          </li>
          <li>
            <Link to="/herhome">HerHome</Link>
            
          </li>
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </header>


            </>
    )
}

export default menux;