import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;
  const [isNavOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  return (
    <>
      <nav className="w-full flex justify-between h-16 bg-gray-100 items-center">
        <div className="logo">
          <Link href="/">LOGO</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="items-center hidden sm:flex">
          <li className="links">
            <Link href="/">Home</Link>
          </li>
          <li className="links">
            <Link href="/about">About</Link>
          </li>
          <li className="links">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="links">
            <Link href="/more">More</Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div
          className="flex justify-center items-center w-[30px] h-[30px] relative sm:hidden mr-8"
          onClick={toggleNav}
        >
          <div
            className={`w-[25px] h-[3px] bg-red-300 absolute ${
              isNavOpen ? "translate-y-0 rotate-[45deg]" : "translate-y-2"
            } transition-all ease-linear duration-150`}
          ></div>
          <div
            className={`w-[25px] h-[3px] bg-red-100 absolute ${
              isNavOpen ? "w-0" : ""
            } transition-all ease-linear duration-150`}
          ></div>
          <div
            className={`w-[25px] h-[3px] bg-red-400 absolute ${
              isNavOpen ? "translate-y-0 rotate-[-45deg]" : "-translate-y-2"
            } transition-all ease-linear duration-150`}
          ></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`w-full h-screen fixed bg-red-400 z-50 ${
          isNavOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center pt-8">
          <li className="mob-links">
            <Link
              href="/"
              className={`${path === "/" ? "text-white" : ""}`}
              onClick={toggleNav}
            >
              Home
            </Link>
          </li>
          <li className="mob-links">
            <Link
              href="/about"
              className={`${path === "/about" ? "text-white" : ""}`}
              onClick={toggleNav}
            >
              About
            </Link>
          </li>
          <li className="mob-links">
            <Link
              href="/contact"
              className={`${path === "/contact" ? "text-white" : ""}`}
              onClick={toggleNav}
            >
              Contact
            </Link>
          </li>
          <li className="mob-links">
            <Link
              href="/more"
              className={`${path === "/more" ? "text-white" : ""}`}
              onClick={toggleNav}
            >
              More
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
