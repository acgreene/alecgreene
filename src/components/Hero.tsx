import React from "react";
import { IMG_0001, IMG_0002, IMG_0003, IMG_0004 } from "../assets";

const Hero = () => {
  return (
    <div className="z-0 relative flex flex-col justify-center items-center h-100 p-2 md:flex-row">
      <div className="flex-col items-center text-white">
        <h1 className="text-9xl">Alec Greene</h1>
        <h2 className="text-3xl">triple threat:</h2>
        <h2 className="text-3xl">electrical engineer</h2>
        <h2 className="text-3xl">software developer</h2>
        <h2 className="text-3xl">sound engineer</h2>
      </div>
      <img className="w-1/2 md:w-1/3" src={IMG_0003} alt="" />
    </div>
  );
};
export default Hero;
