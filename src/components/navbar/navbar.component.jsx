import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-between h-16 bg-gray-100 items-center">
        <div className="logo">
          <Link href="/">LOGO</Link>
        </div>
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

        <div className="sm:hidden">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </>
  );
}
