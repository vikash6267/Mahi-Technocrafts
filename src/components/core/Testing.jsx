import React, { useState } from 'react';
import { projects } from '../../data/projects';

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState("All");
  const [showMore, setShowMore] = useState(false);

  // Get unique types from projects
  const types = ["All", ...new Set(projects.map(project => project.type))];

  // Filter projects based on active tab
  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(project => project.type === activeTab);

  // Limit projects to show 5 on mobile and 10 on desktop, unless showMore is true
  const projectLimit = showMore ? filteredProjects.length : (window.innerWidth < 768 ? 5 : 5);
  const displayedProjects = filteredProjects.slice(0, projectLimit);

  return (
    <>
      {/* Tab Buttons */}
      <div className="flex justify-center mb-8 space-x-4 overflow-x-auto">
        {types.map((type, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(type);
              setShowMore(false); // Reset showMore when changing tabs
            }}
            className={`lg:py-2 lg:px-6 py-1 px-3 rounded-lg lg:text-lg text-[12px] mt-3 font-semibold transition-all duration-300 ${
              activeTab === type
                ? "bg-black text-white shadow-lg"
                : "bg-gray-200 text-black hover:bg-black hover:text-white"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-10 lg:gap-10 px-2">
        {displayedProjects.map((currElem) => (
          <a
            href={currElem.link}
            target="_blank"
            rel="noreferrer"
            className="max-w-sm min-h-[300px] rounded overflow-hidden bg-gray-100 workCard p-2 shadow-2xl shadow-amber-400"
            key={currElem.id}
          >
            <img className="w-full h-[50%]" src={currElem.image} alt={currElem.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-4 text-center">
                {currElem.name}
              </div>
              <p className="text-gray-700 text-base text-center">
                {currElem.desc}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Show More Button */}
      {filteredProjects.length > projectLimit && (
        <div className="flex justify-center my-4">
          <button
            onClick={() => setShowMore(!showMore)}
            className="py-2 px-6 rounded-lg text-lg font-semibold bg-black text-white hover:bg-gray-700 transition-all duration-300"
          >
            {showMore ? 'Show Less' : 'More Projects'}
          </button>
        </div>
      )}
    </>
  );
}
