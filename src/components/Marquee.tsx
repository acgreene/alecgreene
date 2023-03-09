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
  return (
    <ul className="float-left w-1/2 flex flex-row">
      {/* plugins */}
      <div>
        <h1>Audio plug-in development</h1>
        <div>
          {plugins.map((tech) => {
            if (tech.group === "plugins") {
              return (
                <div key={tech.id} className="font-normal w-full flex">
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
      <div>
        <h1>Audio recording, mixing</h1>
        <div>
          {mixing.map((tech) => {
            if (tech.group === "mixing") {
              return (
                <div key={tech.id} className="font-normal w-full flex">
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
      <div>
        <h1>Automation, scripting</h1>
        <div>
          {automation.map((tech) => {
            if (tech.group === "automation") {
              return (
                <div key={tech.id} className="font-normal w-full flex">
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
      <div>
        <h1>Data</h1>
        <div>
          {data.map((tech) => {
            if (tech.group === "data") {
              return (
                <div key={tech.id} className="font-normal w-full flex">
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
      <div>
        <h1>Front-end development</h1>
        <div>
          {frontend.map((tech) => {
            if (tech.group === "frontend") {
              return (
                <div key={tech.id} className="font-normal w-full flex">
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
      <div>
        <h1>Back-end development</h1>
        <div>
          {backend.map((tech) => {
            if (tech.group === "backend") {
              return (
                <div key={tech.id} className="font-normal w-full flex">
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
      <div>
        <h1>Schematics, PCBs</h1>
        <div>
          {ee.map((tech) => {
            if (tech.group === "ee") {
              return (
                <div key={tech.id} className="font-normal w-full flex">
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
