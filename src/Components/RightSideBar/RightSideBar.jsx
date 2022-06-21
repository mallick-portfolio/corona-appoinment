import React from "react";
import TopBar from "../TopBar/TopBar.jsx";
import Banner from "./Banner.jsx";
import PatientInfo from "./PatientInfo.jsx";
import TodoList from "./TodoList.jsx";
import UpCommingEvent from "./UpCommingEvent.jsx";

const RightSideBar = ({ show }) => {
  return (
    <div
      className={`smooth-transition bg-[#E5E5E5] min-h-screen px-6 text-white pb-20 ${
        !show ? "ml-24" : "ml-64 pl-12"
      }`}
    >
      <TopBar show={show} />
      <div className="flex justify-between gap-16">
        <div className="basis-3/5">
          <Banner />
          <PatientInfo />
          <TodoList />
          
        </div>
        <div className="basis-2/5 pl-4 py-5 pt-4 bg-white rounded-md">
          <UpCommingEvent />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
