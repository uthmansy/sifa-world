import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Container from "../Container";
import Link from "next/link";
import { HERO_1, HERO_2, HERO_3, LOGO } from "@/constants/IMAGES";
import TopNav from "./TopNav";
import Hero from "./Hero";
import gsap from "gsap";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Team", href: "/team" },
];

function Header() {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const titlesRef = useRef<HTMLElement[]>([]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const [backwards, setBackwards] = useState(false);
  const images = useMemo(() => [HERO_1.src, HERO_2.src, HERO_3.src], []);

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);
  }, []);

  useLayoutEffect(() => {
    if (!imagesRef.current[currentSlide] || !startAnimation) return;
    const nextSlide = backwards
      ? (currentSlide - 1 + images.length) % images.length
      : (currentSlide + 1) % images.length;

    const tl = gsap.timeline({
      onComplete: () => {
        setBackwards(false);
      },
    });
    tl.fromTo(
      titlesRef.current[currentSlide],
      {
        clipPath: "inset(0% 0 0 0)",
        opacity: 1,
        y: 20,
        ease: "back.out(1.7)", // Matches image fade-out
      },
      {
        clipPath: "inset(100% 0 0 0)",
        opacity: 1,
        duration: 0.2,
        y: 20,
        ease: "back.out(1.7)", // Matches image fade-out
        // stagger: 0.05,
      }
    )
      .to(imagesRef.current[currentSlide], {
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: "power2.out", // Smooth fade-out and scale-down
      })
      .fromTo(
        imagesRef.current[nextSlide],
        { opacity: 0, scale: 1.2 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out", // Adds dynamic entry with slight scaling
        },
        "-=0.6" // Slight overlap for seamless transition
      )
      .fromTo(
        titlesRef.current[nextSlide],
        { opacity: 1, clipPath: "inset(100% 0 0 0)" },
        {
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          duration: 0.3,
          //   stagger: 0.05,
        }
      );

    return () => {
      tl.kill(); // Clean up the animation
    };
  }, [currentSlide]);

  // Auto-play logic
  useEffect(() => {
    const interval = setTimeout(() => {
      setStartAnimation(true);
    }, 1000); // Change content every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartAnimation(true);
      setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change content every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images, currentSlide]);

  // Navigation Handlers
  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setBackwards(true);
  };

  return (
    <header className="relative h-[75vh] md:h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <img
          data-scroll
          data-scroll-speed={-0.3}
          key={index}
          ref={(el) => {
            if (el) imagesRef.current[index] = el;
          }}
          src={image}
          alt={`Slide ${index + 1}`}
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
          style={{
            filter: "brightness(40%)",
            opacity: index === currentSlide ? 1 : 0,
          }}
        />
      ))}
      <div className="h-full w-full flex flex-col">
        <TopNav />
        <Hero
          titlesRef={titlesRef}
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </div>
    </header>
  );
}

export default Header;
