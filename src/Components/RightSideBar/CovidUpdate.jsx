import React from "react";
import sample2 from "../../assets/images/Svg_sample2.png";
const CovidUpdate = () => {
  return (
    <div className=" my-2 bg-white sm:h-[300px] px-4 py-4 pt-4 rounded-md border-[#EDEBEB] border-2">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full text-left">
          <h3 className="text-[#2E1619] font-medium text-[14px]">
            Covid-19 Updates
          </h3>
        </div>
        <div className="text-left sm:text-right w-full">
          <h3 className="text-[#2E1619] font-medium text-[14px]">
            10 September 2022
          </h3>
          <h4 className="text-accent text-[14px]">Thursday 10:00:00 AM</h4>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="sm:w-1/2 w-full">
          <img className="mx-auto" src={sample2} alt="" />
        </div>
        <div className="bg-gradient-to-r from-hotPink to-orangePeach sm:w-1/2  lg:h-[190px] md:h-auto lg:overflow-y-scroll text-center text-[#FBFBFB] font-medium rounded-md upcomming-appoinment grid md:grid-cols-2 lg:grid-cols-1">
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
