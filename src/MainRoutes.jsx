import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Expertise from "./components/Expertise";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/Expertise" element={<Expertise />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
