"use client";
import Link from "next/link";
import React, { useState } from "react";

const routes = [
  { name: "Pricing", path: "/#pricing", isDropdown: false },
  { name: "FAQ", path: "/#faq", isDropdown: false },
  { name: "Blog", path: "/blog", isDropdown: false },
  {
    name: "Other Features",
    isDropdown: true,
    submenu: [
      { name: "AI Web Scraping", path: "/features/ai-web-scraping-api" },
      { name: "Screenshots", path: "/features/screenshot" },
      { name: "Google Search API", path: "/features/google" },
      { name: "Data extraction", path: "/features/data-extraction" },
      { name: "JavaScript scenario", path: "/features/javascript-scenario" },
      { name: "No code web scraping", path: "/features/make" },
    ],
  },
  {
    name: "Developers",
    isDropdown: true,
    submenu: [
      { name: "Tutorials", path: "/tutorials" },
      { name: "Documentation", path: "/documentation" },
      { name: "Knowledge Base", path: "/en" },
    ],
  },
];

const NavButton = ({
  subMenuItems,
  itemName,
}: {
  subMenuItems: any[];
  itemName: string;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div onMouseLeave={(e) => setIsDropdownOpen(false)}>
      <div
        className="hover:text-gray-300 cursor-pointer"
        onMouseEnter={(e) => setIsDropdownOpen(true)}
      >
        {itemName}
      </div>
      {isDropdownOpen && (
        <ul className="absolute w-fit px-5 py-2 rounded-lg bg-black text-white">
          {subMenuItems.map((item) => (
            <li key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
const Navbar = () => {
  return (
    <div className="absolute mt-6">
      <div className="relative w-screen">
        <nav className="flex gap-52 w-7/12 mx-auto justify-between">
          <img
            className="aspect-video 2xl"
            src="/logo.svg"
            height="26"
            width="160"
          />
          <div className="flex justify-between w-screen overflow-hidden">
            <ul
              id="navbar-paths"
              className="flex align-middle gap-12 items-center"
            >
              {routes.map((path) => {
                if (!path.isDropdown) {
                  return (
                    <li key={path.name}>
                      <a className="hover:underline" href={path.path}>
                        {path.name}
                      </a>
                    </li>
                  );
                } else if (path.isDropdown) {
                  return (
                    <li key={path.name}>
                      <NavButton
                        subMenuItems={path.submenu!}
                        itemName={path.name}
                      />
                    </li>
                  );
                }
              })}
            </ul>
            <div className="flex gap-10 align-middle">
              <button>Login</button>
              <button className="border-2 border-black px-5 py-3 rounded h-fit my-auto hover:bg-black hover:text-white font-bold">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
