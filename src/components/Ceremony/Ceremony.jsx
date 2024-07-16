import React from "react";
import MapOfChurch from "../Map/MapOfChurch";
import photo from "../../assets/images/church/photo_2024-07-15_00-01-51.jpg";

function Ceremony() {
  return (
    <>
      <div
        className="section-map flex flex-col items-center mt-20"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <span className="text-2xl font-bold text-center my-2">
          Զորավոր Սուրբ Աստվածածին եկեղեցի
        </span>
        <span className="text-xl font-bold text-center mb-3">
          Արարողություն 15:00
        </span>

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
          <MapOfChurch />
        </div>
        <hr className="border-black w-4/5" />
      </div>
    </>
  );
}

export default Ceremony;
