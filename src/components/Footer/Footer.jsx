import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer w-full h-52 flex flex-col justify-center items-center gap-3">
        <span className="text-3xl">Սիրով</span>
        <span className="text-3xl">Դավիթ և Նունե</span>
        <hr className="w-3/4 bg-black" />
        <span className="text-2xl">03/11/2024</span>
      </div>
    </>
  );
};

export default Footer;
