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
      <section className="overflow-hidden py-12 text-gray-700 mx-4 lg:mx-12">
        <div className="container px-5 py-2 mx-auto">
          <h1 className="text-white text-5xl uppercase pb-16 lg-ml-8">
            {projectDetails[0].name}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={projectDetails[0].img}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={projectDetails[0].img1}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={projectDetails[0].img2}
                />
              </div>
            </div>
            <div className="bg-black">
              <div
                className=" text-gray-800 text-center md:text-left mx-4 lg:mx-12 border-none"
                id="about"
              >
                <div className="block rounded-lg">
                  <div className="flex flex-wrap items-center">
                    <div className="grow-0 shrink-0 basis-auto w-full">
                      <div className="pr-16">
                        <h2 className="text-3xl pt-8 text-white font-bold mb-3 pb-2 uppercase">
                          Technology Used
                        </h2>
                        <p className="text-white mb-1 text-sm">
                          Hi! I am Kakon, As a Web developer, I always have
                          enthusiasm and hunger for learning new technologies. I
                          am always ready to deliver my full potential to the
                          company I am committed.Code will be easy to
                          understand, Reusable components, Proper Comments
                        </p>
                        <p className="text-white mb-2 pb-2 text-sm">
                          Technologies Used in web application:
                        </p>
                        <div className="grid grid-cols-1 gap-3 mb-6 text-white">
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
                          className="inline-block px-7 py-2 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Live Link
                        </a>
                        <a
                          href={projectDetails[0].clientRepoLink}
                          target="_blank"
                          type="button"
                          className="inline-block px-7 m-2 py-2 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Client Code
                        </a>
                        <a
                          href={projectDetails[0].ServerRepoLink}
                          target="_blank"
                          type="button"
                          className="inline-block px-7 py-2 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
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
