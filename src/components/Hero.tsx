import { useRecoilState } from "recoil";
import { IMG_0003 } from "../assets";
import { windowScroll } from "../recoil/atoms";

const Hero = () => {
  const [scrollPos, setScrollPos] = useRecoilState(windowScroll);

  return (
    <div
      className="
        relative flex flex-col justify-center items-center w-full h-100 p-2  
        xs:mb-40 xs:mt-24
        sm:mb-80 sm:mt-28
        md:flex-row md:mt-64 md:mb-96
        lg:flex-row"
      style={{
        // for small screens: when scrollPos=600 start fading. when scrollPos=780 should be gone
        opacity: `${scrollPos > 400 ? 1 - (scrollPos - 400) / (780 - 400) : 1}`,
      }}
    >
      <div className="flex-col items-center text-white m-10">
        <h1
          className="
            xs:text-7xl text-center pb-6
            sm:text-8xl 
            md:text-right
            lg:text-8xl 
            "
        >
          Hello, I'm Alec Greene.
        </h1>
        <div className="text-center md:text-right">
          <h2 className="text-3xl">Electrical engineer,</h2>
          <h2 className="text-3xl">software developer,</h2>
          <h2 className="text-3xl">sound engineer.</h2>
        </div>
      </div>
      <img
        className="
          xs:w-1/2 
          sm:w-1/2
          "
        src={IMG_0003}
        alt=""
      />
    </div>
  );
};
export default Hero;
