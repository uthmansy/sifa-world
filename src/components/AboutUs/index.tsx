"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import { HERO_1, HERO_2 } from "@/constants/IMAGES";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      customer: "John",
      text: `Sifa World has been instrumental in expanding our reach and improving our trade operations. Their expertise and quality service have helped us achieve new milestones in business.`,
    },
    {
      customer: "Usman",
      text: `We’ve trusted Sifa World for our real estate investments, and they’ve never disappointed. Their guidance and market knowledge have made all the difference in our property ventures.`,
    },
    {
      customer: "Shuaibu",
      text: `From trading solutions to merchandising, Sifa World consistently delivers top-notch service. Their professionalism and commitment to excellence have made them a trusted partner for our company.`,
    },
  ];

  const titleRef = useRef(null);
  const firstContentRef = useRef(null);
  const bgOneRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: bgOneRef.current,
        start: "top 40%", // Start animation when image enters viewport
        // toggleActions: "play none none none", // Play animation once
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-img-area",
        start: "top 80%", // Start animation when image enters viewport
        end: "bottom 40%",
        // toggleActions: "play none none none", // Play animation once
        scrub: true,
      },
    });
    tl1
      .fromTo(
        bgOneRef.current,
        { width: "0%" }, // Start with the image completely hidden (width = 0)
        {
          width: "50%", // Expand to full width
          duration: 0.5, // Duration of the animation
          ease: "power4.out", // Smooth easing effect
        }
      )
      .fromTo(
        ".about-comp-2",
        { opacity: 0, y: 50 }, // Start with the image completely hidden (width = 0)
        {
          opacity: 1,
          y: 0, // Expand to full width
          duration: 1.5, // Duration of the animation
          ease: "power3.out", // Smooth easing effect
          stagger: 0.3,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 70%", // Start animation when image enters viewport
            // toggleActions: "play none none none", // Play animation once
          },
        }
      );
    // tl2.to("#about-img-area", {
    //   scale: 1.2, // Expand to full width
    // });
    gsap.fromTo(
      [titleRef.current, firstContentRef.current],
      { opacity: 0, y: 50 }, // Start with the image completely hidden (width = 0)
      {
        opacity: 1,
        y: 0, // Expand to full width
        duration: 1.5, // Duration of the animation
        ease: "power3.out", // Smooth easing effect
        stagger: 0.3,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 70%", // Start animation when image enters viewport
          // toggleActions: "play none none none", // Play animation once
        },
      }
    );
  }, []);

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change content every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials]);

  // Navigation Handlers
  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 lg:gap-72 py-24 md:py-40">
          <div ref={titleRef}>
            <SectionTitle>About Us</SectionTitle>
          </div>
          <div>
            <p ref={firstContentRef}>
              Sifa World is a dynamic and diversified company specializing in
              general trading, merchandise, and real estate development. Our
              commitment to excellence drives us to provide high-quality
              products and services that meet the ever-evolving needs of
              businesses and individuals alike. Whether you're looking for
              premium trading solutions, commercial or residential real estate,
              or unique business opportunities, Sifa World is here to help you
              succeed.
            </p>
          </div>
        </div>
      </Container>
      <div className="relative py-24 md:py-40 bg-primary md:bg-white">
        <div className="absolute bottom-0 right-0 w-[50%] bg-gray-200 h-56 hidden md:block" />
        <div
          ref={bgOneRef}
          className="absolute w-[50%] left-0 bottom-0 top-0 bg-primary "
        />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-40 lg:gap-72 mb-24 md:mb-28 relative text-center md:text-left">
            <div>
              <p className="about-comp-2 text-2xl md:text-4xl text-white mb-10 md:mb-20">
                Unlocking New Horizons in Business.
              </p>
              <Link
                href={"/about"}
                className="about-comp-2 px-10 py-4 border border-accent text-white rounded-full uppercase"
              >
                Read More
              </Link>
            </div>
            <div className="text-white md:text-inherit">
              <h3 className="about-comp-2 text-2xl md:text-5xl mb-5 md:mb-8 font-semibold">
                Where Vision Meets Opportunity.
              </h3>
              <p className="about-comp-2">
                Sifa World is a versatile and forward-thinking company
                specializing in general trading, merchandise, and real estate.
                We are dedicated to delivering high-quality products, services,
                and investment opportunities that foster growth and innovation
                for businesses and individuals alike. With years of experience
                in the industry, we understand the importance of trust,
                reliability, and strategic partnerships in driving success.
              </p>
            </div>
          </div>
          <div
            id="about-img-area"
            className=" aspect-[2/3] md:aspect-[9/4] w-full relative flex"
          >
            <div className="w-14 md:w-28 bg-accent"></div>
            <div className="flex-1 relative flex items-center justify-center">
              <img
                src={HERO_2.src}
                alt=""
                className="w-full h-full object-cover mix-blend-multiply absolute top-0 left-0 bottom-0 right-0 "
              />
              <h2 className="text-white text-4xl md:text-7xl text-center opacity-80 italic">
                Unlocking New Horizons in Business.
              </h2>
            </div>
          </div>
        </Container>
      </div>
      <div className="relative">
        <div className="absolute top-0 right-0 w-[50%] bg-gray-200 h-[80%] hidden md:block" />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-28 md:gap-40 lg:gap-72 py-24 md:py-40 relative">
            <div className="flex flex-col space-y-8">
              <p>
                Our general trading division sources and distributes a wide
                variety of products, ensuring our clients have access to
                top-tier merchandise that meets their needs. In real estate, we
                focus on both commercial and residential properties, offering
                development, sales, and management solutions designed to
                maximize value. Additionally, our expert consultancy services
                guide businesses through the complexities of trade and real
                estate investments, providing tailored strategies for long-term
                growth.
              </p>
              <p>
                At Sifa World, we believe in creating lasting relationships and
                empowering clients to achieve their goals through innovative
                solutions and a commitment to excellence. Whether you are
                looking to expand your business, invest in real estate, or
                explore new trading opportunities, Sifa World is here to help
                you succeed.
              </p>
              <Link
                href={"/about"}
                className="w-fit px-10 py-4 border border-primary text-primary rounded-full uppercase"
              >
                Read More
              </Link>
            </div>
            <div>
              <div className="md:-mt-20 text-primary flex flex-col space-y-8">
                <h3 className="uppercase text-sm font-bold relative">
                  See what our customers are saying{" "}
                  <span className="absolute left-0 -bottom-3 h-[2px] opacity-70 w-24 bg-primary"></span>
                </h3>
                <div className="relative">
                  <p className="text-2xl md:text-4xl invisible">
                    {testimonials[0].text}
                  </p>
                  {testimonials.map((item, index) => (
                    <p
                      key={index}
                      className={`absolute top-0 transition-all duration-700 text-2xl md:text-4xl italic ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.text}
                    </p>
                  ))}
                </div>
                <div className="relative">
                  {testimonials.map((item, index) => (
                    <p
                      key={index}
                      className={`absolute top-0 left-0 text-sm uppercase font-semibold transition-all duration-700 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.customer} - Customer
                    </p>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className="border border-primary rounded-full h-14 w-14 flex items-center justify-center"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next Slide"
                    className="border border-primary rounded-full h-14 w-14 flex items-center justify-center"
                  >
                    ➝
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default AboutUs;
