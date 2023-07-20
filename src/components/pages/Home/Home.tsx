/*  
    --- Home.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
      The home page of my website. 

    TO DO: 
        * 
*/

import React from "react";
import Hero from "./Hero";
import InfoCard from "../../objects/InfoCard";
import DynamicMarquee from "../../objects/DynamicMarquee";
import { useRecoilState } from "recoil";
import { viewportWidth } from "../../../recoil/atoms";
import StaticMarquee from "../../objects/StaticMarquee";
import {
  IMG_4316,
  diag_bw_1,
  headshot_cropped,
  nyc_hannah,
  ruckus_greenwood,
  ruckus_greenwood_bw,
  ruckus_live,
  ruckus_lutherween,
  times_square,
} from "../../../assets";
// import Spotify from "../../../spotify/Spotify";
import { playlists, squares } from "../../../constants";
import AnimatedSquare from "../../objects/AnimatedSquare";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const [windowWidth] = useRecoilState(viewportWidth);

  let dynamicMarqueeSpeed = 0.1;
  if (windowWidth < 1200) {
    dynamicMarqueeSpeed = 0.15;
  } else {
    dynamicMarqueeSpeed = 0.075;
  }

  return (
    <div className="w-full h-full sm:px-16">
      <div className="mb-24 lg:mb-40">
        <Hero />
        <div className="relative w-full h-full flex flex-col justify-center items-center mt-24 text-white lg:mt-32">
          <div
            className={`relative w-full items-center flex flex-row justify-center text-indigo-400`}
            style={{ transform: "rotate(-3deg)" }}
          >
            <DynamicMarquee
              currentTranslation={0}
              speed={dynamicMarqueeSpeed}
              color={""}
            />
            <DynamicMarquee
              currentTranslation={-100}
              speed={dynamicMarqueeSpeed}
              color={""}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full z-10">
        <span
          className="text-white text-2xl mx-6 w-full lg:text-4xl lg:w-1/2 font-secondary font-light z-10"
          style={{ textTransform: "none" }}
        >
          I work with studios, individuals, groups, and businesses to bring
          unique concepts in sound and software to life. I am available for
          project-based work, and if you have any requests or questions, I'm
          here to help.
        </span>
      </div>
      <div className="mb-[344px] mt-[225px] lg:mt-[335px]">
        <div
          className="
          flex relative w-full h-full items-center justify-center mb-6 
          lg:justify-start lg:mb-24"
        >
          <span className="text-white text-5xl xxs:text-6xl ml-8 lg:text-8xl">
            Areas of expertise
          </span>
        </div>
        <div
          className="relative w-[93%] h-[40vh] lg:h-[60vh]"
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
                "business ventures",
                "systems",
              ]}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col w-full h-full">
        <h1 className="text-white text-4xl">What I'm listening to</h1>
        <div className="w-full h-full flex flex-col">
          <Spotify />
        </div>
      </div> */}

      <StaticMarquee
        element={
          <div className="flex flex-row mt-10 mb-8 lg:mb-40">
            <img
              src={IMG_4316}
              alt=""
              className="h-[220px] lg:h-[420px] object-contain rotate-[-9deg]"
            />
            <img
              src={ruckus_greenwood_bw}
              alt=""
              className="h-[220px] lg:h-[420px] object-contain rotate-[7deg]"
            />
            <img
              src={ruckus_lutherween}
              alt=""
              className="h-[220px] lg:h-[420px] object-contain rotate-[-13deg]"
            />
            <img
              src={diag_bw_1}
              alt=""
              className="h-[220px] lg:h-[420px] object-contain rotate-[11deg]"
            />
          </div>
        }
        speed={15}
        direction={true}
      ></StaticMarquee>

      <div className="flex flex-col w-full mb-[180px] text-white z-10">
        <div className="ml-8 mb-8 lg:mb-20 z-10">
          <span className="text-white text-5xl xxs:text-6xl lg:text-8xl">
            Grab a playlist
          </span>
        </div>

        <div className="flex flex-col z-10">
          {playlists.map((playlist) => (
            <div
              className="flex flex-row pt-2 pb-2 lg:p-4 rounded-lg hover:cursor-pointer lg:hover:bg-indigo-400 lg:hover:text-black"
              key={playlist.id}
              onClick={() => (window.location.href = playlist.url)}
            >
              <div className="w-1/3 h-full">
                <span className="font-semibold lg:text-4xl">{playlist.id}</span>
              </div>
              <div className="w-2/3 h-full flex flex-col lg:flex-row lg:justify-between">
                <span className="text-lg lg:text-4xl font-primary font-medium">
                  {playlist.title}
                </span>
                <span className="text-md lg:text-3xl font-light">
                  {playlist.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
