"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/placeholder.svg?height=600&width=1200",
  "/placeholder.svg?height=600&width=1200",
  "/placeholder.svg?height=600&width=1200",
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src || "/placeholder.svg"}
          alt={`Hero image ${index + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white text-center">
          Empowering Rural Communities <br /> Through Sustainable Agriculture
        </h1>
      </div>
      <button
        onClick={() =>
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length,
          )
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6 text-natural-800" />
      </button>
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <ChevronRight className="h-6 w-6 text-natural-800" />
      </button>
    </div>
  );
}
