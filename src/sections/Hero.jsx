import React from "react";
import TrajectoryTop from "../components/TrajectoryTop";
import TrajectoryLeft from "../components/TrajectoryLeft";
import TrajectoryRight from "../components/TrajectoryRight";
import HeroGallery from "../components/HeroGallery";

const Hero = () => {
  return (
    <section className="mt-[32px] relative max-w-[400px] m-auto">
      <img
        src="images/hero/map.png"
        alt=""
        className="absolute top-[-10px] left-0 scale-[0.9] z-[-1] "
      />
      <TrajectoryTop />
      <TrajectoryLeft />
      <TrajectoryRight />
      <HeroGallery />
    </section>
  );
};

export default Hero;
