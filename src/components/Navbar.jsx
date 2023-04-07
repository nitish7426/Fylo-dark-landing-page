import React from "react";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between h-16 md:h-20 lg:h-24 xl:h-32 px-6 md:px-8 lg:px-12 xl:px-16">
      <a href="">
        <img className="h-6 md:h-8" src={logo} alt="" />
      </a>
      <nav className="space-x-6 text-sm md:text-base md:space-x-8 lg:space-x-10 xl:space-x-12 text-white/80">
        {navLinks.map((value) => (
          <a className="hover:text-white" key={value} href="">
            {value}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
