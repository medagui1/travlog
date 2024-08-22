import React from "react";

const HeroContent = () => {
  return (
    <div className="text-center w-full flex justify-center items-center flex-col">
      <a
        href="#"
        className="bg-white text-primary rounded-full py-thin px-wide font-bold flex gap-thin w-max btn card"
      >
        <p>Explore the world!</p>
        <img src="icons/work.png" alt="" />
      </a>
      <h1 className="text-h1 font-[600] leading-[50px] mt-thin">
        Travel <span className="text-primary">top destination</span> of the
        world
      </h1>
      <p className="text-fs-p text-p-50 mt-normal">
        We always make our customer happy by providing as many choices as
        possible{" "}
      </p>
      <div className="flex flex-col gap-normal w-full my-wide">
        <a
          href="#"
          className="bg-[#5D50C6] text-white rounded-full font-bold py-normal  shadow-xl btn"
        >
          Get Started
        </a>
        <a
          href="#"
          className="bg-white text-secondary rounded-full font-bold py-normal flex gap-2 justify-center items-center btn border-[2px] "
        >
          <img src="icons/hero-watch.png" alt="" />
          <p>Watch Demo</p>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
