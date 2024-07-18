import React from "react";
import MapOfChurch from "../Map/MapOfChurch";
import photo from "../../assets/images/church/photo_2024-07-14_23-46-27.jpg";
import churchIcon from "../../assets/icons/church.svg";

function Ceremony() {
  return (
    <>
      <div
        className="section-map flex flex-col items-center mt-20"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <span className="text-2xl text-center mb-3">
          Արարողության սկիզբը 15:00
        </span>
        <img className="w-10 h-10 my-2" src={churchIcon} alt="" />
        <span className="text-3xl text-center my-2 px-2">
          Զորավոր Սուրբ Աստվածածին Եկեղեցի
        </span>
        <span className="text-2xl text-center mb-3">
          Հասցեն Ղազար Փարպեցի 9
        </span>

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
          <MapOfChurch />
        </div>
        <hr className="border-black w-4/5" />
      </div>
    </>
  );
}

export default Ceremony;
