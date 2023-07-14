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
    <div className="flex flex-col justify-center items-center w-full md:flex-row h-full">
      <div
        className="
          relative flex flex-col justify-start items-center w-full h-screen pt-[150px] 
          xl:items-end
        "
      >
        <div
          className="
          text-white text-4xl w-full h-full flex relative items-center
            sm:text-5xl 
            md:text-6xl 
            xl:text-7xl xl:w-1/2
          "
        >
          Endlessly learning, <br />
          <br />
          inpired through technical and creative mediums, <br />
          <br />
          engineering for work, <br />
          <br />
          and for fun. <br />
        </div>
      </div>
    </div>
  );
};
export default Hero;
