import React from "react";
import { header } from "../constants";
import { bgDesktop, bgMobile } from "../assets";

const Header = () => {
  const { heading, button, text, image } = header;
  return (
    <section
      className={`px-8 py-12 md:py-16 text-center space-y-6 flex flex-col relative items-center`}
    >
      <img
        className="absolute bottom-0 w-full md:hidden"
        src={bgMobile}
        alt=""
      />
      <img
        className="absolute bottom-0 w-full hidden md:block"
        src={bgDesktop}
        alt=""
      />
      <img className="isolate" src={image} alt="" />
      <h1 className="text-xl font-bold font-raleway md:text-2xl lg:text-3xl xl:text-4xl max-w-2xl leading-relaxed isolate">
        {heading}
      </h1>
      <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-lg isolate">
        {text}
      </p>
      <button className="py-3 shrink-0 w-full px-6 max-w-[15rem] rounded-full bg-gradient-to-r from-accent-1 to-accent-2 font-bold font-raleway isolate hover:to-accent-1">
        {button}
      </button>
      {/* <img src={bgMobile} alt="" /> */}
    </section>
  );
};

export default Header;
