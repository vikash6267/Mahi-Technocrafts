"use client";
import { useEffect, useState } from "react";
import HeroSection from "@/components/common/HeroSection";
import Projects from "@/components/common/Projects";
import Team from "@/components/common/Team";
import Service from "@/components/Service";
import AboutUs from "@/components/common/AboutUs";
import Contact from "@/components/common/Contact";

function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="w-full">
      {/* top section */}
      <div className="  " id="top-section">
        <HeroSection />
      </div>

      <div className="pt-[80px] pb-14 " id="projects">
        <Projects />
      </div>

      {/* <div className="pt-[80px] team" id="team">
        <Team />
      </div> */}

      <div className=" ">
        <div className="pt-[80px]  " id="service">
          <Service />
        </div>
        <div className="pt-5 w-full lg:w-11/12 mx-auto" id="about">
          <AboutUs />
        </div>{" "}
       
        <div className="pt-[80px]  contacts  " id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Home;
