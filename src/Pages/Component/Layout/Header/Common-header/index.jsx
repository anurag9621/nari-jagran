import React from "react"
import Logo from "../../../../Image/logo2.png"
// TIME CODE TIME CODE
const a = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const date = a.toLocaleDateString(undefined, options);

const Topc = (props) => {
    function togglesidebarr() {
      document.getElementById("sidebar").classList.toggle("active");
    }
    return (
      <>
        <div className="tbtb">
        <div className="toggle-btn" onClick={togglesidebarr}>
            <span className="jan"></span>
            <span className="jan"></span>
            <span className="jan aman"></span>
          </div>
          <div className="top">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
            <p>{date}</p>
          </div>
        </div>
      </>
    );
  }
  
  export default Topc;