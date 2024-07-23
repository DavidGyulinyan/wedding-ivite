import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import "./scrollToTopButton.css";

const ScrollToTopButton = ({ onClick }) => {
  return (
    <ScrollToTop
      smooth
      component={<CustomArrow />}
      className="scroll-to-top"
      onClick={onClick}
    />
  );
};

const CustomArrow = () => {
  return <FaArrowUp />;
};

export default ScrollToTopButton;
