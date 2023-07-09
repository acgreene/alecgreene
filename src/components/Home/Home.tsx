import React from "react";
import Hero from "./Hero";
import About from "../About/About";
import DynamicMarquee from "./DynamicMarquee";
import ExpertiseCard from "./ExpertiseCard";
import { headshot_cropped, headshot_transparent } from "../../assets";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="w-full h-full sm:px-16">
      <div className="mb-24">
        <Hero />
      </div>
      <div className="flex justify-center items-center w-full">
        <span className="text-white text-xl mx-12">
          I offer solutions for ambitious projects in the domains of technology
          and music, and work with studios, individuals, groups, and businesses
          to bring life into unique concepts & designs. If you have any requests
          or questions, please don't hesitate to
          <div
            className="underline text-blue-400"
            onClick={() =>
              (window.location.href = "mailto:aleccgreene@gmail.com")
            }
          >
            reach out
          </div>
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
    </div>
  );
};
export default Home;
