import React from "react";
import uncheck from "../../assets/images/Mask.png";
import Todos from "./Todos.jsx";
const TodoList = () => {
  return (
    <div className="bg-white px-4 pb-24 pt-8 rounded-md">
      <h1 className="text-secondary text-[16px] font-medium mb-2">
        To-Do List
      </h1>
      <div className="flex justify-between">
        <div>
          <input
            type="text"
            className="w-[650px] h-[76px] pl-4 rounded-md border[#EDEBEB] border-2 outline-none text-secondary"
          />
        </div>
        <div className="ml-4">
          <button
            type="submit"
            className="flex ml-2 items-center px-3 py-1 text-white text-[14px] rounded-md whitespace-nowrap bg-gradient-to-r from-hotPink to-orangePeach"
          >
            <img className="mr-1" src={uncheck} alt="" /> Add
          </button>
        </div>
      </div>
      <Todos />
    </div>
  );
};

export default TodoList;
