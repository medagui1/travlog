import React from "react";
import TrajectoryTop from "../components/TrajectoryTop";
import TrajectoryLeft from "../components/TrajectoryLeft";
import TrajectoryRight from "../components/TrajectoryRight";

const Hero = () => {
  return (
    <section className="mt-[32px] relative">
      {/* <img src="images/hero.png" alt="" className='z-[4] relative'/> */}
      <img
        src="images/hero/map.png"
        alt=""
        className="absolute top-[-10px] left-0 scale-[0.9]"
      />
      <TrajectoryTop />
      <TrajectoryLeft />
      <TrajectoryRight />
    </section>
  );
};

export default Hero;
