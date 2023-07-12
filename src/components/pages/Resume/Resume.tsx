/*  
    --- Resume.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        My virtual resume.

    TO DO: 
        * 
*/

import EducationExperience from "./EducationExperience";
import Explorations from "./Explorations/Explorations";

const Resume = () => {
  return (
    <div
      id="resume"
      className="flex justify-center items-center h-100 flex-row flex-wrap sm:mb-20 mb-6 text-white"
    >
      <div className="mb-10 w-full sm:mb-20 md:mb-36">
        <span className="text-5xl">explorations</span>
        <div className="w-100 h-px mt-5 mb-5 bg-white"></div>
        <Explorations></Explorations>
      </div>
      <EducationExperience></EducationExperience>
    </div>
  );
};
export default Resume;
