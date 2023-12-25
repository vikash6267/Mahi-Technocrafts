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
        <div className='grid lg:grid-cols-3 lg:justify-between'>
{
  projects.map((pro)=>(
    <div className='pt-16 flex flex-col items-center text-center font-Raleway' key={pro.id}> 
    <a href={pro.link} title={pro.name}><img 
    className='h-[150px] hover:scale-110 hover:rotate-6 transition-all'
    src={pro.image}  alt="" /></a>

    <div className=' pt-3 '>
      <p className='text text-2xl font-bold'>{pro.name}</p>
      <p>{pro.desc}</p>
  
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