import React, {
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Initialize ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type StaticMarqueeProps = {
  element: ReactNode;
  speed: number;
  direction: boolean;
};

const StaticMarquee: React.FC<StaticMarqueeProps> = ({
  element,
  speed,
  direction,
}) => {
  let marquee_part_styles: string = "flex shrink-0 py-1 items-center";

  const marquee_ref = useRef<HTMLDivElement>(null);
  const marquee_inner_ref = useRef<HTMLDivElement>(null);
  const marquee_part_refs = Array.from({ length: 6 }).map(() =>
    useRef<HTMLDivElement>(null)
  );

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      marquee_part_refs.forEach((ref) => {
        gsap.to(ref.current, {
          xPercent: direction ? -100 : 100,
          repeat: -1,
          duration: speed,
          ease: "linear",
        });
      });

      gsap.set(marquee_inner_ref.current, { xPercent: -50 });
    }, marquee_ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={marquee_ref} className="relative text-2xl overflow-hidden">
      <div ref={marquee_inner_ref} className="flex flex-row flex-auto w-fit">
        {marquee_part_refs.map((ref, index) => (
          <div key={index} ref={ref} className={`${marquee_part_styles}`}>
            {element}
          </div>
        ))}
      </div>
    </div>
  );
};
export default StaticMarquee;
