import React from "react";

const MapOfChurch = () => {
  return (
    <div
      className="section-map flex flex-col "
      data-aos="fade-up"
      data-aos-easing="linear"
    >
      <span className="text-xl font-bold text-center mb-6">
        Զորավոր Սուրբ Աստվածածին եկեղեցի
      </span>
      <span className="text-xl font-bold text-center mb-6">
        Արարողության սկիզբ 15:00
      </span>

      <div
        className="section-map flex justify-center items-center pb-10"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.091196942712!2d44.5096335!3d40.1861171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd1d11bff0fd%3A0x9a1da55cbd1e4fdf!2sSaint%20Mother%20of%20God%20the%20Mighty%20Church!5e0!3m2!1sen!2sus!4v1650370656591!5m2!1sen!2sus"
          width="100%"
          height="450"
          className="border-0 w-5/6 h-[40rem]"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MapOfChurch;