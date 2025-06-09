"use client";
import Link from "next/link";
import React from "react";
import { Search, ShoppingBag } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

const Navbar: React.FC = () => {

  const navLinks = [
    { id: "shop", title: "Shop" },
    { id: "men", title: "Men's" },
    { id: "women", title: "Women's" },
  ];

  const rightNavLinks = [
    { id: "search", title: "Search" },
    { id: "account", title: "Account" },
    { id: "cart", title: "Cart" },
  ];

  return (
    <nav className="w-full px-4 py-3 bg-white border-b">
      <div className="flex items-center justify-between">
        {/* mobile menu */}
        <MobileSidebar />

        {/* Left nav links */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`/${link.id}`}
              className="lg:text-lg text-base hover:text-gray-500 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Center: Logo */}
        <Link href="/" className="text-4xl font-bold tracking-wider">
          ATNFY
        </Link>

        {/* Right Navigation */}
        <div className="hidden lg:flex space-x-6">
          {rightNavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.id}
              className="lg:text-lg text-base hover:text-gray-500 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Right Navigation */}
        <div className="flex lg:hidden items-center space-x-4">
          <Link href="/search">
            <Search size={22} />
          </Link>
          <Link href="/cart">
            <ShoppingBag size={22} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
