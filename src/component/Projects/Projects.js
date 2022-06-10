/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.css";
import portfolio1 from "../../image/profolio1.png";
import portfolio2 from "../../image/portfolio2.png";
import portfolio3 from "../../image/portfolio-3.png";
import portfolio4 from "../../image/portfolio4.png";
import Slide from "react-reveal/Slide";
const Projects = () => {
  return (
    <div className="bg-black text-white py-8 " id="projects">
      <section class=" text-gray-800 mx-4 lg:mx-12 ">
        <h2 class="text-3xl font-bold mb-12 text-center text-white">
          My awesome <u class="text-pink-600 "> Projects</u>
        </h2>

        <div class="grid lg:grid-cols-3 gap-8">
          <Slide bottom>
            <ProjectItem
              img={portfolio1}
              title="Engineering Workshop"
              live=""
              server=""
              client=""
              details=""
            />
          </Slide>
          <Slide bottom>
            <ProjectItem
              img={portfolio2}
              title="And Shop"
              live=""
              server=""
              client=""
              details=""
            />
          </Slide>
          <Slide bottom>
            <ProjectItem
              img={portfolio3}
              title="Digital Hospital"
              live=""
              server=""
              client=""
              details=""
            />
          </Slide>
          <Slide bottom>
            <ProjectItem
              img={portfolio4}
              title="Logika Warehosuse"
              live=""
              server=""
              client=""
              details=""
            />
          </Slide>
          <Slide bottom>
            <ProjectItem
              img={portfolio2}
              title="And Shop"
              live=""
              server=""
              client=""
              details=""
            />
          </Slide>
          <Slide bottom>
            <ProjectItem
              img={portfolio3}
              title="Digital Hospital"
              live=""
              server=""
              client=""
              details=""
            />
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default Projects;
