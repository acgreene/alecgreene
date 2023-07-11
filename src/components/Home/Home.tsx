/*  
    --- Home.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        * 

    TO DO: 
        * 
*/

import React from "react";
import Hero from "./Hero";
import ExpertiseCard from "./ExpertiseCard";
import Spotify from "../../spotify/Spotify";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="w-full h-full sm:px-16">
      <div className="mb-24">
        <Hero />
      </div>
      <div className="flex justify-center items-center w-full">
        <span className="text-white text-lg mx-6">
          I offer solutions for ambitious projects in the domains of technology
          and music, and work with studios, individuals, groups, and businesses
          to bring life into unique concepts. I am available for project-based
          work, and if you have any requests or questions, please don't hesitate
          to reach out.
        </span>
      </div>
      <div className="mb-96 mt-[225px]">
        <div
          className="flex relative w-full h-full items-center justify-center"
          // style={{ transform: "translateX(-10px)" }}
        >
          <span className="text-white text-4xl">areas of expertise</span>
        </div>
        <div
          className="relative w-[93%] h-[40vh]"
          style={{ transform: "translateX(5%)" }}
        >
          <div
            className="absolute w-full h-1/3 top-0"
            style={{ perspective: "320px" }}
          >
            <ExpertiseCard
              title="software"
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
            <ExpertiseCard
              title="audio"
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
            <ExpertiseCard
              title="consulting"
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
