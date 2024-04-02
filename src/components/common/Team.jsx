import React from 'react'
import { team } from '../../data/team'
import TeamCarousal from './TeamCarousal'

function Team() {
  return (
    <div>
        
        {/* <div className="font-Raleway text-black">
                <h2 className="text-center font-Raleway text-4xl">MEET OUR TEAM</h2>
                <p className="text-xl pt-3 text-center">
                Designing the Future, Powered by Youthful Minds.
                </p>
        </div>

        <div className='grid lg:grid-cols-4  gap-2 lg:justify-between justify-center '>
{
    team.map((pro)=>(
    <div className='pt-16 flex flex-col items-center text-center font-Raleway' key={pro.id}> 
   <div className='border-2 border-black p-1 rounded-xl'>
  <a href="https://www.instagram.com/mahi_technocrafts" target='_blank' rel="noreferrer"> <img 
    className='h-[310px] '
    src={pro.image}  alt="" /></a>
   </div>

    <div className=' pt-3 flex flex-col gap-1'>
      <p className='text text-2xl font-bold'>{pro.name} </p>
      <p className=' text-sm'> Exprience -{pro.exprience}</p>

      <p className='text-sm'>{pro.desc}</p>


  
    </div>
    </div>
  ))
}
        </div> */}


        <div className="  flex justify-center text-center  ">

        <div className=" lg:w-[50%] space-y-4  ">
          <div>
            <h3 className=" bg-slate-50 inline-block p-1 px-3 rounded-lg border border-slate-200 text-[13px]">
            Everything you need
            </h3>
          </div>
          <h2 className=" font-DM font-semibold lg:text-[3rem] md:text-[3rem] text-[2.2rem] leading-none  ">
          Streamlined for easy <br />{" "}
            <span className=" text-cyan-900">project with our team</span>
          </h2>

          <p className="text-[22px]">
          Enjoy customization in your product, tools, and smart tracking all with our team. Set project, and see your progress simply and quickly.
          </p>
        </div>
        /</div>



        <div className=" z-0 lg:mt-10 w-11/12 mx-auto ">
          <TeamCarousal/>
        /</div>
    </div>
  )
}

export default Team