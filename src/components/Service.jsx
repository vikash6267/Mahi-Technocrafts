import React from "react";
import { service } from "../data/service";

function Service() {
  return (
    <div className=" mx-auto w-full font-Raleway min-h-full ">
      <div className="lg:w-11/12 mx-auto p-5 flex flex-col items-center">
        <div className=" font-DM text-black">
          <h4 className="text-center font-Raleway text-4xl">OUR SERVICES</h4>
          <p className="text-xl pt-3 text-center">
            You Imagine , We Creates : A Perfect Partnership.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 justify-between w-full grid-cols-1 ">
          {
            service.map((ser,index)=>(
              <div key={index} className=" flex flex-col items-center gap-2 p-5  text-black leading-6  font-extralight text-center">
                <div
                className="icon flex items-center justify-center"
                >{ser.image}</div>
                <p className=" font-semibold text-black ">{ser.name}</p>
                <p className="p-1 text-[12px]">{ser.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Service;
