import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./Component-CSS/NavigationCSS.css";
const navContainer = styled.div``;
const navItem = styled.div``;

const Navigation = () => (
  <>
    <nav className="nav-container">
      <ul className="nav-wrapper">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
      </ul>
    </nav>
  </>
);

export default Navigation;
