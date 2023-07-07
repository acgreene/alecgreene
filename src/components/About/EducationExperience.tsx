import React from "react";

type EducationExperienceProps = {};

const EducationExperience: React.FC<EducationExperienceProps> = () => {
  return (
    <div className="mt-10 mb-10 w-full sm:mb-20 md:mb-36">
      <span className="text-5xl">education & experience</span>
      <div className="w-100 h-px mt-5 mb-5 bg-white"></div>
      <div className="flex flex-col sm:flex-row justify-between md:justify-around">
        <div className="flex flex-col">
          <h1 className="text-xl">EDUCATION</h1>
          <div className="flex flex-row my-4">
            <div className="relative flex flex-col items-center mr-4 mt-1">
              <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white z-10"></div>
              <div className="absolute w-px bg-white h-32 xxs:h-28"></div>
            </div>
            <span className="mr-8 w-24">2016-2022</span>
            <div className="w-40">
              <h2 className="font-bold">University of Michigan</h2>
              <h2 className="text-gray-200">B.S.E. Electrical Engineering</h2>
            </div>
          </div>
          <div className="flex flex-row my-4">
            <div className="relative flex flex-col items-center mr-4 mt-1">
              <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white z-10">
                <div
                  className="rounded-full bg-black"
                  style={{ width: "14px", height: "14px" }}
                ></div>
              </div>
            </div>
            <span className="mr-8 w-24">2016-2022</span>
            <div className="w-40">
              <h2 className="font-bold">University of Michigan</h2>
              <h2 className="text-gray-200">B.S. Sound Engineering</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl">EXPERIENCE</h1>
          <div className="flex flex-row my-4">
            <div className="relative flex flex-col items-center mr-4 mt-1">
              <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white z-10"></div>
              <div className="absolute w-px bg-white h-40 xxs:h-28"></div>
            </div>
            <span className="mr-8 w-24">2023-Present</span>
            <div className="w-40">
              <h2 className="font-bold">DSP Test Engineer</h2>
              <h2 className="text-gray-200">Shure Incorporated</h2>
              <span className="text-gray-400">Chicago, IL</span>
            </div>
          </div>
          <div className="flex flex-row my-4">
            <div className="relative flex flex-col items-center mr-4 mt-1">
              <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white z-10">
                <div
                  className="rounded-full bg-black"
                  style={{ width: "14px", height: "14px" }}
                ></div>
              </div>
              <div className="absolute w-px bg-white h-40 xxs:h-32"></div>
            </div>
            <span className="mr-8 w-24">2023-Present</span>
            <div className="w-40">
              <h2 className="font-bold">Hardware & Software Engineer</h2>
              <h2 className="text-gray-200">Area (startup)</h2>
              <span className="text-gray-400">Remote</span>
            </div>
          </div>
          <div className="flex flex-row my-4">
            <div className="relative flex flex-col items-center mr-4 mt-1">
              <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white z-10">
                <div
                  className="rounded-full bg-black"
                  style={{ width: "14px", height: "14px" }}
                ></div>
              </div>
              <div className="absolute w-px bg-white h-44 xxs:h-32"></div>
            </div>
            <span className="mr-8 w-24">2022</span>
            <div className="w-40">
              <h2 className="font-bold">Applications Engineering Intern</h2>
              <h2 className="text-gray-200">Texas Instruments</h2>
              <span className="text-gray-400">Dallas, TX</span>
            </div>
          </div>
          <div className="flex flex-row my-4">
            <div className="relative flex flex-col items-center mr-4 mt-1">
              <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white z-10">
                <div
                  className="rounded-full bg-black"
                  style={{ width: "14px", height: "14px" }}
                ></div>
              </div>
              <div className="absolute w-px bg-white h-40 xxs:h-28"></div>
            </div>
            <span className="mr-8 w-24">2020-2022</span>
            <div className="w-40">
              <h2 className="font-bold">Technology Consultant</h2>
              <h2 className="text-gray-200">University of Michigan</h2>
              <span className="text-gray-400">Ann Arbor, MI</span>
            </div>
          </div>
          <div className="flex flex-row my-4">
            <div className="relative flex flex-col items-center mr-4 mt-1">
              <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white z-10">
                <div
                  className="rounded-full bg-black"
                  style={{ width: "14px", height: "14px" }}
                ></div>
              </div>
            </div>
            <span className="mr-8 w-24">2019-2020</span>
            <div className="w-40">
              <h2 className="font-bold">Live Sound Engineer, Stagehand</h2>
              <h2 className="text-gray-200">Pegasus Entertainment</h2>
              <span className="text-gray-400">Detroit, MI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationExperience;
