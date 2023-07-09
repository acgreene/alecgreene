import { Icon } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { GiSoundWaves } from "react-icons/gi";
// import { useRecoilState } from "recoil";
// import { windowScrollVelocity } from "../../recoil/atoms";

interface DynamicMarqueeProps {
  currentTranslation: number;
  speed: number;
  color: string;
}

const DynamicMarquee: React.FC<DynamicMarqueeProps> = ({
  currentTranslation,
  speed,
  color,
}) => {
  // const [scrollVel, setScrollVel] = useRecoilState(windowScrollVelocity);

  // const [currentMarqueeTranslation, setCurrentMarqueeTranslation] =
  //   useState<any>(currentTranslation);

  class LoopingElement {
    element: HTMLElement;
    currentTranslation: number;
    speed: number;
    direction: boolean;
    scrollTop: number;
    metric: number;
    lerp: {
      current: number;
      target: number;
      factor: number;
    };
    maxScrollY: number;
    scrollPos: number;
    lastScrollTime: number;
    lastScrollPos: number;
    scrollVel: number;

    constructor(
      element: HTMLElement,
      currentTranslation: number,
      speed: number
    ) {
      this.element = element;
      this.currentTranslation = currentTranslation;
      this.speed = speed;
      this.direction = true;
      this.scrollTop = 0;
      this.metric = 100;

      this.maxScrollY = 0;
      this.scrollPos = 0;
      this.lastScrollTime = 0;
      this.lastScrollPos = 0;
      this.scrollVel = 0;

      this.lerp = {
        current: this.currentTranslation,
        target: this.currentTranslation,
        factor: 0.2,
      };

      this.events();
      this.render();
    }

    // Sets the direction of the looping element on scroll
    events = () => {
      window.addEventListener("scroll", () => {
        this.maxScrollY = document.body.scrollHeight - window.innerHeight;

        this.scrollPos = window.scrollY;
        const currScrollTime: number = Date.now();

        const deltaTime = currScrollTime - this.lastScrollTime;
        const deltaPos = this.scrollPos - this.lastScrollPos;
        this.scrollVel = deltaPos / deltaTime;

        this.lastScrollTime = Date.now();
        this.lastScrollPos = window.scrollY;

        // ui error handling
        if (window.scrollY === 0 || window.scrollY > this.maxScrollY - 100) {
          this.scrollVel = 0;
        }

        const direction = window.scrollY;
        if (direction > this.scrollTop) {
          this.direction = true;
          this.lerp.target += this.speed * Math.abs(this.scrollVel * 5);
        } else {
          this.direction = false;
          this.lerp.target -= this.speed * Math.abs(this.scrollVel * 5);
        }
        this.scrollTop = direction <= 0 ? 0 : direction;
      });
    };

    lerpFunc = (current: number, target: number, factor: number) => {
      this.lerp.current = current * (1 - factor) + target * factor;
    };

    goForward = () => {
      this.lerp.target += this.speed;
      if (this.lerp.target > this.metric) {
        this.lerp.current -= this.metric * 2;
        this.lerp.target -= this.metric * 2;
      }
    };

    goBackward = () => {
      this.lerp.target -= this.speed;
      if (this.lerp.target < -1 * this.metric) {
        this.lerp.current -= -1 * this.metric * 2;
        this.lerp.target -= -1 * this.metric * 2;
      }
    };

    animate = () => {
      // initialized to true, then set on scroll
      this.direction ? this.goForward() : this.goBackward();
      this.lerpFunc(this.lerp.current, this.lerp.target, this.lerp.factor);

      if (this.element) {
        this.element.style.transform = `translateX(${
          this.lerp.current
        }%) skew(${this.scrollVel * 15}deg)`;
      }
    };

    render = () => {
      this.animate();
      window.requestAnimationFrame(this.render);
    };
  }

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const loopingElement = new LoopingElement(
        elementRef.current,
        currentTranslation,
        speed
      );
    }
  }, []);

  return (
    <div
      ref={elementRef}
      className="text-6xl tracking-wider flex flex-row whitespace-nowrap absolute"
    >
      <div
        className={`${color} shrink-0 w-full flex flex-row justify-center items-center`}
      >
        <div className="px-2">
          <span className="px-1">software dev</span>
          <Icon as={BsCodeSlash}></Icon>
        </div>
        <div className="px-2">
          <span className="px-1">sound engineer</span>
          <Icon as={GiSoundWaves}></Icon>
        </div>
      </div>
    </div>
  );
};

export default DynamicMarquee;
