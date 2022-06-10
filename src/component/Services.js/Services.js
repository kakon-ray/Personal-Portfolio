import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div className="bg-black pb-12">
      <h1 className="text-center text-4xl uppercase text-white py-24 md:pb-24">
        My Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 mx-12">
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
};

export default Services;
