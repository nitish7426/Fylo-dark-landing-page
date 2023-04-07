import React from "react";
import { cta } from "../constants";

const CTA = () => {
  const { button, heading, text } = cta;
  return (
    <section className="flex items-center justify-center px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 bg-gradient-to-t from-primary-3 to-primary-2 from-50% to-50%">
      <div className="bg-primary-4 p-6 md:p-8 lg:p-12  text-center rounded-xl space-y-4 max-w-3xl">
        <h3 className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-raleway">
          {heading}
        </h3>
        <p className="text-sm md:text-base text-white/80 leading-relaxed">
          {text}
        </p>
        <form className="flex flex-col gap-4 md:flex-row">
          <input
            className="py-3 px-4 rounded-full w-full"
            type="text"
            placeholder="email@example.com"
          />
          <button className="py-3 shrink-0 px-6 rounded-full bg-gradient-to-r from-accent-1 to-accent-2 font-bold font-raleway hover:to-accent-1">
            {button}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
