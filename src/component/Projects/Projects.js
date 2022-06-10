/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.css";

import Slide from "react-reveal/Slide";
import { useProjects } from "../../Context/UseProjects";

const Projects = () => {
  const [projects, setProjects] = useContext(useProjects);

  return (
    <div className="bg-black text-white py-8 " id="projects">
      <section class=" text-gray-800 mx-4 lg:mx-12 ">
        <h2 class="text-3xl font-bold mb-12 text-center text-white">
          My awesome <u class="text-pink-600 "> Projects</u>
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
  );
};

export default Projects;
