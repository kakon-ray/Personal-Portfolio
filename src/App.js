import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProjectsProvider } from "./Context/UseProjects";
import Navbar from "./component/Navbar/Navbar";
import ProjectsDetails from "./component/ProjectsDetails";
import Home from "./Page/Home";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProjectsProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="details/:id" element={<ProjectsDetails />} />
        </Routes>
      </ProjectsProvider>
    </div>
  );
};

export default App;
