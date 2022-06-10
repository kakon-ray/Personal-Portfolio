import React from "react";
import mypicture from "../../image/mypicture.jpg";
import SkillIcon from "./SkillIcon";
import Fade from "react-reveal/Fade";
const AboutMe = () => {
  return (
    <div className="bg-black">
      <section class=" text-gray-800 text-center md:text-left mx-12" id="about">
        <div class="block rounded-lg shadow-lg">
          <div class="flex flex-wrap items-center">
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <Fade left>
                <div class="pr-6 py-12 md:pr-12">
                  <h2 class="text-4xl text-white font-bold mb-3 pb-2 uppercase">
                    About Me
                  </h2>
                  <p class="text-white mb-2 text-lg">
                    Hi! I am Kakon, As a Web developer, I always have enthusiasm
                    and hunger for learning new technologies. I am always ready
                    to deliver my full potential to the company I am
                    committed.Code will be easy to understand, Reusable
                    components, Proper Comments
                  </p>
                  <p class="text-white mb-6 pb-2 text-lg">
                    Technologies Used in web application:
                  </p>
                  <div class="flex flex-wrap mb-6 text-white">
                    <SkillIcon title="JavaScript"></SkillIcon>
                    <SkillIcon title="React.js"></SkillIcon>
                    <SkillIcon title="Redux/Context API"></SkillIcon>

                    <SkillIcon title="CSS3"></SkillIcon>
                    <SkillIcon title="SCSS"></SkillIcon>
                    <SkillIcon title="HTML5"></SkillIcon>
                    <SkillIcon title="Tailwind"></SkillIcon>
                    <SkillIcon title="React-Bootstrap"></SkillIcon>
                    <SkillIcon title="Firebase Auth"></SkillIcon>
                    <SkillIcon title="Git"></SkillIcon>
                    <SkillIcon title="GitHub"></SkillIcon>
                    <SkillIcon title="Node.js"></SkillIcon>
                    <SkillIcon title="Express.js"></SkillIcon>
                    <SkillIcon title="Mongodb"></SkillIcon>
                  </div>
                  <button
                    type="button"
                    class="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Buy now
                  </button>
                </div>
              </Fade>
            </div>

            <div class="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
              <Fade right>
                <img
                  src={mypicture}
                  alt="Trendy Pants and Shoes"
                  class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
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
