import React from "react";
import { projects } from "../../data/projects";
import { heading } from "../../data/projectsHeading";
import { FaArrowRight } from "react-icons/fa6";
import torus from "../../assests/torus.png";

import pyramid from "../../assests/pyramid.png";
import Testing from "../core/Testing";
function Projects() {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center relative ">
    

      <div className=" w-full flex justify-center text-center  ">
        <div className=" lg:w-[50%] space-y-4 ">
          <div>
            <h4 className="  inline-block p-1 px-3 rounded-lg border border-gray-500 text-[13px]">
              Boost your productivity
            </h4>
          </div>
          <h4 className="  font-semibold lg:text-[3rem] md:text-[3rem] text-[2rem] leading-tight font-DM  ">
            A more effective way <br />{" "}
            <span className=" text-cyan-900">to track progress of <br /> <span className=" text-orange-400">Mahi Technocrafts</span></span>
          </h4>

          <p className="lg:text-[22px] text-sm font-ubuntu lg:leading-8 leading-6 ">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
      </div>

      <div className=" z-0 lg:mt-10 ">
      

<Testing/>

      </div>

      <div className="mt-10 font-DM w-11/12 mx-auto ">
        <ul className="flex flex-wrap justify-center lg:justify-evenly items-start head-media  ">
          {heading.map((head) => (
            <li
              className=" lg:w-[22%] min-h-[220px] flex flex-col gap-1 lg:gap-2 shadow-2xl shadow-rose-600 px-3 py-3 hover:scale-95 "
              key={head.title}
            >
              <div>
                <img src={head.icon} alt="" />
              </div>
              <h4 className="lg:text-lg font-semibold text-[#2527c7b6] font-ubuntu ">{head.title}</h4>
              <p className=" text-[14px]">{head.desc}</p>
              <a href="#" className="flex items-center gap-2 mt-2 text-start text-[14px] text-[#19034db6]">
                Learn More
                <FaArrowRight className="" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mobile">
        <div className=" absolute -top-10 left-0">
          <img src={torus} alt="" width={168} />
        </div>
        <div className=" absolute -bottom-32 right-0">
          <img src={pyramid} alt="" width={168} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
