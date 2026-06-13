"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },
    { name: "SKILLS", href: "#skills" },
    { name: "CONTACT", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
  ${
    isScrolled
      ? "bg-yellow-400/70 backdrop-blur-md border-b border-yellow-500"
      : "bg-transparent border-b border-transparent"
  }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className={`text-xl sm:text-2xl font-bold transition-colors
              ${isScrolled ? "text-white" : "text-yellow-400"}
              hover:text-yellow-500`}
            >
              ArgyaDwi
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors font-medium
        ${
          isScrolled
            ? "text-gray-200 hover:text-gray-600"
            : "text-gray-400 hover:text-yellow-400"
        }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 transition-all duration-300
    ${isMenuOpen ? "rotate-45 translate-y-2" : ""}
    ${isScrolled ? "bg-gray-900" : "bg-yellow-400"}
  `}
                />
                <span
                  className={`w-full h-0.5 transition-all duration-300
    ${isMenuOpen ? "opacity-0" : ""}
    ${isScrolled ? "bg-gray-900" : "bg-yellow-400"}
  `}
                />
                <span
                  className={`w-full h-0.5 transition-all duration-300
    ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}
    ${isScrolled ? "bg-gray-900" : "bg-yellow-400"}
  `}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>
      <div
        className={`md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />
      <div
        className={`md:hidden fixed right-0 top-0 bottom-0 w-64 bg-white shadow-2xl border-l border-gray-200 transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
