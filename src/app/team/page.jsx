import Contact from "@/components/common/Contact";
import Team from "@/components/common/Team";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="pt-[80px] team" id="team">
        <Team />
      </div>
      <div className="pt-[80px]  contacts  " id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default page;
