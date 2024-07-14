import React from "react";
import Map from "../Map/Map";
import photo from "../../assets/images/church/photo_2024-07-14_23-54-25.jpg";

function WeddingParty() {
  return (
    <>
      <div
        className="section-map flex flex-col"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <span className="text-2xl font-bold text-center mb-6">
          Ռեստորան Ֆելիչի
        </span>
        <span className="text-xl font-bold text-center mb-6">
          Ռեստորանը մեր հյուրերի համար բաց կլինի 17:30-ին
        </span>

        <div className="church-images px-2 py-10">
          <div className="w-full h-auto overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={photo}
              alt=""
            />
          </div>
        </div>

        <div
          className="section-map flex justify-center items-center pb-10"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <Map />
        </div>
      </div>
    </>
  );
}

export default WeddingParty;
