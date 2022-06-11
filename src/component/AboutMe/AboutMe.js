import React from "react";
import mypicture from "../../image/mypicture.jpg";
import SkillIcon from "./SkillIcon";
import Fade from "react-reveal/Fade";
const AboutMe = () => {
  return (
    <div className="bg-black">
      <section
        class=" text-gray-800 text-center md:text-left mx-4 lg:mx-12 border-none"
        id="about"
      >
        <div class="block rounded-lg">
          <div class="flex flex-wrap items-center">
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <Fade left>
                <div class="pr-16">
                  <h2 class="text-4xl pt-8 text-white font-bold mb-3 pb-2 uppercase">
                    About Me
                  </h2>
                  <p class="text-white mb-1 text-sm">
                    Hi! I am Kakon, As a Web developer, I always have enthusiasm
                    and hunger for learning new technologies. I am always ready
                    to deliver my full potential to the company I am
                    committed.Code will be easy to understand, Reusable
                    components, Proper Comments
                  </p>
                  <p class="text-white mb-2 pb-2 text-sm">
                    Technologies Used in web application:
                  </p>
                  <div class="flex flex-wrap gap-3 mb-6 text-white">
                    <SkillIcon title="Full Stack Developer"></SkillIcon>
                    <SkillIcon title="React.js Experts"></SkillIcon>
                    <SkillIcon title="Frontend Developer"></SkillIcon>
                    <SkillIcon title="Backend Developer (Node.js, Express.js, MongoDB)"></SkillIcon>
                  </div>
                  <button
                    type="button"
                    class="inline-block px-7 py-2 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    View Github
                  </button>
                </div>
              </Fade>
            </div>

            <div class="grow-0 shrink-0 basis-auto block mt-12 lg:mt-0 lg:flex w-full lg:w-6/12 xl:w-4/12">
              <Fade right>
                <img
                  src={mypicture}
                  style={{ borderRadius: "5px" }}
                  alt="Trendy Pants and Shoes"
                  class="w-full rounded-lg"
                />
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
