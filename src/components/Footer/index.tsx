import React from "react";
import Container from "../Container";
import Link from "next/link";
import { LOGO, LOGO_WHITE } from "@/constants/IMAGES";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-secondary text-white py-24 md:py-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 lg:gap-40 border-b border-primary pb-10">
          <div className="flex flex-col space-y-5">
            <Link href={"/"}>
              <div className="flex items-center space-x-3">
                <img src={LOGO_WHITE.src} alt="logo" className="h-14 md:h-16" />
                <div className="text-white">
                  <h2 className="font-bold uppercase text-xl md:text-2xl tracking-wide">
                    Trend Ab
                  </h2>
                  <div className="uppercase text-sm tracking-widest">
                    Integrated Farms
                  </div>
                </div>
              </div>
            </Link>
            <p className="max-w-md">
              Thank you for choosing Sifa World. We are committed to delivering
              innovative products, services, and real estate solutions that
              drive business growth and long-term success. Connect with us for
              all your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 lg:gap-40">
            <div>
              <h4 className="uppercase font-bold mb-2 tracking-wider text-white">
                Contact
              </h4>
              <ul className="flex flex-col space-y-3">
                <li>info@sifaworld.com</li>
                <li>
                  Head Office: No. 4 Fez Street, Off Kumasi Crescent, Aminu
                  Kano, Wuse 2, Abuja.
                </li>
                {/* <li>+234 000 000 0000</li> */}
              </ul>
            </div>
            <div>
              <h4 className="uppercase font-bold mb-2 tracking-wider text-white">
                Follow Us
              </h4>
              <ul className="flex flex-col space-y-3">
                <li>info@trendab</li>
                <li className="flex items-center space-x-3">
                  <Link
                    href={"x.com"}
                    className="w-8 h-8 flex items-center justify-center bg-white text-black"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href={"facebook.com"}
                    className="w-8 h-8 flex items-center justify-center bg-white text-black"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href={"instagram.com"}
                    className="w-8 h-8 flex items-center justify-center bg-white text-black"
                  >
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="w-fit md:ml-auto mt-10 opacity-70">
          &copy; Trend AB Integrated Farms. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
