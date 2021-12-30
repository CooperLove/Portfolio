import React from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../Data";

function Projects() {
  return (
    <article className="projects-container" id="projects">
      <div className="about-title">
        <h2>Projetos</h2>
        <div className="underline"></div>
      </div>
      <div className="cards-container">
        {projects.map((project) => {
          const { id, title, img, desc, url } = project;

          return (
            <div key={id} className="project-card">
              <h4>{title}</h4>
              <a href={url} target="_blank">
                <img className="project-card image" src={img} alt={title} />
              </a>
              <p>{desc}</p>
            </div>
          );
        })}

        <button className="contactBtn">
          <a className="btnRef" href="https://github.com/cooperlove">
            <FaGithub className="icon" />
            GitHub
          </a>
        </button>
      </div>
    </article>
  );
}

export default Projects;
