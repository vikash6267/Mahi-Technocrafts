import React from 'react'
import Carosel from '../core/Carosel'
function Testimonials() {
  return (
    <div>

<div className=" w-11/12 mx-auto flex justify-center text-center  ">
        <div className=" lg:w-[50%] space-y-4 ">
          <div>
            <h3 className=" bg-slate-50 inline-block p-1 px-3 rounded-lg border border-slate-200 text-[13px]">
            Testimonials
            </h3>
          </div>
          <h2 className=" font-DM font-semibold lg:text-[3rem] text-[2.5rem] leading-none  ">

            <span className=" text-cyan-900">What our users say</span>
          </h2>

         
        </div>
      </div>



      <div className='  w-11/12 mx-auto '>
        <Carosel />
      </div>

    </div>
  )
}

export default Testimonials