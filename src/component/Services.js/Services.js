import React from "react";
import Service from "./Service";
import Fade from "react-reveal/Fade";
const Services = () => {
  return (
    <div className="bg-black pb-12" id="services">
      <h1 className="text-center text-4xl uppercase text-white py-24 md:pb-24">
        My Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mx-4 lg:mx-12">
        <Fade bottom>
          <Service />
        </Fade>
        <Fade bottom>
          <Service />
        </Fade>
        <Fade bottom>
          <Service />
        </Fade>
        <Fade bottom>
          <Service />
        </Fade>
        <Fade bottom>
          <Service />
        </Fade>
        <Fade bottom>
          <Service />
        </Fade>
      </div>
    </div>
  );
};

export default Services;
