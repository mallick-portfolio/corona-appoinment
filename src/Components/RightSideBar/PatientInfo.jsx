import React from "react";
import heart from "../../assets/images/Icon_Heart.png";
import darkheart from "../../assets/images/dark/darkheart.png";
import uparrow from "../../assets/images/uparrow.png";
import darkuparrow from "../../assets/images/dark/Vector.png";
import bloodpressure from "../../assets/images/Icon_Blood_pressure.png";
import darkbloodpressure from "../../assets/images/dark/darkbloodpressure.png";
import bubble from "../../assets/images/Icon_bubble.png";
import darkbubble from "../../assets/images/dark/darkoxygen.png";
import sugar from "../../assets/images/Icon_Blood_sugar.png";
import darksugar from "../../assets/images/dark/darkgulcose.png";
const PatientInfo = ({ theme }) => {
  return (
    <div className="my-8 px-6 md:px-0">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="shadow-lg bg-white dark:bg-[#2C2222] pl-3 py-3 rounded-md">
          <img src={theme === "dark" ? darkheart : heart} alt="" />
          <h4 className="text-[12px] font-semibold mt-2 text-secondary dark:text-[#D1D5DB]">
            Pulse Count
          </h4>
          <p className="text-[#4A3D3F] dark:text-[#D1D5DB] text-[16px] my-2">
            60 bpm
          </p>
          <div className="flex items-center">
            <img src={theme === "dark" ? darkuparrow : uparrow} alt="" />
            <span className="text-mygreen dark:text-[#D1D5DB] ml-2 text-[12px]">
              Normal
            </span>
          </div>
        </div>
        <div className="shadow-lg bg-white dark:bg-[#2C2222] pl-3 py-3 rounded-md">
          <img
            src={theme === "dark" ? darkbloodpressure : bloodpressure}
            alt=""
          />
          <h4 className="text-[12px] font-semibold mt-2 text-secondary dark:text-[#D1D5DB]">
            Blood Pressure
          </h4>
          <p className="text-[#4A3D3F] dark:text-[#D1D5DB] text-[16px] my-2">
            110/70 mmHg
          </p>
          <div className="flex items-center">
            <img src={theme === "dark" ? darkuparrow : uparrow} alt="" />
            <span className="text-[#82AB0D] dark:text-[#D1D5DB] ml-2 text-[12px]">
              Slightly higher
            </span>
          </div>
        </div>
        <div className="shadow-lg bg-white dark:bg-[#2C2222] pl-3 py-3 rounded-md">
          <img src={theme === "dark" ? darkbubble : bubble} alt="" />
          <h4 className="text-[12px] font-semibold mt-2 text-secondary dark:text-[#D1D5DB]">
            Oxygen Saturation
          </h4>
          <p className="text-[#4A3D3F] dark:text-[#D1D5DB] text-[16px] my-2">
            97 %
          </p>
          <div className="flex items-center">
            <img src={theme === "dark" ? darkuparrow : uparrow} alt="" />
            <span className="text-[#82AB0D] dark:text-[#D1D5DB] ml-2 text-[12px]">
              Slightly higher
            </span>
          </div>
        </div>
        <div className="shadow-lg bg-white dark:bg-[#2C2222] pl-3 py-3 rounded-md">
          <img src={theme === "dark" ? darksugar : sugar} alt="" />
          <h4 className="text-[12px] font-semibold mt-2 text-secondary dark:text-[#D1D5DB]">
            Glucose Count
          </h4>
          <p className="text-[#4A3D3F] dark:text-[#D1D5DB] text-[16px] my-2">
            100 mm/dL
          </p>
          <div className="flex items-center">
            <img src={theme === "dark" ? darkuparrow : uparrow} alt="" />
            <span className="text-mygreen dark:text-[#D1D5DB] ml-2 text-[12px]">
              Normal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
