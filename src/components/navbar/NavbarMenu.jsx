import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  const [btn, setBtn] = useState(false);

  const toggleFn = () => setBtn(!btn);

  const closeMenu = () => setBtn(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden lg:block h-full ml-20">
        <div className="flex justify-center items-center h-full">
          <ul className="flex gap-8 font-semibold">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group flex flex-col items-center font-semibold text-[#1b1b1b] 
     hover:text-[#F97316] transition-colors duration-300 
     ${isActive ? "text-[#F97316]" : ""}`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <div
                      className={`h-[2px] mt-1 bg-[#F97316] transition-all duration-300 
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={toggleFn}
        className="flex ml-[8%] items-center w-full h-full cursor-pointer text-3xl lg:hidden"
      >
        <IoMenu />
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden`}>
        <ul
          className={`${
            btn ? "block" : "hidden"
          } absolute flex flex-col space-y-6 py-5 rounded-xl mt-4 border z-50 left-1/2 -translate-x-1/2 top-20 font-semibold text-center bg-white/20 backdrop-blur-sm w-full cursor-pointer`}
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `group hover:text-[#E3741A] transform duration-300 ${
                    isActive ? "text-[#E3741A]" : ""
                  }`
                }
              >
                {item.name}
                <div
                  className={({ isActive }) =>
                    `mx-auto h-[2px] w-0 group-hover:w-full bg-[rgb(227,116,26)] duration-300 ${
                      isActive ? " w-full bg-[rgb(227,116,26)]" : ""
                    }`
                  }
                ></div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenu;
