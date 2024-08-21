import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const Services = () => {
  return (
    <section className="py-wide text-center">
      <h2 className="uppercase text-primary font-[600] text-h2 tracking-[3px] mb-thin">
        services
      </h2>
      <p className="text-[32px] mb-wide font-[600] text-p ">
        Our top value categories for you
      </p>
      <div className="flex flex-col gap-thin">
      {services.map((item, index) => (
        <ServiceCard item={item} key={`${index}_${item.title}`} />
      ))}
      </div>
    </section>
  );
};

export default Services;
