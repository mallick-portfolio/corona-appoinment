import React from "react";
import sample1 from "../../assets/images/Svg_sample1.png";
const Banner = () => {
  return (
    <div className="md:flex justify-between items-center bg-gradient-to-r from-hotPink to-orangePeach rounded-md pr-6">
      <div>
        <img src={sample1} alt="" />
      </div>
      <div>
        <h2 className="text-[24px] font-semibold">Hello, Mary Jane!</h2>
        <p className="text-[16px] my-3">Stay Up-to-Date with your appointments.</p>
        <p className="text-[16px]">You Have No pending Reports</p>
      </div>
    </div>
  );
};

export default Banner;
