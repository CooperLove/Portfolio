import React from "react";
import { photoUrl } from "../Data";

function About() {
  return (
    <article className="about-container" id="about">
      <div className="about-title">
        <h2>Sobre</h2>
        <div className="underline"></div>
      </div>
      <div className="about-content-container">
        <img className="about-img" src={photoUrl} alt="foto do autor" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate
          nobis obcaecati inventore consequatur accusantium iusto iure.
          Perspiciatis nihil ad repudiandae nesciunt suscipit pariatur
          repellendus voluptatum odit, eius ullam sunt similique vel sint, iusto
          debitis omnis autem impedit facilis. Soluta veritatis aliquid
          consequatur architecto ut quidem non unde error nihil.
        </p>
      </div>
    </article>
  );
}

export default About;
