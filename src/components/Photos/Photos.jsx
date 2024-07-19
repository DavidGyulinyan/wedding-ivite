import React from "react";
import photo1 from "../../assets/images/117A1094.jpg";
import photo2 from "../../assets/images/IMG_20231205_005329_614.jpg";
import photo3 from "../../assets/images/1720810232092.jpg";
import photo4 from "../../assets/images/20240712_212935.jpg";

const photos = [
  {
    id: 1,
    ph: photo1,
    alt: "Լուսանկար 1",
  },
  {
    id: 2,
    ph: photo2,
    alt: "Լուսանկար 2",
  },
  {
    id: 3,
    ph: photo3,
    alt: "Լուսանկար 3",
  },
  {
    id: 4,
    ph: photo4,
    alt: "Լուսանկար 4",
  },
];

function Photos() {
  return (
    <div className="xl:w-2/3 m-auto grid sm:grid-cols-1 grid-cols-2 place-items-center md:grid-cols-2 gap-4 px-2">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="w-full xl:w-4/6 h-64 sm:h-[40rem] md:h-[40rem] lg:h-[50rem] xl:h-[40rem] overflow-hidden"
        >
          <img
            className="w-full h-full object-cover rounded-lg"
            src={photo.ph}
            alt={photo.alt}
          />
        </div>
      ))}
    </div>
  );
}

export default Photos;
