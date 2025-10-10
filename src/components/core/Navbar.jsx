"use client";
import React, { useEffect, useState } from "react";
import { IoReorderThreeSharp, IoClose } from "react-icons/io5";
import { navbar } from "@/data/navbar";
import Image from "next/image";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa6";
import mainlogo from "@/assests/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(window.location.pathname);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false);
  };

  // Prevent body scroll when sidebar open
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "unset";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-shadow duration-300 
        ${isScrolled ? "shadow-xl bg-white" : "bg-white shadow-md"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleLinkClick("/")}
            className="flex items-center space-x-2 flex-shrink-0"
          >
            <Image
              src={mainlogo}
              alt="Mahi Technocrafts Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden w-auto lg:block" id="navbar-default">
            <ul className="flex font-semibold items-center gap-x-6">
              {navbar.map((menu) => (
                <li key={menu.id}>
                  <Link
                    href={menu.path}
                    className={`block py-2 text-base transition-colors duration-200 ${
                      activeLink === menu.path
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                    onClick={() => handleLinkClick(menu.path)}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}

              {/* Special Button */}
              <li>
                <Link
                  href="/cyber-security"
                  className={`py-2 px-3 rounded-lg bg-red-600 text-white flex items-center gap-1 text-sm font-bold transition-transform duration-200 hover:bg-red-700 hover:scale-[1.02] ${
                    activeLink === "/cyber-security" ? "bg-red-700" : ""
                  }`}
                  onClick={() => handleLinkClick("/cyber-security")}
                >
                  <FaLaptopCode className="text-base" />
                  CYBER SECURITY
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Toggle */}
          <div className="text-3xl lg:hidden text-gray-800">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {!isOpen ? (
                <IoReorderThreeSharp className="text-4xl" />
              ) : (
                <IoClose className="text-4xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Sidebar (Always white, fixed, with logo & close icon at top) */}
      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-xs z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Sidebar Header with Logo & Close Icon */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <Link
            href="/"
            onClick={() => handleLinkClick("/")}
            className="flex items-center space-x-2"
          >
            <Image src={mainlogo} alt="Logo" className="h-8 w-auto" />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl text-gray-800 hover:text-red-600 transition"
          >
            <IoClose />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="px-8 py-6 overflow-y-auto h-[calc(100vh-70px)]">
          <ul className="flex flex-col items-start space-y-2">
            {navbar.map((menu) => (
              <li className="w-full" key={menu.id}>
                <Link
                  href={menu.path}
                  className={`block w-full py-3 text-lg font-medium rounded-lg transition-colors duration-200 text-left px-4 ${
                    activeLink === menu.path
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => handleLinkClick(menu.path)}
                >
                  {menu.name}
                </Link>
              </li>
            ))}

            {/* Special Mobile Button */}
            <li className="w-full pt-4">
              <Link
                href="/cyber-security"
                className="w-full block py-3 rounded-lg bg-red-600 text-white flex items-center gap-2 justify-center transition-colors duration-200 hover:bg-red-700"
                onClick={() => handleLinkClick("/cyber-security")}
              >
                <FaLaptopCode className="text-xl" />
                <span className="font-bold">CYBER SECURITY</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ✅ Transparent Overlay (no white background) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 lg:hidden"
        ></div>
      )}
    </header>
  );
}

export default Navbar;
