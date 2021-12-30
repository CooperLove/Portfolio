import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import { links, social } from "./Data.js";
import { FaBars } from "react-icons/fa";
import Intro from "./components/Intro";
import ReactDOM from "react-dom";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect();
    linksContainerRef.current.style.height = showLinks
      ? `${linkHeight.height}px`
      : "0px";
  }, [showLinks]);

  const scrollToRef = (id) => {
    var ele = document.getElementById(id);
    window.scrollTo({ top: ele.offsetTop, behavior: "smooth" });
  };

  return (
    <nav>
      <div className="nav-center" id="navHome">
        <div className="nav-header">
          {/* <img src={logo} alt="logo" /> */}
          <h3>Pedro Leonardo</h3>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id} onClick={() => scrollToRef(text)}>
                  <button>{text}</button>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialMedia) => {
            const { id, url, icon } = socialMedia;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
