import React from "react";
import Service from "./Service";
import Fade from "react-reveal/Fade";
const Services = () => {
  var sectionStyle = {
    width: "100%",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundImage: `url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80")`,
  };
  return (
    <div style={sectionStyle}>
      <div
        className="dark:bg-black bg-white bg-opacity-90 py-24 dark:text-white text-gray-700"
        id="services"
      >
        <h1 className="text-center text-4xl uppercase font-bold pb-8 md:pb-24">
          My <span className="text-yellow-400">Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mx-4 lg:mx-12">
          <Fade bottom>
            <Service service="Laravel"/>
          </Fade>
          <Fade bottom>
            <Service service="React.js"/>
          </Fade>
          <Fade bottom>
            <Service service="Next.js"/>
          </Fade>
          <Fade bottom>
            <Service service=""/>
          </Fade>
          <Fade bottom>
            <Service service=""/>
          </Fade>
          <Fade bottom>
            <Service service=""/>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Services;
