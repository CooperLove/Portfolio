import React, { useState, useLayoutEffect, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../Data";

function Projects() {
  const [height, setHeight] = useState(0);
  var elem;
  window.onload = function () {
    elem = document.getElementById("cardsContainer");
    setHeight(elem.scrollHeight);
    console.log(height, elem.scrollHeight);
  };

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, elem.scrollHeight]);
      }
      window.addEventListener("resize", updateSize);
      elem = document.getElementById("cardsContainer");
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    // console.log(size, elem);
    return size;
  }
  const [width, h] = useWindowSize();
  useEffect(() => {
    const elem = document.getElementById("cardsContainer");
    elem.style.height = elem.scrollHeight;
    // console.log(elem.style.height);
  }, [h]);
  return (
    <article
      className="projects-container"
      id="projetos"
      data-aos="fade"
      data-aos-duration={2000}
      style={{ height: 200 + h + "px" }}
    >
      <div className="about-title">
        <h2>Projetos</h2>
        <div className="underline"></div>
      </div>
      <div className="cards-container" id="cardsContainer">
        {projects.map((project) => {
          const { id, title, img, desc, url, dataAos, delay } = project;

          return (
            <div
              key={id}
              className="project-card"
              data-aos={dataAos}
              data-aos-delay={delay}
            >
              <h4>{title}</h4>
              <a href={url} target="_blank" rel="noreferrer">
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
