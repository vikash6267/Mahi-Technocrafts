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
      {/* <div>
          <div className="font-Raleway text-black">
                <h2 className="text-center font-Raleway text-4xl">OUR PROJECTS</h2>
                <p className="text-xl pt-3 text-center">
                    .At the crossroads of innovation and excellence, our web solutions stand as beacons of digital prowess.
                </p>
        </div>
        <div className='grid lg:grid-cols-3 lg:justify-between gap-5'>
{
  projects.map((project)=>(
    <div className="max-w-md mx-auto bg-slate-100 rounded-lg overflow-hidden shadow-xl hover:shadow-lg transition-shadow duration-300 " key={project.id}>
      <a href={project.link} title={project.name}>
        <div className="overflow-hidden">
          <img
            className="w-full h-56 object-cover object-center transform transition-transform duration-300 hover:scale-110 z-10 "
            src={project.image}
            alt={project.name}
          />
        </div>
      </a>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-amber-950">{project.name}</div>
        <p className="text-gray-700 text-base">{project.desc}</p>
      </div>
    </div>
  ))
}
        </div>
        </div> */}

      <div className=" w-full flex justify-center text-center  ">
        <div className=" lg:w-[50%] space-y-4 ">
          <div>
            <h3 className=" bg-slate-50 inline-block p-1 px-3 rounded-lg border border-slate-200 text-[13px]">
              Boost your productivity
            </h3>
          </div>
          <h2 className=" font-DM font-semibold lg:text-[3rem] md:text-[3rem] text-[2.2rem] leading-none  ">
            A more effective way <br />{" "}
            <span className=" text-cyan-900">to track progress</span>
          </h2>

          <p className="text-[22px]">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
      </div>

      <div className=" z-0 lg:mt-10 ">
        {/* <div className="grid lg:grid-cols-4 lg:justify-between gap-8 p-8">
          {projects.map((project) => (
            <div
              className="max-w-md mx-auto bg-slate-100 rounded-lg overflow-hidden shadow-xl hover:shadow-lg transition-shadow duration-300 "
              key={project.id}
            >
              <a href={project.link} title={project.name}>
                <div className="overflow-hidden">
                  <img
                    className="w-full h-48 object-cover object-center transform transition-transform duration-300 hover:scale-110 z-10 "
                    src={project.image}
                    alt={project.name}
                  />
                </div>
              </a>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-amber-950">
                  {project.name}
                </div>
                <p className="text-gray-700 text-base">{project.desc}</p>
              </div>
            </div>
          ))}
        </div> */}

<Testing/>

      </div>

      <div className="mt-10 font-DM w-11/12 mx-auto">
        <ul className="flex flex-wrap justify-center lg:justify-evenly items-start head-media  ">
          {heading.map((head) => (
            <li
              className=" lg:w-[22%] flex flex-col gap-1 lg:gap-2  "
              key={head.title}
            >
              <div>
                <img src={head.icon} alt="" />
              </div>
              <h3 className="lg:text-xl font-semibold">{head.title}</h3>
              <p>{head.desc}</p>
              <a href="#" className="flex items-center gap-2 mt-2 text-start">
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
