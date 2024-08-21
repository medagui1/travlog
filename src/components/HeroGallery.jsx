import React from "react";

const HeroGallery = () => {
  return (
    <div className="flex gap-thin z-[10] p-5">
      <div className="flex flex-col gap-thin">
        <div className="relative">
          <img src="images/hero/hero-1.png" alt="" />
          <a className="w-8 h-8 shadow-blackd shadow-xl rounded-full bg-[#F85E9F] absolute bottom-[-16px] left-[-16px] flex justify-center items-center" href="#">
            <img
              src="icons/send.png"
              alt=""
              width={18}
              height={18}
              className=""
            />
          </a>
        </div>
        <div>
          <img src="images/hero/hero-2.png" alt="" />
        </div>
      </div>
      <div className=" flex justify-center items-center relative">
        <img src="images/hero/hero-3.png" className="object-cover" alt="" />
        <a className="bg-white flex justify-center items-center gap-1 rounded-full absolute px-[12px] py-[6px] bottom-[80px] right-[-24px] ">
            <img src="icons/hero-location.png" alt="" className="h-4"/>
            <p className="text-[12px] ">Top Places</p>
        </a>
        <a className="w-8 h-8 rounded-full bg-[#FF5722] shadow-xl absolute bottom-0 left-8 flex justify-center items-center" href="#">
            <img
              src="icons/add-user.png"
              alt=""
              width={18}
              height={18}
              className=""
            />
          </a>
      </div>
      
    </div>
  );
};

export default HeroGallery;
