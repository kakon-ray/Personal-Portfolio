/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Header.css";
import Fade from "react-reveal/Fade";
import img from "../../image/str.png";
import Typewriter from "typewriter-effect";

const Header = ({ dark }) => {
  const particlesInit = async (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  return (
    <div className="bg-black md:pb-0" style={{ heigth: "400px" }} id="header">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: {
            color: {
              value: `${dark ? "#000000eb" : "#fff"}`,
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 8,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            options: { fullscreen: { enable: false, zIndex: 0 } },
            color: {
              value: `${dark ? "#fff" : "#ff136f"}`,
            },
            links: {
              // color: `${dark ? "#fff" : "#ff136f"}`,
              distance: 150,
              enable: true,
              opacity: 1,
              width: 0,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "image",
              image: {
                src: img,
              },
            },
            size: {
              value: { min: 5, max: 12 },
            },
          },
          detectRetina: true,
        }}
      ></Particles>
      <Fade left>
        <div className="absolute top-40 mx-4 lg:mx-16 pt-4">
          <h3 className="text-3xl font-bold text-yellow-400 uppercase">
            Welcome To My Site
          </h3>
          <h1 className="text-3xl lg:text-5xl dark:text-white text-gray-700 py-8">
            Hi There, <span className="text-yellow-400">I'm Kakon Ray</span>{" "}
            <br></br>{" "}
            <Typewriter
              options={{
                strings: [
                  "Full Stack JavaScript Developer.",
                  "Front End Expert",
                  "React.js Expert",
                  "MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="dark:text-white text-gray-700 text-lg pr-10 lg:pr-0">
            As a Web developer, I always have enthusiasm and hunger for learning
            new technologies.<br></br> I am always ready to deliver my full
            potential to the company I am committed.
          </p>
          <p className="dark:text-white text-gray-700 text-lg pr-10 lg:pr-0 pt-4">
            Email: kakonray.cse@gmail.com
          </p>
          <p className="dark:text-white text-gray-700 text-sm pr-10 lg:pr-0">
            Phone: +8801707500512
          </p>

          <a
            href="https://drive.google.com/file/d/10jyXsgBskZWE4BmKVpPLl1nlzbSlcLmn/view?usp=sharing"
            className="inline-block shadow-lg px-6 py-3 mt-12 dark:bg-stone-700 bg-pink-600  text-white  text-sm leading-tight font-bold rounded-full  hover:bg-pink-700 dark:hover:bg-pink-600 hover:shadow-lg focus:bg-pink focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
            target="_blank"
          >
            {" "}
            Download Resume
          </a>
        </div>
      </Fade>
      <Fade right>
        <div className="flex justify-end absolute bottom-6 lg:bottom-40 right-1 lg:right-12 heder-social-icon">
          <div class="flex gap-8 flex-col ">
            <a
              href="https://www.linkedin.com/in/kakon-ray-487836201/"
              target="_blank"
            >
              {" "}
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block p-3 bg-pink-600 dark:bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  />
                </svg>
              </button>
            </a>
            <a href="https://github.com/kakon-ray" target="_blank">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block p-3 bg-pink-600 dark:bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
                  />
                </svg>
              </button>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100036691910474"
              target="_blank"
            >
              {" "}
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block p-3 bg-pink-600 dark:bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  class="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Header;
