import React from "react";
import toggle from "../../assets/images/togglebutton.png";
import avatar from "../../assets/images/Avatar.png";
import downarrow from "../../assets/images/downarrow.png";
import Icon_Menu from "../../assets/images/Icon_Menu.png";
const TopBar = ({ show, setShow }) => {
  console.log(show)
  return (
    <div className="header-fixed w-full flex justify-between items-center py-6 px-4 z-50 sm:px-0">
      <div className="block sm:hidden">
        {!show && (
          <img
            onClick={() => setShow(!show)}
            className="cursor-pointer"
            src={Icon_Menu}
            alt="menu icon"
          />
        )}
      </div>
      <h1 className="font-[600] ml-3 text-[24px] text-primary">Home</h1>
      <div className="flex items-center">
        <div className="mr-10">
          <img src={toggle} alt="togglebtn" />
        </div>
        <div className="flex items-center">
          <img src={avatar} alt="" />
          <img src={downarrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
