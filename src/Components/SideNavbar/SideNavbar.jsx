import React from "react";
import Icon_Menu from "../../assets/images/Icon_Menu.png";
import logo from "../../assets/images/Vector.png";
import brand from "../../assets/images/MediDoc.png";
import home from "../../assets/images/home.png";
import sideArrow from "../../assets/images/sideArrow.png";
import profile from "../../assets/images/profile.png";
import appoinments from "../../assets/images/appointment.png";
import history from "../../assets/images/history.png";
import setting from "../../assets/images/setting.png";
import defaultbtn from "../../assets/images/Default.png";

const SideNavbar = ({ show, setShow }) => {
  return (
    <aside
      className={`${
        show ? "w-[264px] left-0" : "w-[96px] -left-24"
      } z-50 items-start fixed sm:left-0 text-secondary h-screen bg-[#FFFFFF]  smooth-transition`}
    >
      <div className="h-32 pt-6">
        {!show && (
          <img
            onClick={() => setShow(!show)}
            className="absolute  left-1/2 -translate-x-1/2 cursor-pointer"
            src={Icon_Menu}
            alt="menu icon"
          />
        )}
        {show && (
          <div className="flex mt-2">
            <img className="mr-8 ml-10" src={logo} alt="logo" />
            <img className="w-[106px] h-[34px]" src={brand} alt="brand" />
            <img
              className="absolute -right-5 cursor-pointer z-50"
              onClick={() => setShow(!show)}
              src={sideArrow}
              alt="sideArrow"
            />
          </div>
        )}
      </div>

      <nav className={`text-[16px] font-[500] overflow-hidden`}>
        <ul>
          <li className="flex items-center py-2">
            <img className="mr-10 ml-8" src={home} alt="home" />
            <span className="text-[#FF7594] whitespace-nowrap">Home</span>
          </li>
          <li className="flex items-center py-2">
            <img className="mr-10 ml-8" src={profile} alt="Patient Profile" />
            <span className="text-[#2E1619] whitespace-nowrap">
              Patient Profile
            </span>
          </li>
          <li className="flex items-center py-2">
            <img className="mr-10 ml-8" src={appoinments} alt="Appointments" />
            <span className="text-[#2E1619] whitespace-nowrap">
              Appointments
            </span>
          </li>
          <li className="flex items-center py-2">
            <img className="mr-10 ml-8" src={history} alt="Medical History" />
            <span className="text-[#2E1619] whitespace-nowrap">
              Medical History
            </span>
          </li>
          <li className="flex items-center py-2">
            <img className="mr-10 ml-8" src={setting} alt="Settings" />
            <span className="text-[#2E1619] whitespace-nowrap">Settings</span>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center w-full mt-48 md:mt-60 lg:mt-96 smooth-transition">
        {!show ? (
          <img src={defaultbtn} alt="add appoinment" />
        ) : (
          <button className="px-4 py-4 text-white text-[14px] rounded-md whitespace-nowrap bg-gradient-to-r from-hotPink to-orangePeach">
            New appointment
          </button>
        )}
      </div>
    </aside>
  );
};

export default SideNavbar;
