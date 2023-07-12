/*  
    --- Portfolio.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        * 

    TO DO: 
        * 
*/

import { ruckusEQ, redditClone } from "../../../assets";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="mt-10 mb-10 w-full sm:mb-20 md:mb-36 text-white"
    >
      <span className="text-5xl">project portfolio</span>
      <div className="w-100 h-px mt-5 mb-5 bg-white"></div>
      <div className="mt-12">
        <PortfolioItem
          title="Reddit Clone"
          caption="Full stack clone of Reddit."
          description=""
          technologies="Next.js, Firebase, Chakra UI"
          image={redditClone}
          isImageLeft={true}
          githubLink="https://github.com/acgreene/reddit-clone"
        ></PortfolioItem>
        <PortfolioItem
          title="Ruckus EQ"
          caption="Real time audio equalizer software plug-in."
          description="Features six bandpass filters, a lowpass filter, and a 
                      high pass filter. Filters have GUI controls to configure 
                      parameters including frequency, gain, q-factor, and slope."
          technologies="C++, JUCE"
          image={ruckusEQ}
          isImageLeft={false}
          githubLink="https://github.com/acgreene/RuckusEQ"
        ></PortfolioItem>
      </div>
    </div>
  );
};
export default Portfolio;
