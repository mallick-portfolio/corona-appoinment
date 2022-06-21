import React from "react";
import heart from "../../assets/images/Icon_Heart.png";
import uparrow from "../../assets/images/uparrow.png";
const PatientInfo = () => {
  return (
    <div className="my-6">
      <div className="grid grid-cols-4 gap-6">
        <div className="shadow-lg bg-white pl-3 py-3 rounded-md">
          <img src={heart} alt="" />
          <h4 className="text-[12px] font-semibold mt-2 text-secondary">
            Pulse Count
          </h4>
          <p className="text-[#4A3D3F] text-[16px] my-2">60 bpm</p>
          <div className="flex items-center">
            <img src={uparrow} alt="" />
            <span className="text-mygreen ml-2">Normal</span>
          </div>
        </div>
        <div className="shadow-lg bg-white pl-3 py-3 rounded-md">
          <img src={heart} alt="" />
          <h4 className="text-[12px] font-semibold mt-2 text-secondary">
            Pulse Count
          </h4>
          <p className="text-[#4A3D3F] text-[16px] my-2">60 bpm</p>
          <div className="flex items-center">
            <img src={uparrow} alt="" />
            <span className="text-mygreen ml-2">Normal</span>
          </div>
        </div>
        <div className="shadow-lg bg-white pl-3 py-3 rounded-md">
          <img src={heart} alt="" />
          <h4 className="text-[12px] font-semibold mt-2 text-secondary">
            Pulse Count
          </h4>
          <p className="text-[#4A3D3F] text-[16px] my-2">60 bpm</p>
          <div className="flex items-center">
            <img src={uparrow} alt="" />
            <span className="text-mygreen ml-2">Normal</span>
          </div>
        </div>
        <div className="shadow-lg bg-white pl-3 py-3 rounded-md">
          <img src={heart} alt="" />
          <h4 className="text-[12px] font-semibold mt-2 text-secondary">
            Pulse Count
          </h4>
          <p className="text-[#4A3D3F] text-[16px] my-2">60 bpm</p>
          <div className="flex items-center">
            <img src={uparrow} alt="" />
            <span className="text-mygreen ml-2">Normal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
