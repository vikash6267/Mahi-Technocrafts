import React, { useEffect, useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { navbar } from "../../data/navbar";
import mainlogo from "../../assests/logo.png";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  useEffect(() => {
    // Update active link when component mounts
    setActiveLink(window.location.pathname);
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false);
  };
  return (
    <div className=" w-screen bg-gray-300 ">
      <nav className="  lg:w-11/12 mx-auto z-20 overflow-hidden max-h-[70px]">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={mainlogo} alt="logo" className="h-[40px] p-0" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              {/* <span className=" font-bold text-blue-500 text-3xl">M</span>ahi{" "}
                <span className=" font-bold text-blue-500 text-3xl">T</span>echnoCrafts */}
            </span>
          </Link>

          <div
            className="hidden w-full lg:block xl:block  md:w-auto relative"
            id="navbar-default"
          >
            <ul className="font- flex font-DM font-semibold   flex-col p-2 md:p-0 mt-4 border md:flex-row  rtl:space-x-reverse md:mt-0 md:border-0">
              {navbar.map((menu, index) => (
                <li key={menu.id}>
                  <a
                    href={menu.path}
                    className={`scroll px-3 ${
                      activeLink === menu.path ? "active-link" : ""
                    }`}
                    onClick={() => handleLinkClick(menu.path)}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to={"/cyber-security"}
                  className={`scroll py-2 px-4 rounded-xl bg-blue-600 text-red-100 flex  items-center gap-1 ${
                    activeLink === "/cyber-security" ? "text-black" : ""
                  }`}
                  onClick={() => handleLinkClick("cyber-security")}
                >
                  <FaLaptopCode />
                  CYBER SECUITY
                </Link>
              </li>
              <span className="hover-effect"></span>
            </ul>
          </div>

          <div className="text-3xl lg:hidden ">
            {!isOpen ? (
              <IoReorderThreeSharp
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              />
            ) : (
              <IoClose
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      </nav>
      <div
        className={`${
          isOpen ? "h-auto w-full" : "h-0 w-0 "
        } z-[100] flex justify-start items-center transition-all duration-[0.5s] flex-col overflow-hidden`}
      >
        <ul
          className={`p-2 text-center lg:hidden bg-white ${
            isOpen ? "opacity-100 duration-[0.5s]" : "opacity-0 "
          } w-full`}
        >
          {navbar.map((menu, index) => (
            <li className="pt-3" key={menu.id}>
              <a
                href={menu.path}
                onClick={() => handleLinkClick(menu.path)}
                className={`scroll ${
                  isOpen ? "" : "opacity-0 pointer-events-none"
                } transition-opacity ${
                  activeLink === menu.path ? "active-link" : ""
                }`}
              >
                {menu.name}
              </a>
            </li>
          ))}

          <li className=" w-full flex justify-center">
            <Link
              to={"/cyber-security"}
              className={`scroll py-2 px-4 rounded-xl bg-blue-600 text-red-100 flex  items-center gap-1 justify-center ${
                activeLink === "/cyber-security" ? "text-black" : ""
              }`}
              onClick={() => handleLinkClick("cyber-security")}
            >
              <FaLaptopCode />
              CYBER SECUITY
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
