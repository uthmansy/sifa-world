import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

interface Props {
  currentSlide: number;
  titlesRef: React.MutableRefObject<HTMLElement[]>;
  nextSlide: () => void;
  prevSlide: () => void;
}

function Hero({ currentSlide, titlesRef, nextSlide, prevSlide }: Props) {
  const titles: string[] = [
    `Welcome to Sifa World.`,
    `Innovative Solutions, Endless Possibilities.`,
    `Building Future, One Deal at a Time.`,
  ];

  return (
    <div className="relative flex-1 flex ">
      <div className="hidden max-w-md w-full bg-white h-full xl:flex items-end p-5 md:p-20">
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl md:text-6xl font-light">
            Sifa World Nigeria.
          </h1>
          <p>Where Business Meets Excellence.</p>
          <Link
            href={"/about"}
            className="w-fit bg-secondary rounded-full px-7 py-3 uppercase text-sm text-white"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex-1 p-5 md:p-20 h-full flex items-end text-white relative">
        <div className="absolute right-5 md:right-20 top-0 bottom-0 h-full flex items-center">
          <div className="flex flex-col items-center space-y-5">
            <Link
              href={"x.com"}
              className="w-8 h-8 text-xl flex items-center justify-center text-white"
            >
              <FaTwitter />
            </Link>
            <Link
              href={"facebook.com"}
              className="w-8 h-8 text-xl flex items-center justify-center text-white"
            >
              <FaFacebook />
            </Link>
            <Link
              href={"instagram.com"}
              className="w-8 h-8 text-xl flex items-center justify-center text-white"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-6 w-full">
          <span className="opacity-70 uppercase">Industry Professionals</span>
          <div className="relative">
            <h1
              className="text-4xl md:text-6xl font-semi-bold max-w-xl invisible"
              data-nosnippet
            >
              {titles[0]}
            </h1>
            {titles.map((title, index) => (
              <h1
                ref={(el) => {
                  if (el) titlesRef.current[index] = el;
                }}
                key={index}
                className={`text-4xl md:text-6xl font-semi-bold max-w-xl absolute top-0 left-0 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                {title}
              </h1>
            ))}
          </div>
          <p className="opacity-70">
            Pioneering Trades, Transforming Real Estate.
          </p>
          <Link
            href={"/about"}
            className="w-fit border border-white border-opacity-70 rounded-full px-7 py-3 uppercase text-sm text-white"
          >
            Learn More
          </Link>
          <div className="flex w-full pt-10 items-center space-x-5">
            <div>0{currentSlide + 1} -03</div>
            <div className="flex-1 flex items-center">
              {Array(3)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className={`h-[2px] bg-white flex-1 transition-all duration-500 ${
                      index === currentSlide ? "opacity-70" : "opacity-30"
                    }`}
                  />
                ))}
            </div>
            <div className="flex space-x-2 z-30">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="bg-white text-gray-700 rounded-full h-12 w-12 flex items-center justify-center"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="bg-white text-gray-700 rounded-full h-12 w-12 flex items-center justify-center"
              >
                ➝
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
