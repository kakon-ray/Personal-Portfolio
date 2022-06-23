import React from "react";
import { Fade } from "react-reveal";
import ProgressBar from "react-animated-progress-bar";

const Item = ({ title, parcentage }) => {
  const myAppRef = document.querySelector(".scrollable-div");
  return (
    <div>
      <div className="flex justify-center ml-3 mx-auto flex justify-center">
        <ProgressBar
          width="350px"
          height="10px"
          fontColor="white"
          trackWidth="10"
          percentage={parcentage}
          trackPathColor="grey"
          trackBorderColor="black"
          hollowBackgroundColor="#333333"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "green",
            poor: "red",
          }}
          scrollArea={myAppRef}
        />
      </div>
      <h1 className="text-center">{title}</h1>
    </div>
  );
};

export default Item;
