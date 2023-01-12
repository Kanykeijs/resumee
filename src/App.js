import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <MainRoutes />
      {/* <AboutMe />*/}
    </BrowserRouter>
  );
};

export default App;
