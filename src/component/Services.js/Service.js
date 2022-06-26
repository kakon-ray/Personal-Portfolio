import React from "react";

const Service = () => {
  return (
    <div className="flex justify-center ">
      <div className="block rounded-lg shadow-sm dark:bg-stone-900 bg-white text-gray-700 dark:hover:bg-slate-900 hover:bg-slate-900 shadow-stone-500  dark:text-white  hover:text-white text-center">
        <div className="py-3 px-6 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto bg-pink-600 dark:bg-yellow-600 rounded-full w-24 h-24 p-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <div className="p-6 pt-6">
          <h5 className="text-xl font-medium mb-2">
            Web Application Development
          </h5>
          <p className="py-2 text-sm">
            With supporting text below as a natural lead-in to additional
            content. With supporting text below as a natural lead-in to
            additional content. content. With supporting text below as a natural
            lead-in to additional content. content. With supporting text below
            as a natural lead-in to additional content.
          </p>
        </div>
        <div>
          <button
            type="button"
            className=" inline-block w-full px-6 py-2.5 bg-pink-600 dark:bg-yellow-600 text-white font-medium text-sm leading-tight uppercase rounded-b shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
