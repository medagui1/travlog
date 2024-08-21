import React from "react";
import TrajectoryTop from "../components/TrajectoryTop";
import TrajectoryLeft from "../components/TrajectoryLeft";
import TrajectoryRight from "../components/TrajectoryRight";
import HeroGallery from "../components/HeroGallery";

const HeroImage = () => {
  return (
    <div>
      <img
        src="images/hero/map.png"
        alt=""
        className="absolute top-[-10px] left-0 scale-[0.9] z-[-1] "
      />
      <TrajectoryTop />
      <TrajectoryLeft />
      <TrajectoryRight />
      <HeroGallery />
    </div>
  );
};

export default HeroImage;
