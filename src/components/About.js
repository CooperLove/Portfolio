import React, { useState, useEffect } from "react";
import { photoUrl, useWindowSize } from "../Data";

function About() {
  const [anchor, setAnchor] = useState("#cv");
  useEffect(() => {
    setAnchor(window.innerWidth < 720 ? ".about-img" : "#cv");
  }, [window.innerWidth]);
  const [w, h] = useWindowSize("aboutContent");
  useEffect(() => {
    const elem = document.getElementById("aboutContent");
    elem.style.height = elem.scrollHeight;
    console.log(elem.style.height);
  }, [h]);
  return (
    <article
      className="panel about-container"
      id="sobre"
      data-aos="fade-down"
      data-aos-anchor={anchor}
      // data-aos-mirror={true}
      // data-aos-once="true"
      style={{ height: 200 + h + "px" }}
    >
      <div className="about-title">
        <h2>Sobre</h2>
        <div className="underline"></div>
      </div>
      <div className="about-content-container" id="aboutContent">
        <img
          className="about-img"
          src={photoUrl}
          alt="foto do autor"
          data-aos="flip-right"
        />
        <section className="about-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            voluptate nobis obcaecati inventore consequatur accusantium iusto
            iure. Perspiciatis nihil ad repudiandae nesciunt suscipit pariatur
            repellendus voluptatum odit, eius ullam sunt similique vel sint,
            iusto debitis omnis autem impedit facilis. Soluta veritatis aliquid
            consequatur architecto ut quidem non unde error nihil.
          </p>
          <a
            href="https://drive.google.com/file/d/1_fUxJqSg05qFAP_Pgl99dFHQLtRjEJgu/view?usp=sharing"
            download="curriculoPedro"
            target="_blank"
            rel="noreferrer"
          >
            <button id="cv" className="contactBtn">
              Download CV
            </button>
          </a>
        </section>
      </div>
    </article>
  );
}

export default About;
