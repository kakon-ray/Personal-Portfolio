/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.css";

import Slide from "react-reveal/Slide";
import { useProjects } from "../../Context/UseProjects";

const Projects = () => {
  const [projects, setProjects] = useContext(useProjects);

  return (
    <div>
      <div
        className="dark:bg-black bg-white text-white py-8 py-24"
        id="projects"
      >
        <section class=" text-gray-800 mx-4 lg:mx-12 font-bold py-24">
          <h2 class="text-3xl font-bold mb-12 text-center uppercase dark:text-white text-gray-700">
            My awesome <u class="text-yellow-400 "> Projects</u>
          </h2>

          <div class="grid lg:grid-cols-3 gap-8">
            {projects?.map((data) => {
              return (
                <Slide bottom>
                  <ProjectItem
                    img={data.img}
                    title={data.name}
                    live={data.liveLink}
                    server={data.ServerRepoLink}
                    client={data.clientRepoLink}
                    details={data.description1}
                    id={data.id}
                  />
                </Slide>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
