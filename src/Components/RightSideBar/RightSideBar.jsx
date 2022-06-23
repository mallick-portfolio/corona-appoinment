import React from "react";
import TopBar from "../TopBar/TopBar.jsx";
import Banner from "./Banner.jsx";
import CovidUpdate from "./CovidUpdate.jsx";
import PatientInfo from "./PatientInfo.jsx";
import TodoList from "./TodoList.jsx";
import UpCommingEvent from "./UpCommingEvent.jsx";

const RightSideBar = ({ show }) => {
  return (
    <div
      className={`smooth-transition bg-[#E5E5E5] min-h-screen px-6 text-white pb-12 ${
        !show ? "ml-24  pl-8" : "ml-64 pl-6"
      }`}
    >
      <TopBar show={show} />
      <div className={`flex justify-between ${show ? "gap-4" : "gap-16"}`}>
        <div className="basis-3/5">
          <Banner />
          <PatientInfo />
          <TodoList />
        </div>
        <div className="basis-2/5 rounded-md">
          <UpCommingEvent />
          <CovidUpdate />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
