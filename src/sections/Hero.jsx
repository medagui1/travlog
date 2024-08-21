import React from "react";
import TrajectoryTop from "../components/TrajectoryTop";
import TrajectoryLeft from "../components/TrajectoryLeft";
import TrajectoryRight from "../components/TrajectoryRight";
import HeroGallery from "../components/HeroGallery";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="mt-wide relative max-w-[400px] m-auto flex flex-col gap-wide circular">
      
      
      <HeroImage />
      <HeroContent />
    </section>
  );
};

export default Hero;
