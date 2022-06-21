import React from "react";
import TopBar from "../TopBar/TopBar.jsx";

const RightSideBar = ({ show }) => {
  return (
    <div
      className={`smooth-transition bg-[#E5E5E5] py-12 px-6 text-white ${
        !show ? "ml-24" : "ml-64 pl-12"
      }`}
    >
      <TopBar show={show} />
    </div>
  );
};

export default RightSideBar;
