import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

function AboutUs() {
  const choose = [
    {
      id: 1,
      title: "Custom Crafted Solutions",
    },
    {
      id: 2,
      title: "Dedicated to Your Growth",
    },
    {
      id: 3,
      title: "Commitment to Excellence",
    },
    {
      id: 4,
      title: "Goal Oriented, ROI-Driven Focus",
    },
    {
      id: 5,
      title: "Low Budget",
    },
    { id: 6, title: "Passion for Perfection" },
  ];
  return (
    <div className="w-full pt-8 lg:h-[400px]">
      <div>
        <div className="text-center text-2xl font-Raleway font-bold  ">
          About <h2 className=" inline">Mahi TechnoCrafts</h2>{" "}
        </div>
      </div>
      <div className="flex w-full  gap-3 gap-y-5 flex-wrap items-center justify-center lg:justify-between pt-6">
        {/* image */}
        <div className="bgimage"></div>

        {/* content */}
        <div className="lg:w-[55%] w-[85%]">
        <p className="font font-Raleway text-sm leading-0 text-gray-500">
  We're more than service providers; we're partners in your success story. Our dedication to your business's growth is unwavering. We strive to understand your vision, collaborate closely, and deliver solutions that not only meet but exceed your expectations. <br /> <br />
  At <h2 className="text-red-700 font-bold inline">Mahi TechnoCrafts</h2>, we see beyond boundaries. We're not just developers; we're visionaries crafting the digital future. Our goal is to empower startups and businesses, offering them the tools and solutions necessary to thrive in the ever-evolving digital landscape.
</p>
<br />
<p className="font font-Raleway text-sm leading-0 text-gray-500">
"Mahi Technocrafts" blends cultural heritage with modern technology. "Mahi" represents our commitment to sustainability and India's cultural roots, while "Technocrafts" signifies our technical expertise and innovation.
</p>

          <div className="pt-3">
            <p className="text-xl font-bold font-Raleway">Why Choose Us?</p>

            <ul className="grid lg:grid-cols-2 ">
              {choose.map((one) => (
                <li key={one.id} className="flex text-sm items-center pt-3">
                  {" "}
                  <AiOutlineCaretRight className=" text-blue-800" />
                  {one.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
