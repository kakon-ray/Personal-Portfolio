import React from "react";
import Pulse from "react-reveal/Pulse";

const SkillDetails = ({ title, education, detials }) => {
  return (
    <div class="md:flex flex-center">
      <div class="bg-pink-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          class="text-white w-3 h-3"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
          ></path>
        </svg>
      </div>
      <Pulse>
        <div class="block p-6 rounded-lg shadow-md border-t shadow-stone-500 bg-pink-600-100 max-w-lg ml-6 mb-10">
          <div>
            <h1 class="font-medium text-white hover:text-pink-600-700 focus:text-pink-600-800 duration-300 transition ease-in-out text-2xl">
              {title}
            </h1>
            <p class="font-medium text-pink-600 hover:text-pink-600-700 py-2 focus:text-pink-600-800 duration-300 transition ease-in-out text-sm">
              {education}
            </p>
          </div>
          <p class="text-pink-600-700 mb-6">{detials}</p>
          <button
            type="button"
            class="inline-block px-4 py-1.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-600-700 hover:shadow-lg focus:bg-pink-600-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-600-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
          >
            View
          </button>
          <button
            type="button"
            class="inline-block px-3.5 mx-2 py-1 border-2 border-pink-600 text-pink-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true"
          >
            See demo
          </button>
        </div>
      </Pulse>
    </div>
  );
};

export default SkillDetails;