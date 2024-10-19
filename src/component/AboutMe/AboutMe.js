import React from "react";
import mypicture from "../../image/mypicture.jpg";
import SkillIcon from "./SkillIcon";
import Fade from "react-reveal/Fade";
import Background from "../../image/portfolio-3.png";
const AboutMe = () => {
  var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundAttachment: "fixed",
    backgroundImage: `url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80")`,
  };
  return (
    <div style={sectionStyle}>
      <section
        className=" text-center md:text-left dark:bg-black bg-white  dark:text-white text-gray-700 bg-opacity-95  border-none"
        id="about"
      >
        <div className="block rounded-lg mx-4 lg:mx-12">
          <div className="flex flex-wrap items-center">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <Fade left>
                <div className="pr-16">
                  <h2 className="text-4xl pt-8 text-yellow-400 font-bold mb-3 pb-2 uppercase">
                    About Me
                  </h2>
                  <p className=" mb-1 text-lg lg:pr-24 ">
                     <b>Hi, I'm Kakon!</b> <br /> I hold a degree in Computer Science and Engineering from Northern University and have 3 years of experience as 
                     a full-stack web developer. I've worked with both local and Australian-based software companies, delivering high-quality web applications.
                  </p>
                  <p className="text-white mb-2 pb-2 text-lg">
                    Technologies I specialize in:
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6 ">
                    <SkillIcon title="Full Stack Development"></SkillIcon>
                    <SkillIcon title="Laravel Expertise"></SkillIcon>
                    <SkillIcon title="React.js Expertise"></SkillIcon>
                    <SkillIcon title="Next.js Expertise"></SkillIcon>
                  </div>
                  <button
                    type="button"
                    className="inline-block px-7 py-2 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    View Github
                  </button>
                </div>
              </Fade>
            </div>

            <div className="grow-0 shrink-0 basis-auto block mt-12 lg:mt-0 lg:flex w-full lg:w-6/12 xl:w-4/12">
              <Fade right>
                <img
                  src={mypicture}
                  style={{ borderRadius: "5px" }}
                  alt="Trendy Pants and Shoes"
                  className="w-full rounded-lg"
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
