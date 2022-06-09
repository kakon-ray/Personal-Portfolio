/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const ProjectItem = ({ img, title }) => {
  return (
    <section className="shadow-lg shadow-pink-600 pb-4 hover:shadow-white transition delay-150  rounded-top  text-center">
      <div
        class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover project-item container"
        style={{ backgroundPosition: "50%" }}
        data-mdb-ripple="true"
        data-mdb-ripple-color="dark"
      >
        <img
          src={img}
          class="w-full transition duration-300 ease-linear align-middle image"
        />
        <a href="#!">
          <div
            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <div class="overlay flex justify-center items-center">
              <h5 class="text-3xl text-center font-bold text-white m-6">
                {title}
              </h5>
            </div>
          </div>
          <div class="hover-overlay">
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
              style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
            ></div>
          </div>
        </a>
      </div>
      <div>
        <h1 className="text-xl text-cener text-white pt-6">
          Engineering Workshop
        </h1>
      </div>
      <div className="flex justify-center py-5">
        <button
          type="button"
          class="inline-block px-3 mx-1 py-2.5 bg-white  hover:text-white text-pink-600 font-medium text-sm leading-tight rounded shadow-md hover:bg-pink-600 hover:shadow-lg focus:bg-pink-700 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-200 active:shadow-lg transition duration-150 ease-in-out"
        >
          Live Link
        </button>
        <button
          type="button"
          class="inline-block px-3 mx-1 py-2.5 bg-white  hover:text-white text-pink-600 font-medium text-sm leading-tight rounded shadow-md hover:bg-pink-600 hover:shadow-lg focus:bg-pink-700 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-200 active:shadow-lg transition duration-150 ease-in-out"
        >
          Server Side Repository
        </button>
        <button
          type="button"
          class="inline-block px-3 mx-1 py-2.5 bg-white  hover:text-white text-pink-600 font-medium text-sm leading-tight rounded shadow-md hover:bg-pink-600 hover:shadow-lg focus:bg-pink-700 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-200 active:shadow-lg transition duration-150 ease-in-out"
        >
          Client Side Repository
        </button>
      </div>
    </section>
  );
};

export default ProjectItem;
