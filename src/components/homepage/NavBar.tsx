"use client"
// import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LuCircleUserRound } from "react-icons/lu";


const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  const navLinks = [
    { id: "home", title: "Home" },
    { id: "products", title: "Products" },
    { id: "about", title: "About" },
    { id: "contact", title: "Contact us" },
  ];
  return (
    <nav
      className={`navbar px-10 top-0 left-0 z-50 transition-all duration-300 `}
    >
      <div className="navbar-start">
        <Link href="/" className="flex-shrink-0">
          <h2 className="text-2xl font-bold font-style">ATNFY</h2>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={`/${link.id}`}
                className={`text-lg font-medium hover:text-gray-500 hover:bg-none`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {/* Desktop  */}
        <div className="hidden lg:block">
          {isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="rounded-full">
                  {/* <Image src="/placeholder-avatar.jpg" alt="User Avatar" /> */}
                  <LuCircleUserRound className="text-5xl text-center" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/update-user" className="justify-between">
                    Update User
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li className="text-red-500 hover:text-white hover:bg-red-500 font-medium rounded-md hover:rounded-full">
                  <a onClick={() => setIsLoggedIn(false)}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <button className="px-5 py-2.5 transition-all ease-in font-bold hover:text-black hover:bg-white hover:border-4 border-black text-white bg-black duration-300">
              <Link href="/login">Login</Link>
              <span className="relative "></span>
            </button>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 relative w-6 h-6"
          onClick={() => setToggle(!toggle)}
        >
          <span
            className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
              toggle ? "rotate-45 top-3" : "rotate-0 top-1"
            }`}
          />
          <span
            className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
              toggle ? "opacity-0 translate-x-3" : "opacity-100"
            } top-3`}
          />
          <span
            className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
              toggle ? "-rotate-45 top-3" : "rotate-0 top-5"
            }`}
          />
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-base-100 z-40 flex flex-col justify-center items-center transition-all duration-500 lg:hidden ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="space-y-8 font-Merri">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`transform transition-all duration-300 text-center ${
                toggle
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                href={`/${link.id}`}
                className="text-4xl font-bold text-black hover:text-gray-600 transition-colors duration-300"
                onClick={() => setToggle(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
          {/* Mobile User Actions */}
          {isLoggedIn && (
            <>
              <li
                className={`transform transition-all duration-300 ${
                  toggle
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${navLinks.length * 100}ms` }}
              >
                <Link
                  href="/update-user"
                  className="text-4xl font-bold text-blue-500 hover:text-blue-600 transition-colors duration-300"
                  onClick={() => setToggle(false)}
                >
                  Update User
                </Link>
              </li>
              <li
                className={`transform transition-all duration-300 ${
                  toggle
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${(navLinks.length + 1) * 100}ms` }}
              >
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setToggle(false);
                  }}
                  className="text-4xl font-bold text-red-500 hover:text-red-600 transition-colors duration-300 flex justify-center items-center w-full"
                >
                  Logout
                </button>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <li
              className={`transform transition-all duration-300 ${
                toggle
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${navLinks.length * 100}ms` }}
            >
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                  setToggle(false);
                }}
                className="text-4xl font-bold text-black hover:text-white hover:bg-black transition-colors duration-300"
              >
                <Link href="/login">Login</Link>
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
