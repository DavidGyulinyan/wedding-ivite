import React from "react";

const Map = () => {
  return (
    <div
      className="section-map flex flex-col"
      data-aos="fade-up"
      data-aos-easing="linear"
    >
      <span className="text-2xl font-bold text-center mb-6">
        Ռեստորան Ֆելիչե
      </span>
      <span className="text-xl font-bold text-center mb-6">
        Ռեստորանը մեր հյուրերի համար բաց կլինի 17:30-ին
      </span>

      <div
        className="section-map flex justify-center items-center pb-10"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.291765898452!2d44.5877592!3d40.1920409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa37fd593340b%3A0x1e39da4638bbd314!2sFelice!5e0!3m2!1sen!2sus!4v1650370656591!5m2!1sen!2sus"
          className="w-5/6 h-[40rem] border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
