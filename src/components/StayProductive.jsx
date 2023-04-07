import React from "react";
import { stayProductiveObj } from "../constants";
import { iconArrow } from "../assets";

const StayProductive = () => {
  const { heading, link, text, image } = stayProductiveObj;
  return (
    <section className="py-12 md:py-16 bg-primary-2 md:flex px-6 md:px-8 lg:px-12 xl:px-16 items-center md:gap-6 lg:gap-8 xl:gap-12">
      <div className="flex-1">
        <img src={image} alt="" />
      </div>
      <div className="space-y-4 flex-1">
        <h2 className="font-bold font-raleway md:text-lg lg:text-xl xl:text-4xl">
          {heading}
        </h2>
        {text.map((value, i) => (
          <p className="text-sm md:text-base text-white/80" key={i}>
            {value}
          </p>
        ))}
        <a
          className="flex items-center gap-2 hover:text-white hover:border-white text-sm border-b w-fit pb-1 border-accent-1 text-accent-1"
          href=""
        >
          {link}
          <img src={iconArrow} alt="" />
        </a>
      </div>
    </section>
  );
};

export default StayProductive;
