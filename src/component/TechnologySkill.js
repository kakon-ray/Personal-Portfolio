import React from "react";

const TechnologySkill = () => {
  return (
    <div className="bg-black py-12">
      <h1 className="text-5xl text-white text-center pt-16 pb-8 ">My Skills</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-4 lg:mx-12">
        <div className="flex flex-col gap-3 text-white">
          <h1 className="text-center text-3xl py-6">
            <span className="text-yellow-400">Frontend </span>Technology
          </h1>
          <div class="w-full bg-gray-200 ">
            <div
              class="bg-pink-600 text-sm py-2 font-medium text-blue-100 text-center p-0.5 leading-none "
              style={{ width: "80%" }}
            >
              {" "}
              JavaScript
            </div>
          </div>
          <div class="w-full bg-gray-200 ">
            <div
              class="bg-pink-600 text-sm py-2  font-medium text-blue-100 text-center p-0.5 leading-none "
              style={{ width: "90%" }}
            >
              {" "}
              React.js
            </div>
          </div>
          <div class="w-full bg-gray-200 ">
            <div
              class="bg-pink-600 text-sm py-2 font-medium text-blue-100 text-center p-0.5 leading-none "
              style={{ width: "70%" }}
            >
              {" "}
              React-Redux / Context-Api
            </div>
          </div>
          <div class="w-full bg-gray-200 ">
            <div
              class="bg-pink-600 text-sm py-2 font-medium text-blue-100 text-center p-0.5 leading-none "
              style={{ width: "95%" }}
            >
              {" "}
              HTML5
            </div>
          </div>
          <div class="w-full bg-gray-200 ">
            <div
              class="bg-pink-600 text-sm py-2 font-medium text-blue-100 text-center p-0.5 leading-none "
              style={{ width: "95%" }}
            >
              {" "}
              CSS3
            </div>
          </div>
          <div class="w-full bg-gray-200 ">
            <div
              class="bg-pink-600 text-sm py-2 font-medium text-blue-100 text-center p-0.5 leading-none "
              style={{ width: "80%" }}
            >
              {" "}
              Tailwind
            </div>
          </div>
          <div class="w-full bg-gray-200 ">
            <div
              class="bg-pink-600 text-sm py-2 font-medium text-blue-100 text-center p-0.5 leading-none "
              style={{ width: "98%" }}
            >
              {" "}
              Bootstrap / Rect-Bootstrap
            </div>
          </div>
          <div class="w-full bg-gray-200 ">
            <div
              class="bg-pink-600 text-sm py-2 font-medium text-blue-100 text-center p-0.5 leading-none "
              style={{ width: "60%" }}
            >
              {" "}
              Firebase
            </div>
          </div>
          <div class="w-full bg-gray-200 ">
            <div
              class="bg-pink-600 text-sm py-2 font-medium text-blue-100 text-center p-0.5 leading-none "
              style={{ width: "90%" }}
            >
              {" "}
              Firebase Auth
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-center text-3xl py-6">
            <span className="text-yellow-400">Backend </span>Technology
          </h1>

          <div class="w-full bg-gray-200 ">
            <div
              class="bg-pink-600 text-sm py-2 font-medium text-blue-100 text-center p-0.5 leading-none "
              style={{ width: "40%" }}
            >
              {" "}
              Node.js
            </div>
          </div>
          <div class="w-full bg-gray-200 ">
            <div
              class="bg-pink-600 text-sm py-2  font-medium text-blue-100 text-center p-0.5 leading-none "
              style={{ width: "40%" }}
            >
              {" "}
              Express.js
            </div>
          </div>
          <div class="w-full bg-gray-200 ">
            <div
              class="bg-pink-600 text-sm py-2 font-medium text-blue-100 text-center p-0.5 leading-none "
              style={{ width: "50%" }}
            >
              {" "}
              MongoDB
            </div>
          </div>
          <div class="w-full bg-gray-200 ">
            <div
              class="bg-pink-600 text-sm py-2 font-medium text-blue-100 text-center p-0.5 leading-none "
              style={{ width: "70%" }}
            >
              {" "}
              Deployment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySkill;
