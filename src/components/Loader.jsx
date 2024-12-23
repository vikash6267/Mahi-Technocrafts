import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Loader() {
  const container = useRef();

  useEffect(() => {
    // Disable scrolling when loader is active
    document.body.style.overflow = "hidden";

    // GSAP animation
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.0,
        delay: 2.0,
        scaleX: 14,
        scaleY: 8,
        onComplete: () => {
          // Enable scrolling after animation completes
          document.body.style.overflow = "auto";
        },
      }
    );

    gsap.fromTo(
      ".logo-name",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.2,
      }
    );

    gsap.fromTo(
      ".logo-name-slogan",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.4,
      }
    );
  }, []);

  return (
    <div className=''>
   

      <div className="loading-page">
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        {/* <path d="M474.3 330.4c-23.7 91.9-94.2 144.6-201.9 148.4V429.6c0-48 26.4-74.4 74.4-74.4 62 0 99.2-37.2 99.2-99.2 0-61.4-36.5-98.3-97.4-99.1-33-69.3-146.5-64.7-177.2 0C110.5 157.7 74 194.6 74 256c0 62.1 37.3 99.4 99.4 99.4 48 0 74.6 26.2 74.6 74.4V479c-134.4-5-211.1-85.1-211.1-223 0-141.8 81.4-223.2 223.2-223.2 114.8 0 189.8 53.2 214.7 148.8H500C473.9 71.5 388.2 8 259.8 8 105 8 12 101.2 12 255.8 12 411.1 105.2 504.3 259.8 504c128.3 0 213.9-63.8 239.7-173.6zM357 182.3c41.4 3.5 64.2 29 64.2 73.7 0 48-26.4 74.4-74.4 74.4-28.6 0-49.3-9.6-61.6-27.3 83.1-16.6 75.6-99.7 71.8-120.8zm-81.7 97.4c-2.5-10.3-16.3-87 56.2-97 2.3 10.1 16.5 87.1-56.3 97zM260 132c28.6 0 49 9.7 61.4 27.6-28.4 5.5-49.4 20.6-61.6 43.5-12.2-22.9-33.2-38-61.6-43.5 12.4-17.7 33.3-27.4 61.6-27.4zm-71.5 50.7c73.2 10.6 58.9 86.8 56.5 97-72.4-9.8-59-87-56.3-97zM173.2 330.4c-48 0-74.4-26.4-74.4-74.4 0-44.4 22.9-70 64.2-73.7-6.8 37.2-1.4 106.5 71.7 120.8-12.1 17.6-32.8 27.3-61.1 27.3zm53.2 12.4A80.8 80.8 0 0 0 260 309.3c7.8 14.5 19.3 25.5 33.8 33.6a80.3 80.3 0 0 0 -33.6 33.8c-8-14.5-19.1-26.2-33.6-33.8z"/> */}
        {/* <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/> */}
        {/* <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z"/> */}
        {/* <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"/> */}


      {/* laptop */}
    
       <path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>

         {/* <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /> */}
        </svg>
        
      {/* <p className=' absolute '>AB</p> */}

        <div className="name-container space-y-1">
          <div className="logo-name text-center"> MAHI TECHnocrafts</div>
          <div className="logo-name-slogan">Your Imagination, Our Creation</div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
