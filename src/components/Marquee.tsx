import React from "react";
import { useRecoilState } from "recoil";
import { cursorState } from "../recoil/atoms";
import { explorations } from "../constants";

const Marquee = () => {
  const [active, setActive] = useRecoilState(cursorState);

  let plugins: { id: string; icon: string; link: string; group: string }[] = [];
  let mixing: { id: string; icon: string; link: string; group: string }[] = [];
  let automation: {
    id: string;
    icon: string;
    link: string;
    group: string;
  }[] = [];
  let data: { id: string; icon: string; link: string; group: string }[] = [];
  let frontend: {
    id: string;
    icon: string;
    link: string;
    group: string;
  }[] = [];
  let backend: { id: string; icon: string; link: string; group: string }[] = [];
  let ee: { id: string; icon: string; link: string; group: string }[] = [];

  explorations.map((tech) => {
    if (tech.group === "plugins") {
      plugins.push(tech);
    } else if (tech.group === "mixing") {
      mixing.push(tech);
    } else if (tech.group === "automation") {
      automation.push(tech);
    } else if (tech.group === "data") {
      data.push(tech);
    } else if (tech.group === "frontend") {
      frontend.push(tech);
    } else if (tech.group === "backend") {
      backend.push(tech);
    } else if (tech.group === "ee") {
      ee.push(tech);
    }
  });

  let outerDiv =
    "flex flex-col justify-center items-center border-solid border-x border-y border-white w-80";
  let titleText = "text-white text-center font-thin text-3xl";
  let mapContainer = "flex flex-row mt-5";
  let iconDiv = "w-full flex mr-4 ml-4";

  return (
    <ul className="float-left w-1/2 flex flex-row">
      {/* plugins */}
      <div className={outerDiv}>
        <h1 className={titleText}>Audio plug-in development</h1>
        <div className={mapContainer}>
          {plugins.map((tech) => {
            if (tech.group === "plugins") {
              return (
                <div key={tech.id} className={iconDiv}>
                  <a
                    href={`${tech.link}`}
                    className="z-10 cursor-none w-16"
                    target="_blank"
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                  >
                    <img src={tech.icon} alt={tech.id} />
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* mixing */}
      <div className={outerDiv}>
        <h1 className={titleText}>Audio recording, mixing</h1>
        <div className={mapContainer}>
          {mixing.map((tech) => {
            if (tech.group === "mixing") {
              return (
                <div key={tech.id} className={iconDiv}>
                  <a
                    href={`${tech.link}`}
                    className="z-10 cursor-none w-16"
                    target="_blank"
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                  >
                    <img src={tech.icon} alt={tech.id} />
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* automation */}
      <div className={outerDiv}>
        <h1 className={titleText}>Automation, scripting</h1>
        <div className={mapContainer}>
          {automation.map((tech) => {
            if (tech.group === "automation") {
              return (
                <div key={tech.id} className={iconDiv}>
                  <a
                    href={`${tech.link}`}
                    className="z-10 cursor-none w-16"
                    target="_blank"
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                  >
                    <img src={tech.icon} alt={tech.id} />
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* data */}
      <div className={outerDiv}>
        <h1 className={titleText}>Data</h1>
        <div className={mapContainer}>
          {data.map((tech) => {
            if (tech.group === "data") {
              return (
                <div key={tech.id} className={iconDiv}>
                  <a
                    href={`${tech.link}`}
                    className="z-10 cursor-none w-16"
                    target="_blank"
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                  >
                    <img src={tech.icon} alt={tech.id} />
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* frontend */}
      <div className={outerDiv}>
        <h1 className={titleText}>Front-end development</h1>
        <div className={mapContainer}>
          {frontend.map((tech) => {
            if (tech.group === "frontend") {
              return (
                <div key={tech.id} className={iconDiv}>
                  <a
                    href={`${tech.link}`}
                    className="z-10 cursor-none w-16"
                    target="_blank"
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                  >
                    <img src={tech.icon} alt={tech.id} />
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* backend */}
      <div className={outerDiv}>
        <h1 className={titleText}>Back-end development</h1>
        <div className={mapContainer}>
          {backend.map((tech) => {
            if (tech.group === "backend") {
              return (
                <div key={tech.id} className={iconDiv}>
                  <a
                    href={`${tech.link}`}
                    className="z-10 cursor-none w-16"
                    target="_blank"
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                  >
                    <img src={tech.icon} alt={tech.id} />
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* ee */}
      <div className={outerDiv}>
        <h1 className={titleText}>Schematics, PCBs</h1>
        <div className={mapContainer}>
          {ee.map((tech) => {
            if (tech.group === "ee") {
              return (
                <div key={tech.id} className={iconDiv}>
                  <a
                    href={`${tech.link}`}
                    className="z-10 cursor-none w-16"
                    target="_blank"
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                  >
                    <img src={tech.icon} alt={tech.id} />
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>
    </ul>
  );
};
export default Marquee;
