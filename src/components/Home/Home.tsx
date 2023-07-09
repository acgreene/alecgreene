import React from "react";
import Hero from "./Hero";
import About from "../About/About";
import DynamicMarquee from "./DynamicMarquee";
import ExpertiseCard from "./ExpertiseCard";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="w-full h-full sm:px-16">
      <div className="mb-24">
        <Hero />
      </div>
      <div className="flex justify-center items-center w-full">
        <span className="text-white text-xl mx-12">
          I offer solutions for ambitious projects under the umbrellas of
          technology and music. However, if you have another request or
          question, don't hesitate to
          <div
            className="underline text-blue-400"
            onClick={() =>
              (window.location.href = "mailto:aleccgreene@gmail.com")
            }
          >
            talk to me
          </div>
        </span>
      </div>
      <div className="mb-96">
        <div className="text-white mx-12 text-5xl mt-[320px] flex flex-col">
          <div>areas</div>
          <div>of expertise</div>
        </div>
        <div className="relative w-full h-[34vh]">
          <div className="absolute w-full h-1/3 top-0">
            <ExpertiseCard
              title="software"
              subtitles={[
                "full-stack web development",
                "JUCE audio plug-ins",
                "Python automation",
              ]}
            />
          </div>

          <div className="absolute w-full h-1/3 top-1/3">
            <ExpertiseCard
              title="audio"
              subtitles={["mixing", "session guitar"]}
            />
          </div>

          <div className="absolute w-full h-1/3 top-2/3">
            <ExpertiseCard
              title="consulting"
              subtitles={[
                "software engineering risk management & best practices",
                "audio mixing support",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
