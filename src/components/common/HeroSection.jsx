import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import visual from "../../assests/visual.png"
import cylinder from "../../assests/cylinder.png"
import halftorus from "../../assests/half-torus.png"
import { langu } from '../../data/lang';
import ComputersCanvas from '../version 2/Computer';
import { motion } from "framer-motion"

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-black lg:text-[40px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};


function HeroSection() {
  return (
    <div className=''
  //     style={{
  //   backgroundImage: 'url("https://img.freepik.com/free-vector/black-abstract-background_1393-348.jpg")',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  //   height: '100vh', // Adjust height as needed
  // }}
    >
    {/* <div className="flex flex-col gap-y-10 lg:w-[50%] mx-auto">
          <h1 className="text-center text-blue-900 lg:text-slate-300 underline leading-tight shadow-black uppercase lg:text-3xl text-3xl font-bold tracking-wider"> Welcome </h1>

          <div>
            <p className="text-center text-white leading-tight shadow-black uppercase lg:text-3xl text-3xl font-bold tracking-wider"> Where Technology Meets Imagination, <br /> Our Code, Your Vision <br /> </p>
            <p className="mx-auto leading-0 text-center text-sm lg:w-11/12 pt-1 text-white"> Youthful visionaries, transforming the web with passion and skill </p>
          </div>
        </div>

        <a
          className="lg:text-gray-900 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          href="#contact"
        >
          Let's Devlopes
        </a> */}



{/* design  */}


{/* <div className='background'>
<div className='flex lg:justify-between  lg:flex-row md:flex-row flex-col  lg:w-11/12 md:w-11/12 lg:pt-24 pt-24 md:pt-0 mx-auto w-11/12 items-center my-auto h-full  '>

<div className='flex flex-col lg:w-[40%] lg:gap-5 md:gap-5 md:w-[50%] gap-8  '>

    <div className=' font-DM font-bold lg:text-7xl md:text-6xl text-6xl ' >
      <p  style={{ textShadow: '2px 3px 2px rgba(0, 0, 0, 0.5)' }} >Pathway to </p>
      <p className='text-custom-light-blue ' style={{ textShadow: '2px 3px 2px rgba(0, 0, 0, 0.5)' }}>productivity</p>
    </div>


    <div className=' w-[90%] text-lg'>"Elevate your achievements with our tailored software solutions. Track, motivate, and celebrate success with ease."</div>


    <div className='flex gap-3'>
    <a href="#contact" className='p-2 bg-black text-white text-lg rounded-lg'>
       
            Get in Touch
        
    </a>

    <div className='flex items-center  text-xl cursor-pointer'>  

   
    <a href="" className='flex  items-center justify-center gap-2'>
        Learn More 
        <FaArrowRight className=' mt-1 ' />

      </a>
   
      </div>
    </div>


</div>


<div className='lg:w-[37%] md:w-[70%]   lg:relative md:relative w-[80%]  '>
    <div className=' '>
      <img src={visual} height={758} width={758} alt="" className=''  />
    </div>

  <div className='mobile'>
  <div className=' absolute top-3 -left-24 md:-top-2 w-[28%]  '>
      <img src={cylinder} width={216} height={197} alt="" className=''/>
    </div>

    <div className=' absolute -bottom-28 right-10'>
      <img src={halftorus} width={180} alt="" />
    </div>

  </div>
</div>











</div>

</div> */}

{/* <div className='min-h-[70px]  bg-white w-full flex items-center h-[50px] '> 

        <ul className='lg:w-11/12 mx-auto flex gap-32 '>
          {
            langu.map((lang,index)=>(
              <li key={index} className={lang.class}>
                <img src={lang.image} alt="" />
              </li>
            ))
          }
        </ul>



</div> */}









{/* <div className='background'>
<div className='flex lg:justify-between  lg:flex-row md:flex-row flex-col  lg:w-11/12 md:w-11/12 lg:pt-24 pt-24 md:pt-0 mx-auto w-11/12 items-center my-auto h-full  '>

<div className='flex flex-col lg:w-[40%] lg:gap-5 md:gap-5 md:w-[50%] gap-8  '>

    <div className=' font-DM font-bold lg:text-7xl md:text-6xl text-6xl ' >
      <p  style={{ textShadow: '2px 3px 2px rgba(0, 0, 0, 0.5)' }} >Pathway to </p>
      <p className='text-custom-light-blue ' style={{ textShadow: '2px 3px 2px rgba(0, 0, 0, 0.5)' }}>productivity</p>
    </div>


    <div className=' w-[90%] text-lg'>"Elevate your achievements with our tailored software solutions. Track, motivate, and celebrate success with ease."</div>


    <div className='flex gap-3'>
    <a href="#contact" className='p-2 bg-black text-white text-lg rounded-lg'>
       
            Get in Touch
        
    </a>

    <div className='flex items-center  text-xl cursor-pointer'>  

   
    <a href="" className='flex  items-center justify-center gap-2'>
        Learn More 
        <FaArrowRight className=' mt-1 ' />

      </a>
   
      </div>
    </div>


</div>


<div className='lg:w-[37%] md:w-[70%]   lg:relative md:relative w-[80%]  '>
    <div className=' '>
      <img src={visual} height={758} width={758} alt="" className=''  />
    </div>

  <div className='mobile'>
  <div className=' absolute top-3 -left-24 md:-top-2 w-[28%]  '>
      <img src={cylinder} width={216} height={197} alt="" className=''/>
    </div>

    <div className=' absolute -bottom-28 right-10'>
      <img src={halftorus} width={180} alt="" />
    </div>

  </div>
</div>











</div>

</div> */}



<section className="relative w-screen h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[60px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}
        <div>
          <h1 className={`${styles.heroHeadText}`}>Welcome To <span className="text-[#314b81]">Mahi TechnoCrafts</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-[#f1111]`}>
          Elevate your achievements with our tailored software solutions. Track, motivate, and celebrate success with ease.
          </p>
        </div>

      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-[30px] flex  justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                x: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}

              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        
        </a>
      </div>
    </section>




    </div>
  )
}

export default HeroSection