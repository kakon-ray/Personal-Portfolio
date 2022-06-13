import React from "react";
import mypicture from "../../image/mypicture.jpg";
import SkillIcon from "./SkillIcon";
import Fade from "react-reveal/Fade";
import Background from "../../image/portfolio-3.png";
const AboutMe = () => {
  var sectionStyle = {
    width: "100%",
    backgroundAttachment: "fixed",
    backgroundImage: `url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80")`,
  };
  return (
    <div style={sectionStyle}>
      <section
        class=" text-center md:text-left dark:bg-black bg-white  dark:text-white text-gray-700 bg-opacity-95  border-none"
        id="about"
      >
        <div class="block rounded-lg mx-4 lg:mx-12">
          <div class="flex flex-wrap items-center">
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <Fade left>
                <div class="pr-16">
                  <h2 class="text-4xl pt-8 text-yellow-400 font-bold mb-3 pb-2 uppercase">
                    About Me
                  </h2>
                  <p class=" mb-1 text-sm lg:pr-24 ">
                    Hi! I am Kakon, As a Web developer, I always have enthusiasm
                    and hunger for learning new technologies. I am always ready
                    to deliver my full potential to the company I am
                    committed.Code will be easy to understand, Reusable
                    components, Proper Comments
                  </p>
                  <p class="text-white mb-2 pb-2 text-sm">
                    Technologies Used in web application:
                  </p>
                  <div class="flex flex-wrap gap-3 mb-6 ">
                    <SkillIcon title="Full Stack Developer"></SkillIcon>
                    <SkillIcon title="React.js Experts"></SkillIcon>
                    <SkillIcon title="Frontend Experts"></SkillIcon>
                    <SkillIcon title="Backend Developer"></SkillIcon>
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
