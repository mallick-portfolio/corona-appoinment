import React from "react";
import uncheck from "../../assets/images/Mask.png";
import add from "../../assets/images/small.png";
import Todos from "./Todos.jsx";

const TodoList = () => {
  return (
    <div className="bg-white my-8 md:my-0 px-3 xl:px-4 lg:px-2 xl:pb-24 lg:py-4 xl:pt-8 rounded-md mx-6 md:mx-0 border-2">
      <h1 className="text-secondary text-[16px] font-medium mb-2 pt-4 md:pt-0">
        To-Do List
      </h1>
      <div className="xl:flex justify-between">
        <div className="relative grow w-full">
          <input
            type="text"
            className="w-full h-[76px] pl-4 rounded-md border[#EDEBEB] border-2 outline-none text-secondary"
          />
          <img className="absolute bottom-2 right-2 block lg:hidden" src={add} alt="" />
        </div>
        <div className="lg:ml-4 flex-none mr-3 hidden xl:block ">
          <button
            type="submit"
            className="flex items-center px-3 py-1 ml-2 text-white text-[14px] rounded-md whitespace-nowrap bg-gradient-to-r from-hotPink to-orangePeach"
          >
            <img className="mr-1" src={uncheck} alt="" /> <span>Add</span>
          </button>
        </div>
      </div>
      <Todos />
    </div>
  );
};

export default TodoList;
