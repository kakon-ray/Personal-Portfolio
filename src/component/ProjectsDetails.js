/* eslint-disable react/jsx-no-target-blank */
import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { useParams } from "react-router-dom";
import { useProjects } from "../Context/UseProjects";
import AboutMe from "./AboutMe/AboutMe";
import SkillIcon from "./AboutMe/SkillIcon";

const ProjectsDetails = () => {
  const [projects, setProjects] = useContext(useProjects);
  const { id } = useParams();
  const projectDetails = projects.filter((item) => item.id == id);

  console.log(projectDetails[0].name);
  return (
    <div className="bg-black">
      <section class="overflow-hidden py-12 text-gray-700 mx-4 lg:mx-12">
        <div class="container px-5 py-2 mx-auto">
          <h1 className="text-white text-6xl pb-16 lg-ml-8">
            {projectDetails[0].name}
          </h1>
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="flex flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={projectDetails[0].img}
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={projectDetails[0].img1}
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={projectDetails[0].img2}
                />
              </div>
            </div>
            <div className="bg-black">
              <div
                class=" text-gray-800 text-center md:text-left mx-4 lg:mx-12 border-none"
                id="about"
              >
                <div class="block rounded-lg">
                  <div class="flex flex-wrap items-center">
                    <div class="grow-0 shrink-0 basis-auto w-full">
                      <div class="pr-16">
                        <h2 class="text-3xl pt-8 text-white font-bold mb-3 pb-2 uppercase">
                          Technology Used
                        </h2>
                        <p class="text-white mb-1 text-sm">
                          Hi! I am Kakon, As a Web developer, I always have
                          enthusiasm and hunger for learning new technologies. I
                          am always ready to deliver my full potential to the
                          company I am committed.Code will be easy to
                          understand, Reusable components, Proper Comments
                        </p>
                        <p class="text-white mb-2 pb-2 text-sm">
                          Technologies Used in web application:
                        </p>
                        <div class="grid grid-cols-1 gap-3 mb-6 text-white">
                          <SkillIcon
                            title={projectDetails[0].description1}
                          ></SkillIcon>
                          <SkillIcon
                            title={projectDetails[0].description2}
                          ></SkillIcon>
                          <SkillIcon
                            title={projectDetails[0].description3}
                          ></SkillIcon>
                        </div>
                        <a
                          href={projectDetails[0].liveLink}
                          target="_blank"
                          type="button"
                          class="inline-block px-7 py-2 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Live Link
                        </a>
                        <a
                          href={projectDetails[0].clientRepoLink}
                          target="_blank"
                          type="button"
                          class="inline-block px-7 m-2 py-2 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Client Code
                        </a>
                        <a
                          href={projectDetails[0].ServerRepoLink}
                          target="_blank"
                          type="button"
                          class="inline-block px-7 py-2 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Server Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsDetails;
