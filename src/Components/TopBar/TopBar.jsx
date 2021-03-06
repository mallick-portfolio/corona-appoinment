import React from "react";
import toggle from "../../assets/images/togglebutton.png";
import Toggle from "../../assets/images/Toggle button.png";
import avatar from "../../assets/images/Avatar.png";
import darkavatar from "../../assets/images/dark/Avatar.png";
import downarrow from "../../assets/images/downarrow.png";
import Icon_Menu from "../../assets/images/Icon_Menu.png";
const TopBar = ({ show, setShow, theme, setTheme }) => {
  return (
    <div className="header-fixed w-full flex justify-between items-center py-6 px-4 z-50 md:px-0">
      <div className="block md:hidden">
        {!show && (
          <img
            onClick={() => setShow(!show)}
            className="cursor-pointer"
            src={Icon_Menu}
            alt="menu icon"
          />
        )}
      </div>
      <h1 className="font-[600] md:ml-3 text-[24px] md:text-primary text-white dark:text-white ">
        Home
      </h1>
      <div className="flex items-center">
        <div className="mr-10">
          {theme !== "dark" ? (
            <img
              onClick={() => {
                localStorage.setItem("theme", "dark");
                setTheme("dark");
              }}
              src={toggle}
              alt="togglebtn"
            />
          ) : (
            <img
              onClick={() => {
                localStorage.setItem("theme", "light");
                setTheme("light");
              }}
              src={Toggle}
              alt="togglebtn"
            />
          )}
        </div>
        <div className="flex items-center">
          <img src={theme === "dark" ? darkavatar : avatar} alt="" />
          <img src={downarrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
