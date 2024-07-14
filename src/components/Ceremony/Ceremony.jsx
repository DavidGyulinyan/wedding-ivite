import React from "react";
import MapOfChurch from "../Map/MapOfChurch";
import photo from "../../assets/images/church/photo_2024-07-15_00-01-51.jpg";

function Ceremony() {
  return (
    <>
      <div
        className="section-map flex flex-col"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <span className="text-xl font-bold text-center mb-6">
          Զորավոր Սուրբ Աստվածածին եկեղեցի
        </span>
        <span className="text-xl font-bold text-center mb-6">
          Արարողություն 15:00
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
          <MapOfChurch />
        </div>
      </div>
    </>
  );
}

export default Ceremony;
