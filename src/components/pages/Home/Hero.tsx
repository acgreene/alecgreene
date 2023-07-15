/*  
    --- Hero.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
      The landing section of the website, what the user first sees when they land.

    TO DO: 
        * 
*/

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:flex-row h-[100vh]">
      {/* empty div to act as alias menu */}
      <div className="flex relative w-[128px] h-[150px] mt-[20px] lg:hidden"></div>
      <div
        className="
          relative flex flex-col justify-start items-center w-full h-full
          lg:items-end
        "
      >
        <div
          className="
          text-white text-3xl w-full h-full flex flex-col relative justify-center items-start
            xxs:text-4xl
            sm:text-5xl 
            md:text-6xl 
            lg:text-6xl lg:w-1/2
            xl:text-7xl xl:w-1/2
          "
        >
          <div>
            <span className="font-normal">Endlessly </span>
            <span className="font-secondary font-thin">learning</span>
            <span className="font-thin">,</span>
          </div>

          <div>
            <span className="font-normal">inspired through </span>
            <span className="font-secondary font-thin">
              technical and creative
            </span>
            <span className="font-secondary font-thin"> mediums,</span>
          </div>

          <div>
            <span className="font-normal">engineering</span>
            <span className="font-secondary font-thin"> for </span>
            <span className="font-secondary font-thin">work and fun.</span>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};
export default Hero;
