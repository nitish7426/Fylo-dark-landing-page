import React from "react";
import { footer } from "../constants";
import { iconEmail, iconLocation, iconPhone, logo } from "../assets";

const Footer = () => {
  const { address, email, phoneNo, links1, links2, socials } = footer;
  return (
    <footer className="px-6 bg-primary-3 md:px-8 lg:px-12 xl:px-16 py-12 text-sm md:text-base text-white/80 space-y-8">
      {/* left section */}
      <a href="">
        <img className="h-12" src={logo} alt="" />
      </a>

      <div className="flex flex-col gap-12 md:flex-row md:justify-between ">
        <div className="flex gap-4 items-start max-w-sm">
          <img src={iconLocation} alt="" />
          <p>{address}</p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <img src={iconPhone} alt="" />
            <p>{phoneNo}</p>
          </div>
          <div className="flex gap-4 items-center">
            <img src={iconEmail} alt="" />
            <p>{email}</p>
          </div>
        </div>

        {/* center */}
        <nav className="flex flex-col gap-4">
          {links1.map((link) => (
            <a className="hover:text-white" key={link} href="">
              {link}
            </a>
          ))}
        </nav>
        {/* right */}
        <nav className="flex flex-col gap-4">
          {links2.map((link) => (
            <a className="hover:text-white" key={link} href="">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
