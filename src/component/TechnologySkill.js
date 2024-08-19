import React from "react";
import Item from "./Skill/Item";

const TechnologySkill = () => {
  return (
    <div>
      <div className="dark:bg-black bg-white py-24 dark:text-white text-gray-700">
        <h1 className="text-4xl text-center  pb-12 uppercase font-bold">
          Skills <span className="text-yellow-400">Frontend Technology</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-2">
          <Item title="JavaScript" parcentage="80" />
          <Item title="React.js" parcentage="90" />
          <Item title="React-Redux" parcentage="70" />
          <Item title="React-Query" parcentage="50" />
          <Item title="HTML5" parcentage="90" />
          <Item title="CSS3" parcentage="87" />
          <Item title="Tailwind CSS" parcentage="84" />
          <Item title="Bootstrap / Rect-Bootstrap" parcentage="90" />
          <Item title="Firebase" parcentage="50" />
        </div>
      </div>
      <div className="dark:bg-black bg-white py-12 dark:text-white text-gray-700">
        <h1 className="text-4xl text-center  pb-12 uppercase font-bold">
          Skills <span className="text-yellow-400">Backend Technology</span>
        </h1>
        <div className="mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-2">
            <Item title="PHP" parcentage="45" />
            <Item title="Laravel" parcentage="70" />
            <Item title="MYSQL" parcentage="70" />
          </div>
        </div>
      </div>
      <div className="dark:bg-black bg-white py-12 dark:text-white text-gray-700">
        <h1 className="text-4xl text-center  pb-12 uppercase font-bold">
          Skills <span className="text-yellow-400">Tools</span>
        </h1>
        <div className="mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-2">
            <Item title="VS Code" parcentage="80" />
            <Item title="Chrome Dev Tool" parcentage="40" />
            <Item title="Package Managers (Git)" parcentage="50" />
            <Item title="GitHub" parcentage="50" />
            <Item title="Firebase," parcentage="50" />
            <Item title="Netlify," parcentage="50" />
            <Item title="Heroku," parcentage="50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySkill;
