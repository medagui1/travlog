import React from "react";
import TravelPointCard from "../components/TravelPointCard";
import { travel_points } from "../data/travel_points";

const TravelPoints = () => {
  return (
    <section className="py-wide text-center flex items-center flex-col">
      {/* TODO
        this image needs to separated so that i can animate each component alone */}
      <img src="images/travel_points.png" alt="" className="mb-widest " />
      <h2 className="uppercase text-primary font-[600] text-h2 tracking-[3px] mb-thin">
        travel point
      </h2>
      <p className="text-[32px] mb-wide font-[600] text-p ">
        We are helping you find your dream location
      </p>
      <p className="text-p-50 text-fs-p mb-wide max-w-[340px]">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC.
      </p>
      <div className="grid grid-rows-4 grid-cols-1 gap-thin w-full justify-items-center">
        {travel_points.map((item, index) => (
          <TravelPointCard  item={item} key={`${index}_${item.title}`} />
        ))}
      </div>
    </section>
  );
};

export default TravelPoints;
