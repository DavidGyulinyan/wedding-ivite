import React from "react";
import photo1 from "../../assets/images/117A1094.jpg";
import photo2 from "../../assets/images/IMG_20231205_005329_614.jpg";
import photo3 from "../../assets/images/1720810232092.jpg";
import photo4 from "../../assets/images/20240712_212935.jpg";
import photo5 from "../../assets/images/20240102_191730new.jpg";
import photo6 from "../../assets/images/20220920_191814new.jpg";
import photo7 from "../../assets/images/IMG_20240420_192827_948.jpg";
import photo8 from "../../assets/images/20221225_215138.jpg";

function Photos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <img className="h-auto max-w-full rounded-lg" src={photo2} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={photo3} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={photo4} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={photo1} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={photo5} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={photo6} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={photo7} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={photo8} alt="" />
      </div>
    </div>
  );
}

export default Photos;
