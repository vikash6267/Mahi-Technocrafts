import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import visual from "../../assests/visual.png"
import cylinder from "../../assests/cylinder.png"
import halftorus from "../../assests/half-torus.png"
import { langu } from '../../data/lang';
import ComputersCanvas from '../version 2/Computer';
import { motion } from "framer-motion"
import Cube from "../Cube"



const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-black lg:text-[40px] sm:text-[60px] xs:text-[50px] text-[30px] lg:leading-[98px] mt-10 lg:mt-2",
  heroSubText:
    "font-medium lg:text-[25px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};



function HeroSection() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) { // Adjust the scroll value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className='bghero'

    >
    
  

<section className="relative w-screen lg:h-screen h-[calc(100vh-160px)]  mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[60px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      
        <div>
          <h1 className={`${styles.heroHeadText} font-DM`}>Welcome To <span className="text-[#314b81]">Mahi TechnoCrafts</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-[#11143b] font-Raleway lg:w-[70%]`}>
          Elevate your achievements with <span className=''>Mahi Technocrafts</span> software solutions. Track, motivate, and celebrate success with ease.
          </p>
        </div>

      </div>
      {/* <ComputersCanvas /> */}
      {/* <div className="absolute xs:bottom-10 bottom-32 left-[50%] w-[30px] h-[50px] flex justify-center items-center">
      <a href="#about">
        <div className="">
          <motion.div
            animate={{
              x: [0, 34, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className='w-3 h-3 rounded-full bg-red-500 mb-1'
          />
        </div>
      </a>
    </div> */}

{/* 
{ !isScrolled &&   <div className="absolute xs:bottom-10 bottom-0 left-0  h-[50px] flex justify-center items-center bg-blue-500 w-screen lg:hidden">
      <a href="#about">
        <div className="">
          <motion.div
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className='w-3 h-3 rounded-full bg-red-500 mb-1'
          />
          Scroll Down
        </div>
      </a>
    </div>} */}
    </section>




    </div>
  )
}

export default HeroSection