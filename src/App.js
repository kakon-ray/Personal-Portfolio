import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ProjectsProvider } from "./Context/UseProjects";
import Navbar from "./component/Navbar/Navbar";
import ProjectsDetails from "./component/ProjectsDetails";
import Home from "./Page/Home";

const App = () => {
  const [dark, sendDataToParent] = useState(true);

  console.log(dark);

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <Navbar sendDataToParent={sendDataToParent} dark={dark}></Navbar>
      <ProjectsProvider>
        <Routes>
          <Route path="/" element={<Home dark={dark} />} />

          <Route path="details/:id" element={<ProjectsDetails />} />
        </Routes>
      </ProjectsProvider>
    </div>
  );
};

export default App;
