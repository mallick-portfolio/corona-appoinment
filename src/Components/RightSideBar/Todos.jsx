import React from "react";
import uncheck from "../../assets/images/uncheck.png";
import check from "../../assets/images/Mask.png";
import completed from "../../assets/images/Icon_Vector_Check.png";
const Todos = () => {
  return (
    <>
      <div className="flex justify-between items-center py-8">
        <div className="text-secondary text-[14px] flex items-center">
          <img className="mr-3" src={uncheck} alt="" /> <span>Select All</span>
        </div>
        <div className="flex mr-2 items-center px-2 py-1 text-white text-[14px] rounded-md whitespace-nowrap bg-gradient-to-r from-hotPink to-orangePeach">
          <img className="mr-1" src={check} alt="" /> Done
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-secondary text-[14px] flex items-center">
          <img className="mr-3" src={completed} alt="" />{" "}
          <h5>
            Select Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <span className="text-neutral">Last Added: 10 sep 2022</span>
          </h5>
        </div>
      </div>
      <div className="flex my-3 justify-between items-center">
        <div className="text-secondary text-[14px] flex items-center">
          <img className="mr-3" src={uncheck} alt="" />{" "}
          <h5>
            Select Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <span className="text-neutral">Last Added: 10 sep 2022</span>
          </h5>
        </div>
      </div>
      <div className="flex my-3 justify-between items-center">
        <div className="text-secondary text-[14px] flex items-center">
          <img className="mr-3" src={uncheck} alt="" />{" "}
          <h5>
            Select Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <span className="text-neutral">Last Added: 10 sep 2022</span>
          </h5>
        </div>
      </div>
      <div className="flex my-3 justify-between items-center">
        <div className="text-secondary text-[14px] flex items-center">
          <img className="mr-3" src={uncheck} alt="" />{" "}
          <h5>
            Select Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <span className="text-neutral">Last Added: 10 sep 2022</span>
          </h5>
        </div>
      </div>
      <div className="flex my-3 justify-between items-center">
        <div className="text-secondary text-[14px] flex items-center">
          <img className="mr-3" src={uncheck} alt="" />{" "}
          <h5>
            Select Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <span className="text-neutral">Last Added: 10 sep 2022</span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Todos;
