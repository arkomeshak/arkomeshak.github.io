import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./Component-CSS/HeaderContainerCSS.css";
//background-image: url("./Images/ForestMountain.jpg");
const StyledDiv = styled.div``;

const HeaderContainer = () => (
  <StyledDiv>
    <div className="imageWrapper">
      <div className="headerWrapper">
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="main-header-text">Adam Komeshak</div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <div className="sub-header-text">Full-Stack Web Developer</div>
        </motion.div>
      </div>
    </div>
  </StyledDiv>
);

export default HeaderContainer;
