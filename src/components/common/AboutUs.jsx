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
        <div className="text-center text-2xl font-Raleway font-bold">
          About <h2 className="inline">Mahi TechnoCrafts</h2>
        </div>
      </div>
      <div className="flex w-full gap-3 gap-y-5 flex-wrap items-center justify-center lg:justify-between pt-6">
        {/* image */}
        <div className="bgimage"></div>

        {/* content */}
        <div className="lg:w-[55%] w-[85%]">
          <p className="font font-Raleway text-sm leading-0 text-gray-500">
            Mahi Technocrafts was  established in 2024, with a mission to empower businesses through tailored solutions that harmonize cultural heritage and modern technology. We are dedicated to collaborating closely with you, ensuring a deep understanding of your vision to deliver results that exceed expectations. <br /><br />
            Our focus on innovation and excellence drives us to continuously refine our processes, enabling startups and established companies to thrive in the fast-paced digital landscape. <br /><br />
            The founder of Mahi Technocrafts, <span className="font-bold">Vikash Maheshwari</span>, brings a wealth of experience and a passion for perfection. Under his leadership, we aim to push the boundaries of what is possible while honoring India's rich cultural roots.
          </p>

          <div className="pt-3">
            <p className="text-xl font-bold font-Raleway">Why Choose Us?</p>

            <ul className="grid lg:grid-cols-2">
              {choose.map((one) => (
                <li key={one.id} className="flex text-sm items-center pt-3">
                  <AiOutlineCaretRight className="text-blue-800" />
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
