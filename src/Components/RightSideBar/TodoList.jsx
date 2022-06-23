import React from "react";
import uncheck from "../../assets/images/Mask.png";
import add from "../../assets/images/small.png";
import Todos from "./Todos.jsx";

const TodoList = () => {
  return (
    <div className="bg-white lg:px-4 md:px-2 lg:pb-24 md:py-4 lg:pt-8 rounded-md ">
      <h1 className="text-secondary text-[16px] font-medium mb-2">
        To-Do List
      </h1>
      <div className="lg:flex justify-between">
        <div className="relative">
          <input
            type="text"
            className="lg:w-[650px] md:w-[320px] h-[76px] pl-4 rounded-md border[#EDEBEB] border-2 outline-none text-secondary"
          />
          <img className="absolute bottom-2 right-2" src={add} alt="" />
        </div>
        <div className="md:ml-4 w-full md:hidden lg:block">
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
