import React from "react";
import { testimonials } from "../constants";
import { bgQuotes } from "../assets";

const Testimonials = () => {
  return (
    <section className="grid px-6 py-12 md:py-16 md:px-8 lg:px-12 xl:px-16 gap-6 md:grid-cols-2 lg:grid-cols-3 bg-primary-2">
      {testimonials.map(({ id, image, name, post, testimonial }) => (
        <div
          className="bg-primary-4 rounded-md p-6 text-sm md:text-base space-y-6 max-w-sm relative"
          key={id}
        >
          <p className="leading-relaxed opacity-80">{testimonial}</p>
          {/* profile */}
          <div className="flex items-center gap-2">
            <img className="h-8 rounded-full" src={image} alt="" />
            <div>
              <p className="font-bold text-xs">{name}</p>
              <p className="text-xs opacity-70">{post}</p>
            </div>
          </div>
          {id == 1 && (
            <img
              className="select-none absolute -top-12 h-6 left-0 md:h-8 lg:h-9 xl:h-10 xl:-top-14"
              src={bgQuotes}
              alt=""
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
