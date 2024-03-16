import React from 'react'
import { projects } from '../../data/projects'
function Projects() {
  return (
    <div className='w-11/12 mx-auto'>
        <div>
          <div className="font-Raleway text-black">
                <h2 className="text-center font-Raleway text-4xl">OUR PROJECTS</h2>
                <p className="text-xl pt-3 text-center">
                    .At the crossroads of innovation and excellence, our web solutions stand as beacons of digital prowess.
                </p>
        </div>
        <div className='grid lg:grid-cols-3 lg:justify-between gap-5'>
{
  projects.map((project)=>(
    <div className="max-w-md mx-auto bg-slate-100 rounded-lg overflow-hidden shadow-xl hover:shadow-lg transition-shadow duration-300 ">
      <a href={project.link} title={project.name}>
        <div className="overflow-hidden">
          <img
            className="w-full h-56 object-cover object-center transform transition-transform duration-300 hover:scale-110 "
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
        </div>
    </div>
  )
}

export default Projects