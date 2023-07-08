import { useRecoilState } from "recoil";
import { IMG_4316, headshot_cropped, headshot_transparent } from "../../assets";
import { windowScroll } from "../../recoil/atoms";

const Hero = () => {
  const [scrollPos, setScrollPos] = useRecoilState(windowScroll);

  return (
    <div
      className="flex justify-center items-center w-full md:flex-row h-full"
      // style={{
      //   // for small screens: when scrollPos=400 start fading. when scrollPos=780 should be gone
      //   opacity: `${scrollPos > 300 ? 1 - (scrollPos - 300) / (750 - 300) : 1}`,
      // }}
    >
      {/* <div className="flex-col items-center text-white m-10">
        <h1
          className="
            text-4xl
            xs:text-7xl text-center pb-6
            sm:text-8xl 
            md:text-right
            lg:text-8xl 
            "
        >
          Hello, I'm Alec Greene.
        </h1>
        <div>
          <div className="text-center mb-5 md:text-right">
            <h2 className="text-3xl">Electrical engineer,</h2>
            <h2 className="text-3xl">software developer,</h2>
            <h2 className="text-3xl">sound engineer.</h2>
          </div>
        </div>
      </div>

      <img
        className="
          xs:w-1/2 
          sm:w-1/2
          "
        src={headshot_cropped}
        alt=""
      /> */}

      <div className="relative w-full h-full flex flex-col justify-center items-center text-white">
        {/* <img
          className="w-3/4 absolute right-0 bottom-0 translate-y-0"
          src={IMG_4316}
          alt=""
        /> */}

        <div className="w-full absolute text-6xl">
          <div className="w-full h-1/2 flex justify-start items-end">
            <h1>ALEC</h1>
          </div>
          <div className="w-full h-1/2 flex justify-end items-start">
            <h1>GREENE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
