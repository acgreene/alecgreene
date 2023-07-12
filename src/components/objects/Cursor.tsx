/*  
    --- Cursor.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        A custom cursor that replaces the stock cursor on wide screen devices. 

    TO DO: 
        * 
*/

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRecoilValue } from "recoil";
import { cursorState } from "../../recoil/atoms";

interface CursorPosition {
  left: number;
  top: number;
}

const Cursor = () => {
  // references for gsap
  const cursorWrapperRef = useRef<HTMLDivElement>(null);
  const cursorBaseRef = useRef<HTMLDivElement>(null);
  const cursorLayerRef = useRef<HTMLDivElement>(null);

  const innerBackgroundCircleRef = useRef<HTMLDivElement>(null);
  const outerBackgroundCircleRef = useRef<HTMLDivElement>(null);

  // recoil states
  const isCursorActive = useRecoilValue(cursorState);

  // local states
  const [cursorPos, setCursorPos] = useState<CursorPosition>({
    left: 0,
    top: 0,
  });
  const [isPressing, setIsPressing] = useState<boolean>(false);

  useEffect(() => {
    let mouseLeft: number,
      mouseTop: number = 0;

    function handleCursorMove(e: MouseEvent): void {
      mouseLeft = e.clientX;
      mouseTop = e.clientY;
      setCursorPos({
        left: mouseLeft,
        top: mouseTop + window.scrollY,
      });
    }

    function handleCursorScroll(): void {
      setCursorPos({
        left: mouseLeft,
        top: mouseTop + window.scrollY,
      });
    }

    function handleMouseDown(): void {
      setIsPressing(true);
    }

    function handleMouseUp(): void {
      setIsPressing(false);
    }

    window.addEventListener("mousemove", handleCursorMove);
    window.addEventListener("scroll", handleCursorScroll);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleCursorMove);
      window.removeEventListener("scroll", handleCursorScroll);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    // overall cursor movement
    gsap.to(cursorWrapperRef.current, {
      left: cursorPos.left,
      top: cursorPos.top,
    });

    // outer ring color change
    gsap.to(outerBackgroundCircleRef.current, {
      backgroundColor: `rgb(${cursorPos.left / 9}, ${
        cursorPos.top / 6
      }, ${255})`,
    });

    let timeToActive = 0.1;

    if (isPressing) {
      gsap.to(innerBackgroundCircleRef.current, {
        height: "0px",
        width: "0px",
        duration: timeToActive,
      });
      gsap.to(outerBackgroundCircleRef.current, {
        height: "32px",
        width: "32px",
        duration: 0.1,
      });
      gsap.to(cursorBaseRef.current, {
        borderBottom: "solid 18px black",
        borderLeft: "solid 8px transparent",
        borderRight: "solid 8px transparent",
        duration: 0.1,
      });
      gsap.to(cursorLayerRef.current, {
        borderBottom: `solid 14px rgb(${cursorPos.left / 9}, ${
          cursorPos.top / 6
        }, ${255})`,
        borderLeft: "solid 6px transparent",
        borderRight: "solid 6px transparent",
        duration: 0.1,
      });
    }

    // inner circle blow up
    else if (isCursorActive && isPressing === false) {
      // active
      gsap.to(innerBackgroundCircleRef.current, {
        height: "0px",
        width: "0px",
        duration: timeToActive,
      });
      gsap.to(outerBackgroundCircleRef.current, {
        height: "92px",
        width: "92px",
        duration: 0.1,
      });
      gsap.to(cursorBaseRef.current, {
        borderBottom: "solid 18px black",
        borderLeft: "solid 8px transparent",
        borderRight: "solid 8px transparent",
        duration: 0.1,
        scale: 1,
      });
      gsap.to(cursorLayerRef.current, {
        scale: 1,
        borderBottom: `solid 14px rgb(${cursorPos.left / 9}, ${
          cursorPos.top / 6
        }, ${255})`,
        borderLeft: "solid 6px transparent",
        borderRight: "solid 6px transparent",
        duration: 0.1,
      });
    }

    // normal
    else {
      gsap.to(innerBackgroundCircleRef.current, {
        height: "58px",
        width: "58px",
        duration: timeToActive,
      });
      gsap.to(outerBackgroundCircleRef.current, {
        height: "64px",
        width: "64px",
        duration: 0.1,
      });
      gsap.to(cursorBaseRef.current, {
        scale: 1,
        borderBottom: "solid 18px white",
        borderLeft: "solid 8px transparent",
        borderRight: "solid 8px transparent",
        duration: 0.1,
      });
      gsap.to(cursorLayerRef.current, {
        scale: 1,
        borderBottom: `solid 14px black`,
        borderLeft: "solid 6px transparent",
        borderRight: "solid 6px transparent",
        duration: 0.1,
      });
    }
  }, [cursorPos, isPressing]);

  let cursorRotation = "-25deg";

  return (
    <div className="pointer-events-none">
      <div
        className={`absolute items-center justify-center hidden sm:flex pointer-events-none`}
        style={{ left: cursorPos.left, top: cursorPos.top }}
      >
        <div
          className="absolute z-40 pointer-events-none"
          ref={cursorBaseRef}
          style={{
            background: "transparent",
            borderBottom: "solid 18px rgb(255, 255, 255)",
            borderLeft: "solid 8px transparent",
            borderRight: "solid 8px transparent",
            rotate: `${cursorRotation}`,
          }}
        ></div>
        <div
          className="absolute z-40 pointer-events-none"
          ref={cursorLayerRef}
          style={{
            background: "transparent",
            borderBottom: "solid 14px rgb(0, 0, 0)",
            borderLeft: "solid 6px transparent",
            borderRight: "solid 6px transparent",
            transform: "translate(0px, 6px)",
            rotate: `${cursorRotation}`,
          }}
        ></div>
      </div>
      <div
        className={`absolute items-center justify-center hidden sm:flex z-20 pointer-events-none`}
        ref={cursorWrapperRef}
      >
        <div
          className="absolute rounded-full pointer-events-none"
          ref={outerBackgroundCircleRef}
        ></div>
        <div
          className="absolute bg-black rounded-full pointer-events-none"
          ref={innerBackgroundCircleRef}
        ></div>
      </div>
    </div>
  );
};

export default Cursor;
