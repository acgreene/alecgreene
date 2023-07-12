/*  
    --- Home.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
      

    TO DO: 
        * 
*/

import React from "react";
import Hero from "./Hero";
import InfoCard from "../../objects/InfoCard";
import Spotify from "../../../spotify/Spotify";
import DynamicMarquee from "../../objects/DynamicMarquee";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="w-full h-full sm:px-16">
      <div className="mb-24">
        <Hero />
        <div className="relative w-full h-full flex flex-col justify-center items-center mt-24 text-white">
          <div
            className={`relative w-full items-center flex flex-row justify-center text-indigo-400`}
            style={{ transform: "rotate(-5deg)" }}
          >
            <DynamicMarquee currentTranslation={0} speed={0.15} color={""} />
            <DynamicMarquee currentTranslation={-100} speed={0.15} color={""} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <span className="text-white text-2xl mx-6">
          I offer solutions for ambitious projects in the fields of technology
          and music. I work with studios, individuals, groups, and businesses to
          bring unique concepts to life. I am available for project-based work,
          and if you have any requests or questions, I'm here to help.
        </span>
      </div>
      <div className="mb-96 mt-[225px]">
        <div
          className="flex relative w-full h-full items-center justify-center"
          // style={{ transform: "translateX(-10px)" }}
        >
          <span className="text-white text-6xl ml-8">Areas of expertise</span>
        </div>
        <div
          className="relative w-[93%] h-[40vh]"
          style={{ transform: "translateX(5%)" }}
        >
          <div
            className="absolute w-full h-1/3 top-0"
            style={{ perspective: "320px" }}
          >
            <InfoCard
              title="Software"
              subtitles={[
                "full-stack web development",
                "JUCE audio plug-ins",
                "python tools/automation",
              ]}
            />
          </div>

          <div
            className="absolute w-full h-1/3 top-1/3"
            style={{ perspective: "320px" }}
          >
            <InfoCard
              title="Audio"
              subtitles={[
                "mixing, mastering",
                "session guitar",
                "live sound",
                "gigging musician",
              ]}
            />
          </div>

          <div
            className="absolute w-full h-1/3 top-2/3"
            style={{ perspective: "320px" }}
          >
            <InfoCard
              title="Consulting"
              subtitles={[
                "software architecture",
                "support in audio mixing",
                "design",
                "startups, business ventures",
                "systems",
              ]}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full">
        <h1 className="text-white text-4xl">what i'm listening to</h1>
        <div className="w-full h-full flex flex-col">
          <Spotify />
        </div>
      </div>
    </div>
  );
};
export default Home;
