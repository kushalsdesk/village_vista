"use client";

import { useState, useEffect } from "react";
import { Leaf } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-natural-600 shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <Leaf
            className={`h-6 w-6 ${isScrolled ? "text-white" : "text-natural-600"}`}
          />
          <span
            className={`text-xl font-bold ${isScrolled ? "text-white" : "text-natural-800"}`}
          >
            AgriRural
          </span>
        </a>
        <ul className="flex space-x-4">
          {["About", "Impact", "Updates", "Team", "Connect"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium hover:text-natural-300 transition-colors ${isScrolled ? "text-white" : "text-natural-800"}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
