/*  
    --- ProgressBar.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        * 

    TO DO: 
        * 
*/

import { useRecoilState } from "recoil";
import { maxScroll, windowScroll } from "../recoil/atoms";

const ProgressBar = () => {
  const [scrollPos, setScrollPos] = useRecoilState(windowScroll);
  const [maxScrollY, setMaxScrollY] = useRecoilState(maxScroll);

  return (
    <div
      className={`fixed top-0 left-0 bg-indigo-600 w-2 z-40`}
      style={{
        height: `${(100 * scrollPos) / maxScrollY}vh`,
        transition: "0.4s ease-out",
      }}
    ></div>
  );
};
export default ProgressBar;
