"use client";

import { LOGO } from "@/constants/IMAGES";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import { menuItems } from "@/constants/menu";

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-20 border-b border-white border-opacity-50 flex">
      <div className="xl:max-w-md w-full bg-white h-full flex items-center justify-between px-5 md:px-20">
        <Link href={"/"}>
          <div className="flex items-center space-x-3 text-primary">
            <img src={LOGO.src} alt="logo" className="h-12 md:h-14" />
            <div>
              <h2 className="font-bold uppercase text-xl md:text-2xl tracking-wide">
                Sifa World
              </h2>
              <div className="uppercase text-sm text-primary tracking-widest">
                Nigeria Limited
              </div>
            </div>
          </div>
        </Link>
        <div className="xl:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>
      <div className="hidden xl:flex flex-1 text-white items-center justify-between px-5 md:px-20">
        <Link
          href={"/contact"}
          className="w-fit border border-white rounded-full px-7 py-3 uppercase text-sm"
        >
          Contact
        </Link>
        <nav className="">
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link
                className="px-5 py-2 uppercase text-sm"
                key={item.name}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default TopNav;
