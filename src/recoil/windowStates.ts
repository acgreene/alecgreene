/*  
    --- windowStates.ts ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        Performs calculations for and sets the global recoil states 
        viewportHeight, viewportWidth, and windowScrollCenterY.

    TO DO: 
        * 
*/

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { viewportHeight, viewportWidth, windowScrollCenterY, maxScroll, windowScroll } from "./atoms";

export function windowStates(): void {
    // recoil
    const [windowWidth, setwindowWidth] = useRecoilState(viewportWidth);
    const [windowHeight, setWindowHeight] = useRecoilState(viewportHeight);
    
    useEffect(() => {
        function handleWindowResize(): void {
            setwindowWidth(window.innerWidth || document.documentElement.clientWidth);
            setWindowHeight(window.innerHeight || document.documentElement.clientHeight);
        }
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, [windowWidth, windowHeight])
}
  