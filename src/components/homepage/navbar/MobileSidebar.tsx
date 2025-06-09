import Link from "next/link";
import React, { useState } from "react";
import { Menu, ShoppingBag, X, User, Phone, Heart } from "lucide-react";


const navLinks = [
  "New Arrivals",
  "Men",
  "Women",
];

const bottomLinks = [
  {
    id: "login",
    title: "Log In",
    icon: <User className="text-sm" />,
  },
  {
    id: "contact",
    title: "Contact us",
    icon: <Phone className="text-sm" />,
  },
//   {
//     id: "store-locator",
//     title: "Store locator",
//     icon: <ShoppingBag className="text-sm" />,
//   },
];

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2"
        aria-label="Open Menu"
      >
        <span className="text-xl"><Menu size={24}/></span>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-6 border-b">
          <X
            size={28}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-gray-700"
          />
          <h1 className="text-2xl font-serif font-semibold">
            ATNFY
          </h1>
          <div className="flex gap-4 text-xl">
            <Heart size={24}/>
            <span className="relative">
              <ShoppingBag size={24}/>
              <span className="absolute -top-1 -right-2 text-xs bg-black text-white w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </span>
          </div>
        </div>

        {/* Menu Links */}
        <div className="p-6 space-y-6">
          {navLinks.map((title) => (
            <Link
              key={title}
              href={`/${title.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex justify-between items-center text-gray-800 text-lg font-light hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {title}
              <span className="text-xl">→</span>
            </Link>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="mt-12 border-t pt-6 px-6 space-y-4">
          {bottomLinks.map((link) => (
            <Link
              key={link.id}
              href={`/${link.id}`}
              className="flex items-center gap-3 font-light hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
