import React, { useState } from "react";
import logo from "../../assests/logo-pic.png";
import { navbar } from "../../data/navbar";
import Service from "../Service";
import AboutUs from "./AboutUs";
import Projects from "./Projects";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const[isOpen,SetIsOpen] = useState(false)
 
  return (
   
    <div className="w-full">
     
      <div className="w-full fixed bg-white h-[70px]  border-b-[4px]">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 lg:w-11/12 mx-auto">
        
          <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="#top-section"
              onClick={()=>SetIsOpen(false)}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {/* <img src={logo} className="h-8" alt="Mahi Logo" /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
               <span className=" font-bold text-blue-500 text-3xl">M</span>ahi  <span className=" font-bold text-blue-500 text-3xl">T</span>echnoCrafts
              </span>
            </a>
            
            {/* destop */}
            <div
              className="hidden w-full lg:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {navbar.map((menu,index) => (
                  <li key={index}>
                    <a
                      href={menu.path}
                     
                      className="scroll block px-3 "
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-3xl lg:hidden dark:text-gray-100">
           
          
            {
              !isOpen ?  <IoReorderThreeSharp onClick={()=>SetIsOpen(!isOpen)}  />:  <IoClose onClick={()=>SetIsOpen(!isOpen)}  />
            }
            </div>


           
          </div>
         
        </nav>
        <div className={`${
            isOpen
              ? "h-auto "
              : "h-0 "
          } z-[100] flex justify-start items-center transition-all duration-[1s] flex-col overflow-hidden`}>
        <ul className={`p-2 text-center lg:hidden bg-white ${
            isOpen
              ? "opacity-100 duration-[0.8s] "
              : "opacity-0 duration-[0.45s]  "
          } w-full`}>
                {navbar.map((menu,index) => (
                  <li
                  className="pt-3"
                   key={index}>
                    <a
                      href={menu.path}
                     onClick={()=>SetIsOpen(!isOpen)}
                      className={`scroll    ${isOpen ? " " : " opacity-0"} transition-all`}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
        </div>
      </div>

      {/* top section */}
      <div
        className="h-[calc(100vh-50px)] bg-red-500 flex flex-col gap-y-6 items-center justify-center text-4xl background w-full mx-auto"
        id="top-section"
      >
        <div className="flex flex-col gap-y-10 lg:w-[50%] mx-auto">
          <h1 className="text-center text-blue-900 lg:text-slate-300 underline leading-tight shadow-black uppercase  lg:text-3xl text-3xl font-bold tracking-wider">
            {" "}
            Welcome{" "}
          </h1>

          <div>
            <p className="text-center  text-white leading-tight shadow-black uppercase  lg:text-3xl text-3xl font-bold tracking-wider">
              Where Technology Meets Imagination, <br /> Our Code, Your Vision
              <br />
            </p>
            <p className="mx-auto leading-0 text-center text-sm lg:w-11/12 pt-1 text-white">
              Youthful visionaries, transforming the web with passion and skill
            </p>
          </div>
        </div>

        <a
          className="lg:text-gray-900 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          href="#contact"
        >
          {" "}
          Let's Devlopes
        </a>
      </div>

      <div >
        <div className="pt-5 w-full lg:w-11/12 mx-auto" id="about">
          <AboutUs />
        </div>

        <div className="pt-[80px]  " id="service">
          <Service />
        </div>

        <div
          className="pt-[80px] pb-14 "
          id="projects"
        >
          <Projects />
        </div>

     
        <div
          className="pt-[80px]"
          id="team"
        >
                   <Testimonial />

        </div>

        <div
          className="mt-[80px] pb-[150px] bg-blue-400"
          id="contact"
        >
          <Contact />
        </div>
        <div 
      
        className="h-24 lg:text-end lg:w-11/12 flex items-center  lg:justify-center font-Raleway text-sm">
<p >©2024 Mahi TechnoCrafts Design by <a href="#top-section" className="text-blue-800 underline">Mahi TechnoCrafts</a> & Team</p>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
