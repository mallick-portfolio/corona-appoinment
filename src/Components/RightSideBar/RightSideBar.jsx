import React from "react";
import TopBar from "../TopBar/TopBar.jsx";
import Banner from "./Banner.jsx";
import PatientInfo from "./PatientInfo.jsx";

const RightSideBar = ({ show }) => {
  return (
    <div
      className={`smooth-transition bg-[#E5E5E5] min-h-screen px-6 text-white ${
        !show ? "ml-24" : "ml-64 pl-12"
      }`}
    >
      <TopBar show={show} />
      <div className="flex justify-between gap-16">
        <div className="basis-3/5">
          <Banner />
          <PatientInfo />
        </div>
        <div className="basis-2/5 bg-green-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error cum
          molestiae quibusdam cumque ratione fuga distinctio. Neque iure
          distinctio facere tempore eveniet esse obcaecati illum, magni
          perferendis deleniti officia quam!
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
