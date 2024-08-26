/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { data } from "autoprefixer";
import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ img, title, live, server, client, details, id }) => {
  return (
    <section className="shadow-sm shadow-pink-600 pb-4 dark:hover:shadow-white hover:shadow-yellow-500 transition delay-150  rounded-top container  text-center">
      <div
        className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover project-item"
        style={{ backgroundPosition: "50%" }}
        data-mdb-ripple="true"
        data-mdb-ripple-color="dark"
      >
        <img
          src={img}
          style={{ height: "300px" }}
          className="w-full transition duration-300 ease-linear align-middle image"
        />
        <Link to={`/details/${id}`}>
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <div className="overlay flex flex-col justify-center items-center">
              <h5 className="text-xl text-center font-bold text-white m-2">
                {details}
              </h5>
              <a
                href="https://engineering-workshop-a0bd0.web.app/"
                target="_blank"
                type="button"
                className="inline-block px-6 my-2 py-2 bg-color text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg transition duration-150 ease-in-out"
              >
                Details
              </a>
            </div>
          </div>
          <div className="hover-overlay">
            <div
              className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
              style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
            ></div>
          </div>
        </Link>
      </div>
      <div>
        <h1 className="text-2xl text-cener dark:text-white text-gray-700 pt-6">
          {title}
        </h1>
      </div>
      <div className="flex justify-center py-5 gap-1">

        <a
          href={live}
          target="_blank"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          type="button"
          className="inline-block px-6 my-1 py-3 bg-color text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-pink-800 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Live Link
        </a>
        {client ? <a
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href={client}
          target="_blank"
          type="button"
          className="inline-block px-6 my-1 mx-1 py-3 bg-color text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-pink-800 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Client Code
        </a> : <a
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="https://github.com/kakon-ray?tab=repositories"
          target="_blank"
          type="button"
          className="inline-block px-6 my-1 mx-1 py-3 bg-color text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-pink-800 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Private Repo
        </a>}

        {
          server ? <a
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href={server}
            target="_blank"
            type="button"
            className="inline-block px-6 my-1 py-3 bg-color text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-pink-800 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Server Code
          </a> : <a
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="https://github.com/kakon-ray?tab=repositories"
          target="_blank"
          type="button"
          className="inline-block px-6 my-1 mx-1 py-3 bg-color text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-pink-800 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Private Repo
        </a>
        }

      </div>
    </section>
  );
};

export default ProjectItem;
