import React from "react";
import { technologiesIcon } from "../Data";

function Technologies() {
  return (
    <article className="technologies-container" id="tecnologias">
      <div className="about-title">
        <h2>Tecnologias</h2>
        <div className="underline"></div>
      </div>
      <section className="technologies-cards">
        {technologiesIcon.map((tech) => {
          const { id, title, url } = tech;
          return (
            <section key={id}>
              <img className="technologies-img" src={url} alt={title} />
              <h4>{title}</h4>
            </section>
          );
        })}
      </section>
    </article>
  );
}

export default Technologies;
