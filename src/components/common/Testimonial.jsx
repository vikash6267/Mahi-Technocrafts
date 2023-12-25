import React from 'react'
import { team } from '../../data/team'
function Testimonial() {
  return (
    <div>
        
        <div className="font-Raleway text-black">
                <h2 className="text-center font-Raleway text-4xl">MEET OUR TEAM</h2>
                <p className="text-xl pt-3 text-center">
                Designing the Future, Powered by Youthful Minds.
                </p>
        </div>

        <div className='grid lg:grid-cols-3 lg:justify-between justify-center '>
{
    team.map((pro)=>(
    <div className='pt-16 flex flex-col items-center text-center font-Raleway' key={pro.id}> 
   <div className='border-2 border-black p-1 rounded-xl'>
  <a href={pro.link} target='_blank' rel="noreferrer"> <img 
    className='h-[310px] '
    src={pro.image}  alt="" /></a>
   </div>

    <div className=' pt-3 '>
      <p className='text text-2xl font-bold'>{pro.name}</p>
      <p className='text-sm'>{pro.desc}</p>
  
    </div>
    </div>
  ))
}
        </div>
        
    </div>
  )
}

export default Testimonial