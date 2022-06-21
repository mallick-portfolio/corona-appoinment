import React from "react";
import toggle from "../../assets/images/togglebutton.png";
import avatar from "../../assets/images/Avatar.png";
import downarrow from "../../assets/images/downarrow.png";
const TopBar = ({ show }) => {
  return (
    <div className=" flex justify-between items-center">
      <h1 className="font-[600] text-[24px] text-primary">hello world</h1>
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
