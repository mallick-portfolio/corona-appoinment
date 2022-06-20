import React from "react";
import Icon_Menu from "../../assets/images/Icon_Menu.png";
import logo from "../../assets/images/Vector.png";
import brand from "../../assets/images/MediDoc.png";
import home from "../../assets/images/home.png";
import sideArrow from "../../assets/images/sideArrow.png";

const SideNavbar = ({ show, setShow }) => {
  return (
    <section
      className={`${
        show ? "w-[264px]" : "w-[96px]"
      } z-10 items-start fixed text-secondary h-screen bg-[#ccc]  transition-all duration-300 ease-in-out`}
    >
      <div className="h-32 mt-10">
        {!show && (
          <img
            onClick={() => setShow(!show)}
            className="absolute left-1/2 -translate-x-1/2 cursor-pointer"
            src={Icon_Menu}
            alt="menu icon"
          />
        )}
        {show && (

            <div className="flex">
              <img className="mr-8 ml-10" src={logo} alt="logo" />
              <img className="w-[106px] h-[34px]" src={brand} alt="brand" />
              <img
                className="absolute -right-6 z-50"
                onClick={() => setShow(!show)}
                src={sideArrow}
                alt="sideArrow"
              />
            </div>
     
        )}
      </div>

      <ul className={``}>
        <li
          // style={({ isActive }) => (isActive ? activeStyle : undefined)}

          className="flex items-center"
        >
          <img className="mr-10 ml-8" src={home} alt="home" />
          <span className="">Home</span>
        </li>
      </ul>
    </section>
  );
};

export default SideNavbar;
