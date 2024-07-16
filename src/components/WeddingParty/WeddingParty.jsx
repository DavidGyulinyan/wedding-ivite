import React from "react";
import Map from "../Map/Map";
import photo from "../../assets/images/church/photo_2024-07-14_23-54-25.jpg";

function WeddingParty() {
  return (
    <>
      <div
        className="section-map flex flex-col items-center mt-14"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <span className="text-2xl font-bold text-center my-2">
          Ռեստորան Ֆելիչի
        </span>
        <span className="text-xl font-bold text-center">Երեկույթը 17:30</span>

        <div className="church-images px-2 py-3">
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
