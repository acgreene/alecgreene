/*  
    --- Hero.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        * 

    TO DO: 
        * 
*/

import DynamicMarquee from "./DynamicMarquee";

const Hero = () => {
  const marquee_speed = 0.25;
  return (
    <div className="flex flex-col justify-center items-center w-full md:flex-row h-full">
      <div className="relative flex flex-col justify-start items-center w-full h-screen pt-[150px]">
        <div className="text-white text-3xl w-full h-full flex relative items-center">
          endlessly learning, <br />
          <br />
          inpired through technical and creative mediums, <br />
          <br />
          engineering for work, <br />
          <br />
          and for fun. <br />
        </div>
      </div>

      <div className="relative w-full h-full flex flex-col justify-center items-center mt-24 text-white">
        <div
          className={`relative w-full items-center flex flex-row justify-center text-indigo-400`}
          style={{ transform: "rotate(-5deg)" }}
        >
          <DynamicMarquee
            currentTranslation={0}
            speed={marquee_speed}
            color={""}
          />
          <DynamicMarquee
            currentTranslation={-100}
            speed={marquee_speed}
            color={""}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
