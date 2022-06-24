import React from "react";
import TopBar from "../TopBar/TopBar.jsx";
import Banner from "./Banner.jsx";
import CovidUpdate from "./CovidUpdate.jsx";
import PatientInfo from "./PatientInfo.jsx";
import TodoList from "./TodoList.jsx";
import UpCommingEvent from "./UpCommingEvent.jsx";

const RightSideBar = ({ show, setShow, theme, setTheme }) => {
  return (
    <div
      className={`smooth-transition md:bg-[#E5E5E5] dark:bg-[#150A09] min-h-screen md:px-6 text-white pb-12 ${
        !show
          ? "xl:ml-24 xl:pl-8 lg:ml-20 lg:pl-8"
          : "xl:ml-64 xl:pl-6  lg:ml-20 lg:pl-8"
      }`}
    >
      <TopBar theme={theme} setTheme={setTheme} show={show} setShow={setShow} />
      <div
        className={`xl:flex items-stretch justify-between ${show ? "xl:gap-4" : "xl:gap-16"}`}
      >
        <div className="basis-3/5 flex-1">
          <Banner  />
          <PatientInfo theme={theme} />
          <div className="flex flex-col-reverse lg:flex-row lg:gap-2">
            <div className="lg:w-1/2 xl:w-full">
              <TodoList />
            </div>
            <div className="xl:hidden lg:block lg:w-1/2 xl:w-full">
              <UpCommingEvent />
            </div>
          </div>
        </div>
        <div className="basis-2/5 flex-1 rounded-md">
          <div className="hidden xl:block">
            <UpCommingEvent />
          </div>
          <CovidUpdate />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
