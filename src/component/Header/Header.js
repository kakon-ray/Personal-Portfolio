/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Header.css";
import Fade from "react-reveal/Fade";

const Header = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div
      className="bg-black pb-12 md:pb-0"
      style={{ heigth: "400px" }}
      id="header"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: {
            color: {
              value: `#000000`,
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
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
              value: "#ff136f",
            },
            links: {
              color: "#ff136f",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
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
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      ></Particles>
      <Fade left>
        <div className="absolute top-40 mx-12 pt-16">
          <h3 className="text-white text-3xl">Welcome To My Site</h3>
          <h1 className="text-3xl lg:text-5xl text-white py-8">
            Hello! I'm Kakon Ray <br></br> An Full Stack Developer.
          </h1>
          <p className="text-white text-xl">
            As a Web developer, I always have enthusiasm and hunger for learning
            new technologies.<br></br> I am always ready to deliver my full
            potential to the company I am committed.
          </p>
          <a
            href="https://drive.google.com/file/d/10jyXsgBskZWE4BmKVpPLl1nlzbSlcLmn/view?usp=sharing"
            className="inline-block shadow-lg px-6 py-3 mt-16 bg-stone-700 text-white  text-lg leading-tight font-bold rounded-full  hover:bg-pink-600 hover:shadow-lg focus:bg-pink focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
            target="_blank"
          >
            {" "}
            Download Resume
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Header;
