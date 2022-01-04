import React, { useEffect } from "react";
import { photoUrl } from "../Data";
import $ from "jquery";

function Intro() {
  useEffect(() => {}, []);

  // Check if it's time to start the animation.

  // Capture scroll events
  // $(window).scroll(function () {
  //   checkAnimation();
  // });
  const scrollToContact = () => {
    var ele = document.getElementById("contato");
    window.scrollTo({ top: ele.offsetTop, behavior: "smooth" });
  };
  return (
    <article>
      <div className="intro-container" id="home">
        <div className="intro-title">
          <h1>Pedro Leonardo</h1>
          <h3>Web Developer</h3>
          {/* <h1>Eu sou Pedro Leonardo</h1> */}
          {/* <h1>Web Developer</h1> */}
          <button className="contactBtn" onClick={() => scrollToContact()}>
            Contate-me
          </button>
        </div>
        <div>
          <img className="intro-img" src={photoUrl} alt="eu" />
        </div>
      </div>
    </article>
  );
}

export default Intro;
