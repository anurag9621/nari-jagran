import React, { Component } from "react";
import Logo from "../../../Image/logo.jpeg";

function togglesubmenua() {
  document.getElementById("sidesubbar0").classList.toggle("show");
}
function togglesubmenuaa() {
  document.getElementById("sidesubbar10").classList.toggle("show");
}
function togglesubmenuba() {
  document.getElementById("sidesubbar20").classList.toggle("show");
}
function togglesubmenuca() {
  document.getElementById("sidesubbar30").classList.toggle("show");
}
function togglesubmenuda() {
  document.getElementById("sidesubbar40").classList.toggle("show");
}
function togglesubmenuea() {
  document.getElementById("sidesubbar50").classList.toggle("show");
}
function togglesubmenufa() {
  document.getElementById("sidesubbar60").classList.toggle("show");
}
function togglesubmenuga() {
  document.getElementById("sidesubbar70").classList.toggle("show");
}


export class Footer extends Component {
  render() {
    return (
      <>
        <div className="end">
          <div className="endtop">
            <a href="/">
              <img src={Logo} alt="/" />
            </a>
            <div className="endcontacttop">
              <a href="./page/contact_us.html">Contact Us</a>|
              <a href="./page/podcast.html">Podcast</a>|
              <a href="./page/correction.html">Correction</a>
            </div>
          </div>
          <dev className="endmenumobile-onon sidebar-on" >
            <ul>
              <li onClick={togglesubmenua}>
                <i className="fa fa-gavel" aria-hidden="true"></i> HerRights
                <ul id="sidesubbar0">
                  <li>
                    <a href="/ n.news.html">Know Your Rights</a>
                  </li>
                  <li>
                    <a href="/">Child Rights</a>
                  </li>
                  <li>
                    <a href="/">Complain To NCW</a>
                  </li>
                </ul>
              </li>
              <li onClick={togglesubmenuaa}>
                <i className="fa fa-book" aria-hidden="true"></i> HerStory
                <ul id="sidesubbar10">
                  <li>
                    <a href="/">Artical</a>
                  </li>
                  <li>
                    <a href="/">Biography</a>
                  </li>
                  <li>
                    <a href="/">Interviews</a>
                  </li>
                  <li>
                    <a href="/">Share With Us</a>
                  </li>
                </ul>
              </li>
              <li onClick={togglesubmenuba}>
                <i className="fa fa-heart" aria-hidden="true"></i> HerCare
                <ul id="sidesubbar20">
                  <li>
                    <a href="/">Fitness Tips</a>
                  </li>
                  <li>
                    <a href="/">Skin Care</a>
                  </li>
                  <li>
                    <a href="/">Hair Care</a>
                  </li>
                  <li>
                    <a href="/">Beauty Tips</a>
                  </li>
                </ul>
              </li>
              <li onClick={togglesubmenuca}>
                <i className="fa fa-h-square" aria-hidden="true">
                  {" "}
                </i>{" "}
                HerHealth
                <ul id="sidesubbar30">
                  <li>
                    <a href="/">Ayurveda</a>
                  </li>
                  <li>
                    <a href="/">Yoga</a>
                  </li>
                  <li>
                    <a href="/">Mental Wellness</a>
                  </li>
                 
                </ul>
              </li>
              <li onClick={togglesubmenuda}>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i> InNews
                <ul id="sidesubbar40">
                  <li>
                    <a href="/">Daily News</a>
                  </li>
                  <li>
                    <a href="/">Opinion</a>
                  </li>
                  <li>
                    <a href="/">OP-ED Column</a>
                  </li>
                  <li>
                    <a href="/">Contributors</a>
                  </li>
                </ul>
              </li>
              <li onClick={togglesubmenuea}>
                <i className="fa fa-globe" aria-hidden="true"></i> Art & Culture
                <ul id="sidesubbar50">
                  <li>
                    <a href="/">Indian Culture</a>
                  </li>
                  <li>
                    <a href="/">Movies</a>
                  </li>
                  <li>
                    <a href="/">Books</a>
                  </li>
                  <li>
                    <a href="/">Television</a>
                  </li>
                  <li>
                    <a href="/">Travel India</a>
                  </li>
                </ul>
              </li>
              <li onClick={togglesubmenufa}>
                <i className="fa fa-tree" aria-hidden="true"></i> HerHome
                <ul id="sidesubbar60">
                  <li>
                    <a href="/">Food Recipe</a>
                  </li>
                  <li>
                    <a href="/">Home Decor</a>
                  </li>
                  <li>
                    <a href="/">Family Care</a>
                  </li>
                  <li>
                    <a href="/">Gardening</a>
                  </li>
                </ul>
              </li>
              <li onClick={togglesubmenuga}>
                <i className="fa fa-list-alt" aria-hidden="true"></i> Acumen
                Others
                <ul id="sidesubbar70">
                  <li>
                    <a href="/">Know The Loan</a>
                  </li>
                  <li>
                    <a href="/">Startup</a>
                  </li>
                  <li>
                    <a href="/">How To Start Business</a>
                  </li>
                  <li>
                    <a href="/">Government Schemess</a>
                  </li>
                  <li>
                    <a href="/">Correctiions</a>
                  </li>
                </ul>
              </li>
            </ul>
          </dev>

          <div className="endbox">
            <ul>
              <a href="/herright">
                <h3>HerRight</h3>
              </a>
              <li>
                <a href="/">Know Your Rights</a>
              </li>
              <li>
                <a href="/">Child Right</a>
              </li>
              <li>
                <a href="/">Articles</a>
              </li>
            </ul>
            <ul>
              <a href="/herstory">
                <h3>HerStory</h3>
              </a>
              <li>
                <a href="/">Article</a>
              </li>
              <li>
                <a href="/">Biography</a>
              </li>
              <li>
                <a href="/">Interview</a>
              </li>
              <li>
                <a href="/">Share With Us</a>
              </li>
            </ul>
            <ul>
              <a href="/herhealth">
                <h3>HerHealth</h3>
              </a>
              <li>
                <a href="/">Fitness Tips</a>
              </li>
              <li>
                <a href="/">Ayurveda</a>
              </li>
              <li>
                <a href="/">Yoga</a>
              </li>
              <li>
                <a href="/">Mental Wellness</a>
              </li>
              <li>
                <a href="/">Ask Doctor</a>
              </li>
            </ul>
            <ul>
              <a href="/news">
                <h3>InNews</h3>
              </a>
              <li>
                <a href="/">Daily News</a>
              </li>
              <li>
                <a href="/">Opinion</a>
              </li>
            </ul>
            <ul>
              <a href="/art">
                <h3>Art & Culture</h3>
              </a>
              <li>
                <a href="/">Indian Culture</a>
              </li>
              <li>
                <a href="/">Movies</a>
              </li>
              <li>
                <a href="/book">Books</a>
              </li>
              <li>
                <a href="/">Television</a>
              </li>
              <li>
                <a href="/">Yatra</a>
              </li>
            </ul>
            <ul>
              <a href="/herhome">
                <h3>HerHome</h3>
              </a>
              <li>
                <a href="/">Food Recipe</a>
              </li>
              <li>
                <a href="/">Home Decor</a>
              </li>
              <li>
                <a href="/">Family Care</a>
              </li>
              <li>
                <a href="/">Gardening</a>
              </li>
            </ul>
            <a href="/" className="pol">
              StartUp
            </a>
            <a href="/" className="pol">
              Government Schemes
            </a>
            <a href="/" className="pol">
              Environment
            </a>
            <a href="/" className="pol">
              Horoscope
            </a>
            <a href="/" className="pol">
              Poetry
            </a>
            <a href="/" className="pol">
              Tech & Gadgets
            </a>
            <a href="/" className="pol">
              Career
            </a>
          </div>

          <div className="conditionterm">
            <a href="/">Terms Of Use</a>
            |
            <a href="/">Privacy Policy</a>
            |
            <a href="/">Advertise With Us</a>
            |
            <a href="/">About Us</a>
          </div>
          <h5 className="copyright_things">Copyright © 2020 Nari Jagran. All Rights Reserved</h5>
          <h5  className="copyright_things"><a href="https://www.instagram.com/___mr_aaru___?r=nametag">Powered by A.P</a></h5>
        </div>
      </>
    );
  }
}

export default Footer;
