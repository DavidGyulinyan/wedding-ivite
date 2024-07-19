import React from "react";
import locationIcon from "../../assets/icons/location-pin.svg";

const Map = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      <img
        className="w-10 h-10"
        src={locationIcon}
        alt="Տեղակայում․ պատկերակ"
      />
      <span className="mb-5 text-2xl">Տեղակայումը քարտեզի վրա</span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.291765898452!2d44.5877592!3d40.1920409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa37fd593340b%3A0x1e39da4638bbd314!2sFelice!5e0!3m2!1sen!2sus!4v1650370656591!5m2!1sen!2sus"
        className="w-full xl:w-4/5 h-[18rem] xl:h-[30rem] border-0 rounded-lg px-2"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
