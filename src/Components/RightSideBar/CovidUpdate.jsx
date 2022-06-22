import React from "react";
import sample2 from "../../assets/images/Svg_sample2.png";
const CovidUpdate = () => {
  return (
    <div className=" my-2 bg-white  pl-4 pr-8 py-5 pt-4 rounded-md border-[#EDEBEB] border-2">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[#2E1619] font-medium text-[14px]">
            Covid-19 Updates
          </h3>
        </div>
        <div className="text-right">
          <h3 className="text-[#2E1619] font-medium text-[14px]">
            10 September 2022
          </h3>
          <h4 className="text-accent text-[14px]">Thursday 10:00:00 AM</h4>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <img src={sample2} alt="" />
        </div>
        <div
          className="bg-gradient-to-r from-hotPink to-orangePeach w-1/2 h-[190px] overflow-y-scroll text-center text-[#FBFBFB] font-medium rounded-md"
          id="style-2"
        >
          <div className="pt-4 pb-2">
            <h4 className="text-[14px]">Infection Number</h4>
            <h4 className="text-[34px]">500</h4>
          </div>
          <div className="pt-4 pb-2">
            <h4 className="text-[14px]">Infection Rate</h4>
            <h4 className="text-[34px]">10%</h4>
          </div>
          <div className="pt-4 pb-2">
            <h4 className="text-[14px]">Total Infection</h4>
            <h4 className="text-[34px]">500,000</h4>
          </div>
          <div className="pt-4 pb-2">
            <h4 className="text-[14px]">Number Of Death</h4>
            <h4 className="text-[34px]">20</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidUpdate;
