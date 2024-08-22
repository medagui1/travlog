import React from "react";
import { features } from "../data/features";
import FeatureCard from "../components/FeatureCard";

const KeyFeatures = () => {
  return (
    <section className="py-wide text-center flex items-center flex-col">
      <img src="images/features.png" alt="" className="mb-widest"/>
      <h2 className="uppercase text-primary font-[600] text-h2 tracking-[3px] mb-thin">
        key features
      </h2>
      <p className="text-[32px] mb-wide font-[600] text-p ">
        We offer the best services
      </p>
      <p className="text-p-50 text-fs-p mb-wide max-w-[340px] ">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC.
      </p>
      <div className="grid grid-rows-4 grid-cols-1 gap-2 w-full justify-items-center">
        {features.map((item, index) => (
          <FeatureCard  item={item} key={`${index}_${item.title}`} />
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
