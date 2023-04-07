import React from "react";
import { features } from "../constants";

const Features = () => {
  return (
    <section className="px-6 py-12 md:py-16 grid md:grid-cols-2 gap-6 place-items-center bg-primary-2">
      {features.map(({ heading, icon, id, text }) => (
        <div className="text-center space-y-4 py-6 px-2 max-w-sm" key={id}>
          <img className="mx-auto" src={icon} alt="" />
          <h2 className="font-bold font-raleway">{heading}</h2>
          <p className="text-sm text-white/80 leading-relaxed">{text}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
