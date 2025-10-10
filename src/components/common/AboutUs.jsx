import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import Image from "next/image";
import aboutImage from "@/assests/about.jpg"; // Placeholder path

function AboutUs() {
  const choose = [
    { id: 1, title: "Custom Crafted Solutions" },
    { id: 2, title: "Dedicated to Your Growth" },
    { id: 3, title: "Commitment to Excellence" },
    { id: 4, title: "Goal Oriented, ROI-Driven Focus" },
    { id: 5, title: "Cost-Effective Solutions" },
    { id: 6, title: "Passion for Perfection" },
  ];

  return (
    <section className="py-0 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            About <span className="text-blue-600">Mahi TechnoCrafts</span>
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            Empowering businesses with modern technology and cultural harmony.
          </p>
        </div>

        {/* Image + Text Section */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 md:gap-12">
          {/* Image */}
          <div className="lg:w-5/12 w-full rounded-xl overflow-hidden shadow-2xl relative">
            <div className="relative pt-[60%] lg:h-full lg:pt-0">
              <Image
                src={aboutImage}
                alt="Mahi Technocrafts Team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover absolute"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-7/12 w-full">
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Mahi Technocrafts was established in <b>2024</b>, with a mission
              to empower businesses through tailored solutions that harmonize
              cultural heritage and modern technology. We are dedicated to
              collaborating closely with you, ensuring a deep understanding of
              your vision to deliver results that <b>exceed expectations</b>.
            </p>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Our focus on innovation and excellence drives us to continuously
              refine our processes, enabling startups and established companies
              to thrive in the fast-paced digital landscape. The founder of Mahi
              Technocrafts, <b>Vikash Maheshwari</b>, brings a wealth of
              experience and a passion for perfection. Under his leadership, we
              aim to push the boundaries of what is possible while honoring
              India&apos;s rich cultural roots.
            </p>

            {/* Why Choose Us */}
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-1 inline-block border-blue-600">
                Why Choose Us?
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {choose.map((one) => (
                  <li
                    key={one.id}
                    className="flex items-start text-base text-gray-700"
                  >
                    <AiOutlineCaretRight className="text-blue-600 text-xl mt-1 mr-2 flex-shrink-0" />
                    <span className="font-medium">{one.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
