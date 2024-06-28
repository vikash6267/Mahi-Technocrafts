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
      <div className="w-full fixed bg-white max-h-[70px]   z-50 ">
      
      <NavbarMain />
      </div>

   

      {/* top section */}
      <div className="  " id="top-section">
        <HeroSection/>
   
      </div>
     
      {/* <div className='min-h-[70px] bg-white w-full flex items-center h-[50px] justify-center'> 
  <ul className='w-11/12 mx-auto flex lg:gap-32 md:gap-20 gap-8'>
    {
      langu.map((lang, index) => (
        <li key={index} className={lang.class}>
          <img src={lang.image} alt="" style={{ minWidth: '50px', maxWidth: '90vw' }} />
        </li>
      ))
    }
  </ul>
</div> */}


 <div className="pt-[80px] pb-14 projects" id="projects">
          <Projects />
       

        </div>

    
        <div className="pt-[80px] team" id="team">
          <Team />
        </div>

        {/* <div className="pt-[80px]  " id="testimonials">
          <Testimonials />
        </div> */}


      <div className="cont">
        {/* <div className="pt-5 w-full lg:w-11/12 mx-auto" id="about">
          <AboutUs />
        </div> */}

        <div className="pt-[80px] services " id="service">
          <Service />
        </div>

       


        <div className="pt-[80px] pb-[150px] contacts" id="contact">
          <Contact />
        </div>
        </div>
        <div className="h-24 lg:text-end lg:w-11/12 flex items-center lg:justify-center font-Raleway text-sm">
          <p> ©2024 Mahi TechnoCrafts Design by <a href="#top-section" className="text-blue-800 underline">Mahi TechnoCrafts</a> & Team </p>
        </div>
     
    </div>
  );
}

export default Navbar;
