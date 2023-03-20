import { ruckusEQ, geomixer } from "../assets";
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
        <PortfolioItem
          title="Geomixer"
          caption="Web-app controlled device that applied custom DSP FX to real time audio."
          description="Collaborated with a project team to create 
                      a suite of audio DSP algorithms to process real-time audio on a microcontroller. 
                      Effects included reverb, chorus, phase shifter, and distortion.
                      Created a web app that served as the GUI to control the audio 
                      processing on the microcontroller via UART."
          technologies="Arduino, C++, JS, HTML, CSS, node JS"
          image={geomixer}
          isImageLeft={true}
          githubLink="https://github.com/acgreene/geomixer"
        ></PortfolioItem>
      </div>
    </div>
  );
};
export default Portfolio;
