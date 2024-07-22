import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import "./scrollToTopButton.css";

const ScrollToTopButton = () => {
  return (
    <ScrollToTop smooth component={<CustomArrow />} className="scroll-to-top" />
  );
};

const CustomArrow = () => {
  return <FaArrowUp />;
};

export default ScrollToTopButton;
