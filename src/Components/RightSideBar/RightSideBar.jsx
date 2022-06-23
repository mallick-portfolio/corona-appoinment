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
        !show
          ? "lg:ml-24 lg:pl-8 md:ml-20 md:pl-8"
          : "lg:ml-64 lg:pl-6  md:ml-20 md:pl-8"
      }`}
    >
      <TopBar show={show} />
      <div
        className={`lg:flex justify-between ${show ? "lg:gap-4" : "lg:gap-16"}`}
      >
        <div className="basis-3/5">
          <Banner />
          <PatientInfo />
          <div className="flex md:gap-2">
            <div className="md:w-1/2 lg:w-full">
              <TodoList />
            </div>
            <div className="lg:hidden md:block md:w-1/2 lg:w-full">
              <UpCommingEvent />
            </div>
          </div>
        </div>
        <div className="basis-2/5 rounded-md">
          <div className="md:hidden lg:block">
            <UpCommingEvent />
          </div>
          <CovidUpdate />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
