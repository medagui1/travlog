import React from "react";

const DestinationCard = ({ item }) => {
  return (
    <figure className="rounded-[32px] text-left bg-white max-w-[400px] card">
      <img src={item.img} alt="" className="object-cover w-full " />
      <div className="p-wide">
        <p className="text-primary text-[24px] ">${item.price} </p>
        <p className="text-secondary text-[24px] mb-thin "> {item.name} </p>
        <p className="text-[#19182575] font-[18px] mb-wide">
          {" "}
          {item.location}{" "}
        </p>
        <div className="flex gap-2  items-center">
          <p className="text-[24px] text-[#FF5722] "> {item.rating} </p>
          <img src="icons/star.png" alt="" />
        </div>
      </div>
    </figure>
  );
};

export default DestinationCard;
