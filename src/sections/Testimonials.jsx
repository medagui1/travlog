import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/testimonials";
import ArrowButton from "../components/ArrowButton";

const Testimonials = () => {
  // TODO
  // add two more testimonial and implement the animation logic

  return (
    <section className="py-wide-text-center flex flex-col items-center">
      <h2 className="uppercase text-primary font-[600] text-h2 tracking-[3px] mb-thin">
        Testimonials
      </h2>
      <p className="text-[32px] mb-wide font-[600] text-p ">
        Trust our clients
      </p>
      {testimonials.slice(0, 1).map((item, index) => (
        <TestimonialCard item={item} key={index} />
      ))}
      <div className="my-wide flex gap-normal">
        <div className="bg-[#19182505] h-8 w-8 rounded-full pointer-events-none"></div>
        <div className="bg-primary h-8 w-8 rounded-full pointer-events-none"></div>
        <div className="bg-[#19182505] h-8 w-8 rounded-full pointer-events-none"></div>
      </div>
      <div className="flex justify-between items-center py-wide w-full">
        <ArrowButton active={false} />
        <ArrowButton active={true} />
      </div>
    </section>
  );
};

export default Testimonials;
