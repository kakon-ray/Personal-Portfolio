import React from "react";
import Service from "./Service";
import Fade from "react-reveal/Fade";
const Services = () => {
  var sectionStyle = {
    width: "100%",
    backgroundAttachment: "fixed",
    backgroundImage: `url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80")`,
  };
  return (
    <div style={sectionStyle}>
      <div className="bg-black-background pb-12 text-white" id="services">
        <h1 className="text-center text-4xl uppercase  py-24 md:pb-24">
          My <span className="text-yellow-400">Services</span>
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
    </div>
  );
};

export default Services;
