/*  
    --- scrollStates.ts ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        Performs calculations for and sets the global recoil states scrollPos, 
        maxScrollY, and scrollVel.

    TO DO: 
        * 
*/

import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { windowScroll, windowScrollVelocity, maxScroll, windowScrollCenterY, viewportHeight } from "./atoms";

export function scrollStates(): void {
    // recoil
    const [scrollPos, setScrollPos] = useRecoilState(windowScroll);
    const [scrollVel, setScrollVel] = useRecoilState(windowScrollVelocity);
    const [maxScrollY, setMaxScrollY] = useRecoilState(maxScroll);
    const [windowHeight, setWindowHeight] = useRecoilState(viewportHeight);
    const [centerY, setCenterY] = useRecoilState(windowScrollCenterY);

    // local states
    const [lastScrollTime, setLastScrollTime] = useState<number>(Date.now());
    const [lastScrollPos, setLastScrollPos] = useState<number>(scrollPos);
    const [scrollTimeout, setScrollTimeout] = useState<any>(null);

    useEffect(() => {
    function handleScroll(): void {
        const newMaxScrollY: number =
        document.body.scrollHeight - window.innerHeight;
        setMaxScrollY(newMaxScrollY);

        setScrollPos(window.scrollY);
        const currScrollTime: number = Date.now();

        const deltaTime = currScrollTime - lastScrollTime;
        const deltaPos = scrollPos - lastScrollPos;
        setScrollVel(deltaPos / deltaTime);

        setLastScrollTime(Date.now());
        setLastScrollPos(window.scrollY);

        if (window.scrollY === 0 || window.scrollY > newMaxScrollY - 100) {
        setScrollVel(0);
        }
        setCenterY(scrollPos + (windowHeight/2));
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, [scrollPos]);

    useEffect(() => {
    const handleScrollStop = () => {
        clearTimeout(scrollTimeout);
        setScrollTimeout(
        setTimeout(() => {
            setScrollVel(0);
        }, 10)
        );
    };
    window.addEventListener("scroll", handleScrollStop);
    return () => {
        window.removeEventListener("scroll", handleScrollStop);
    };
    }, [scrollTimeout]);
}
  