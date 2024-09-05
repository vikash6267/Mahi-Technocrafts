import React, { useState, useEffect } from "react";
import logo from "../../assests/logo-pic.png";
import Service from "../Service";
import AboutUs from "./AboutUs";
import Projects from "./Projects";
import Team from "./Team";
import Contact from "./Contact";
import { langu } from "../../data/lang";
import NavbarMain from "../core/Navbar";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
function Navbar() {
 



 

  return (
    <div className="w-full">
      <NavbarMain />
      <div className="w-full fixed bg-white max-h-[70px]   z-50 ">
      
      </div>

   

      {/* top section */}
      <div className="  " id="top-section">
        <HeroSection/>
   
      </div>
     



 <div className="pt-[80px] pb-14 " id="projects">
          <Projects />
       

        </div>

    
        <div className="pt-[80px] team" id="team">
          <Team />
        </div>

        {/* <div className="pt-[80px]  " id="testimonials">
          <Testimonials />
        </div> */}


      <div className=" ">
   

        <div className="pt-[80px]  " id="service">
          <Service />
        </div>

       
  <div className="pt-5 w-full lg:w-11/12 mx-auto" id="about">
          <AboutUs />
        </div> *

        <div className="pt-[80px]  contacts  " id="contact">
          <Contact />
        </div>
        </div>
        
        <div className="h-24 lg:text-end bg-white lg:w-11/12 flex items-center lg:justify-center font-Raleway text-sm px-5">
          <p> ©2024 Mahi TechnoCrafts Design by <a href="#top-section" className="text-blue-800 underline">Mahi TechnoCrafts</a> & Team </p>
        </div>
     
    </div>
  );
}

export default Navbar;
