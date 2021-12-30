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

  return (
    <article>
      <div className="intro-container" id="home">
        <div>
          <h1>
            Olá, <br />
            Eu sou Pedro Leonardo <br />
            Web Developer
          </h1>
          {/* <h1>Eu sou Pedro Leonardo</h1> */}
          {/* <h1>Web Developer</h1> */}
          <button className="contactBtn">Contate-me</button>
        </div>
        <div>
          <img className="intro-img" src={photoUrl} alt="eu" />
        </div>
      </div>
    </article>
  );
}

export default Intro;
