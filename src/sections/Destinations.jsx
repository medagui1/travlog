import React from "react";
import ArrowButton from "../components/ArrowButton";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";

const Destinations = () => {
  return (
    <section className="py-wide text-center">
      <h2 className="uppercase text-primary font-[600] text-h2 tracking-[3px] mb-thin">
        top destination
      </h2>
      <p className="text-[32px] mb-wide font-[600] text-p ">
        Explore top destination
      </p>
      <div className="flex justify-between items-center">
        <ArrowButton active={false} />
        <ArrowButton active={true} />
        
      </div>
      <div className="flex flex-col gap-wide py-wide items-center ">
            {destinations.map((item, index) => (
                <DestinationCard item={item} key={`${index}_${item.name}`} />
            ))}
        </div>
    </section>
  );
};

export default Destinations;
