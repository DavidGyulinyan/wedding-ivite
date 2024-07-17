import React from "react";
import Map from "../Map/Map";
import photo from "../../assets/images/church/photo_2024-07-14_23-54-25.jpg";
import restourantIcon from "../../assets/icons/toasting.svg";

function WeddingParty() {
  return (
    <>
      <div
        className="section-map flex flex-col items-center mt-14"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <span className="text-xl text-center">Երեկույթը 17:30</span>
        <img className="w-10 h-10 my-2" src={restourantIcon} alt="" />
        <span className="text-3xl text-center my-2">Ռեստորան Ֆելիչի</span>
        <span className="text-2xl text-center">Հասցեն Բագրևանդ 110</span>

        <div className="mt-5 px-2 py-3">
          <div className="w-full h-auto overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={photo}
              alt=""
            />
          </div>
        </div>

        <div
          className="section-map flex justify-center items-center pb-10 w-full"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <Map />
        </div>
        <hr className="border-black w-4/5" />
      </div>
    </>
  );
}

export default WeddingParty;
