"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onVisible: () => void;
}

interface Item {
  url: string;
  message: string;
}

const items: Item[] = [
  {
    url: "/first.jpg",
    message: "Empowering Farmers with Modern Solutions",
  },
  {
    url: "/second.jpg",
    message: "Transforming Agriculture through Innovation",
  },
  {
    url: "/third.jpg",
    message: "Sustainable Practices for a Greener Future",
  },
];

export function HeroSection({ onVisible }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, [onVisible]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="hero"
      className="relative h-[50vh] md:h-[60vh] flex items-center justify-center snap-start bg-midnight-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="container mx-auto px-4" variants={itemVariants}>
        <div className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden rounded-lg">
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
                className={`absolute inset-0 bg-midnight-900 bg-opacity-70 flex items-center justify-center transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-natural-50 text-center px-4">
                  {item.message}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-natural-300 animate-bounce w-8 h-8" />
    </motion.section>
  );
}
