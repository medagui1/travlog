import React from "react";

const TestimonialCard = ({ item }) => {
  return (
    <div className="text-center py-wide max-w-[400px]">
      <img src={item.img} alt="" className="m-auto mb-widest" />
      <p className="text-[24px] mb-wide">
        <span className="text-[32px] text-[#FF5722] ">{item.name}</span> / {item.job}
      </p>
      <p className=" text-[24px] tracking-[8px] mb-widest">⭐⭐⭐⭐⭐</p>
      <p className=" text-[18px] text-[#19182575] "> {item.testimonial} </p>
    </div>
  );
};

export default TestimonialCard;
