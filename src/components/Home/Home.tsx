import React from "react";
import Hero from "./Hero";
import About from "../About/About";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="w-full h-full sm:px-16">
      <div className="my-6">
        <Hero />
      </div>

      <About></About>
    </div>
  );
};
export default Home;
