import React from "react";

const FeatureCard = ({ item }) => {
  return (
    <div
      className={`p-wide flex items-start flex-col ${
        item.border &&
        "border-[2px] border-[#19182510] rounded-[32px] w-full max-w-[400px] "
      }`}
    >
      <div
        className={`w-[100px] h-[100px] rounded-[32px] flex justify-center items-center mb-wide `}
        style={{ backgroundColor: item.bg_color }}
      >
        <img src={item.icon} alt="" />
      </div>
      <h3 className="text-[24px] font-semibold"> {item.title} </h3>
      <p className="text-[18px] text-p-50"> {item.description} </p>
    </div>
  );
};

export default FeatureCard;
