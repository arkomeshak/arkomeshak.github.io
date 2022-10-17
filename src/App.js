import React from "react";
import "./App.css";
import HeaderContainer from "./Components/HeaderContainer";
import Navigation from "./Components/Navigation";
import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      <Navigation />
      <HeaderContainer />

      <h5 class="sub-header">My Portfoilo</h5>
    </>
  );
};

export default App;
