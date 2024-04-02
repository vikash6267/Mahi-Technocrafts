import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import visual from "../../assests/visual.png"
import cylinder from "../../assests/cylinder.png"
import halftorus from "../../assests/half-torus.png"
import { langu } from '../../data/lang';



function HeroSection() {
  return (
    <div>
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

<div className='background'>
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

</div>

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
    </div>
  )
}

export default HeroSection