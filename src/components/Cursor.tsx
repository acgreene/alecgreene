import React from "react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useRecoilValue } from "recoil";
import { cursorState } from "../recoil/atoms";

interface CursorPosition {
  left: number;
  top: number;
}

const Cursor = () => {
  // references to DOM objects for GSAP
  const cursorRef = useRef<HTMLDivElement>(null);
  const outerCircleRef = useRef<HTMLDivElement>(null);
  const innerCircleRef = useRef<HTMLDivElement>(null);
  const centerCircleRef = useRef<HTMLDivElement>(null);
  const centerCircleRef2 = useRef<HTMLDivElement>(null);

  // TO DO: read whether cursor is in active state from recoil.
  const isCursorActive = useRecoilValue(cursorState);

  // states to store cursor movement
  const [cursorPos, setCursorPos] = useState<CursorPosition>({
    left: 0,
    top: 0,
  });
  const [isPressing, setIsPressing] = useState<boolean>(false);

  useEffect(() => {
    let mouseLeft: number,
      mouseTop: number = 0;

    const handleCursorMove = (e: any) => {
      mouseLeft = e.clientX;
      mouseTop = e.clientY;
      setCursorPos({
        left: mouseLeft,
        top: mouseTop + window.scrollY,
      });
    };

    const handleCursorScroll = (e: any) => {
      setCursorPos({
        left: mouseLeft,
        top: mouseTop + window.scrollY,
      });
    };

    const handleMouseDown = (e: any) => {
      setIsPressing(true);
    };

    const handleMouseUp = (e: any) => {
      setIsPressing(false);
    };

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
    gsap.to(cursorRef.current, {
      left: cursorPos.left,
      top: cursorPos.top,
    });

    // outer ring color change
    gsap.to(outerCircleRef.current, {
      backgroundColor: `rgb(${cursorPos.left / 9}, ${
        cursorPos.top / 6
      }, ${255})`,
    });

    let timeToActive = 0.1;

    if (isPressing) {
      gsap.to(innerCircleRef.current, {
        height: "0px",
        width: "0px",
        duration: timeToActive,
      });
      gsap.to(outerCircleRef.current, {
        height: "32px",
        width: "32px",
        duration: 0.1,
      });
      gsap.to(centerCircleRef.current, {
        borderBottom: "solid 18px black",
        borderLeft: "solid 8px transparent",
        borderRight: "solid 8px transparent",
        duration: 0.1,
      });
      gsap.to(centerCircleRef2.current, {
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
      gsap.to(innerCircleRef.current, {
        height: "0px",
        width: "0px",
        duration: timeToActive,
      });
      gsap.to(outerCircleRef.current, {
        height: "92px",
        width: "92px",
        duration: 0.1,
      });
      gsap.to(centerCircleRef.current, {
        borderBottom: "solid 18px black",
        borderLeft: "solid 8px transparent",
        borderRight: "solid 8px transparent",
        duration: 0.1,
        scale: 1,
      });
      gsap.to(centerCircleRef2.current, {
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
      gsap.to(innerCircleRef.current, {
        height: "58px",
        width: "58px",
        duration: timeToActive,
      });
      gsap.to(outerCircleRef.current, {
        height: "64px",
        width: "64px",
        duration: 0.1,
      });
      gsap.to(centerCircleRef.current, {
        scale: 1,
        borderBottom: "solid 18px white",
        borderLeft: "solid 8px transparent",
        borderRight: "solid 8px transparent",
        duration: 0.1,
      });
      gsap.to(centerCircleRef2.current, {
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
          ref={centerCircleRef}
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
          ref={centerCircleRef2}
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
        ref={cursorRef}
      >
        <div
          className="absolute rounded-full pointer-events-none"
          ref={outerCircleRef}
        ></div>
        <div
          className="absolute bg-black rounded-full pointer-events-none"
          ref={innerCircleRef}
        ></div>
      </div>
    </div>
  );
};

export default Cursor;
