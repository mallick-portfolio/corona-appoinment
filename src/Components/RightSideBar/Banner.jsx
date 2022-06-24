import React from "react";
import sample1 from "../../assets/images/Svg_sample1.png";
const Banner = () => {
  return (
    <div className="lg:flex px-6 md:px-0 justify-between items-center bg-gradient-to-r from-hotPink to-orangePeach md:rounded-md pr-6">
      <div>
        <img className="mx-auto" src={sample1} alt="" />
      </div>
      <div className="pb-24 md:pb-0">
        <h2 className="text-[24px] font-semibold">Hello, Mary Jane!</h2>
        <p className="text-[16px] my-3">Stay Up-to-Date with your appointments.</p>
        <p className="text-[16px]">You Have No pending Reports</p>
      </div>
    </div>
  );
};

export default Banner;
