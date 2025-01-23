"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Item {
  url: string;
  message: string;
}

const items: Item[] = [
  {
    url: "/placeholder.svg?height=600&width=1200",
    message: "Empowering the Farmers",
  },
  {
    url: "/placeholder.svg?height=600&width=1200",
    message: "The Green Revolution",
  },
  {
    url: "/placeholder.svg?height=600&width=1200",
    message: "The Agriculture",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Changed to 5000ms (5 seconds) for a more reasonable transition time
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="absolute inset-0">
          <Image
            src={item.url || "/placeholder.svg"}
            alt={`Hero image ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-5xl font-bold text-white text-center">
              {item.message}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
