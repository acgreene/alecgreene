import React from "react";
import { IMG_0001, IMG_0002, IMG_0003, IMG_0004 } from "../assets";

const Hero = () => {
  return (
    <div className="z-0 relative flex flex-col justify-center items-center w-full h-100 p-2 mt-20 md:flex-row md:mt-40">
      <div className="flex-col items-center text-white m-10">
        <h1 className="text-9xl">Alec Greene</h1>
        {/* <h2 className="text-3xl"></h2> */}
        <div className="text-center md:text-right">
          <h2 className="text-3xl">electrical engineer</h2>
          <h2 className="text-3xl">software developer</h2>
          <h2 className="text-3xl">sound engineer</h2>
        </div>
      </div>
      <img className="w-1/2 md:w-1/3" src={IMG_0003} alt="" />
    </div>
  );
};
export default Hero;
