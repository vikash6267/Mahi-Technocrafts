import React from "react";
import { team } from "../../data/team";
import TeamCarousal from "./TeamCarousal";

function Team() {
  return (
    <div>
      <div className="  flex justify-center text-center  ">
        <div className=" lg:w-[50%] space-y-4  ">
          <div>
            <h4 className=" bg-slate-50 inline-block p-1 px-3 rounded-lg border border-slate-200 text-[13px]">
              Everything you need
            </h4>
          </div>
          <h4 className="  font-semibold lg:text-[3rem] md:text-[3rem] text-[2rem] leading-tight font-DM  ">
            Streamlined for easy <br />{" "}
            <span className=" text-cyan-900">project with our team</span>
          </h4>

          <p className="lg:text-[22px] text-sm font-ubuntu lg:leading-8 leading-6 ">
            Enjoy customization in your product, tools, and smart tracking all
            with our team. Set project, and see your progress simply and
            quickly.
          </p>
        </div>
      </div>

      <div className=" z-0 lg:mt-10 w-11/12 mx-auto ">
        <TeamCarousal />
      </div>
    </div>
  );
}

export default Team;
