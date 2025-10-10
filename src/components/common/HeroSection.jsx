"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

// Define simplified and smaller styles directly
const heroStyles = {
  // Padding adjusted for consistent look
  paddingX: "px-4 sm:px-6 lg:px-8",

  // Heading text is now smaller (max 5xl on desktop)
  heroHeadText: "font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-6xl",

  // Subtext is smaller (max lg on desktop)
  heroSubText: "font-medium text-base sm:text-lg md:text-lg lg:text-xl mt-3",
};

function HeroSection() {
  // Keeping the scroll logic simple, though it's not visually used yet
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 20);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    // Outer container for background and full viewport height
    <div className="bghero w-full">
      <section className="relative w-full min-h-screen flex justify-center items-center">
        {/* Content Wrapper (Max-width for centering) */}
        <div
          className={`${heroStyles.paddingX} h-full w-full max-w-7xl mx-auto flex flex-col justify-center`}
        >
          {/* Text Content Container */}
          {/* Constrain width further to avoid stretching text across 7xl */}
          <div className=" w-full space-y-3 text-left">
            {/* Main Heading */}
            <h1
              className={`${heroStyles.heroHeadText} text-gray-900 font-DM leading-tight`}
            >
              Welcome To{" "}
              <span className="text-blue-600">Mahi TechnoCrafts</span>
            </h1>

            {/* Subtext/Slogan */}
            <p
              className={`${heroStyles.heroSubText} text-gray-700 font-Raleway lg:w-4/5`}
            >
              Elevate your achievements with{" "}
              <span className="font-bold">Mahi Technocrafts</span> software
              solutions. Track, motivate, and celebrate success with ease.
            </p>

            {/* Action Button */}
            <div className="mt-6 pt-4">
              <Link
                href="/contact"
                // Button text size reduced to base/lg
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold text-base rounded-lg shadow-xl hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
