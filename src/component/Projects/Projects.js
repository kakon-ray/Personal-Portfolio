/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.css";

import Slide from "react-reveal/Slide";
import { useProjects } from "../../Context/UseProjects";

const Projects = () => {
  const [projects, setProjects] = useContext(useProjects);

  var sectionStyle = {
    width: "100%",
    backgroundAttachment: "fixed",
    backgroundImage: `url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80")`,
  };
  return (
    <div style={sectionStyle}>
      <div className="bg-black-background text-white py-8 pt-40 " id="projects">
        <section class=" text-gray-800 mx-4 lg:mx-12 ">
          <h2 class="text-3xl font-bold mb-12 text-center uppercase text-white">
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
