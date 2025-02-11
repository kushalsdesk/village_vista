"use client";

import { useEffect, useRef } from "react";
import {
  Users,
  TractorIcon as Farm,
  SproutIcon as Seedling,
  IndianRupee,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const impactData = [
  { icon: Users, title: "Communities Served", value: "500+" },
  { icon: Farm, title: "Acres Improved", value: "100,000+" },
  { icon: Seedling, title: "Sustainable Practices Implemented", value: "50+" },
  { icon: IndianRupee, title: "Economic Impact", value: "1M+" },
];

const works = [
  {
    title: "Youth Development",
    description: "Promoting eco-friendly agricultural practices",
    art: "/placeholder.svg",
  },
  {
    title: "Rural Education",
    description: "Empowering communities through knowledge",
    art: "/placeholder.svg",
  },
  {
    title: "Women Development",
    description: "Creating opportunities for rural prosperity",
    art: "/placeholder.svg",
  },
  {
    title: "Water Management",
    description: "Ensuring sustainable water use in agriculture",
    art: "/placeholder.svg",
  },

  {
    title: "Water Management",
    description: "Ensuring sustainable water use in agriculture",
    art: "/placeholder.svg",
  },

  {
    title: "Water Management",
    description: "Ensuring sustainable water use in agriculture",
    art: "/placeholder.svg",
  },
];

interface ImpactFiguresProps {
  onVisible: () => void;
}

export function ImpactFigures({ onVisible }: ImpactFiguresProps) {
  const ref = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const countUpVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="impact"
      className="min-h-screen flex items-center justify-center bg-white snap-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center text-natural-400 mt-2 mb-6 md:mb-12"
        >
          Our Impact
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 gap-2 text-sm md:text-xl md:grid-cols-4 md:gap-8 mb-8 md:mb-16"
        >
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <item.icon className="h-12 w-12 mx-auto text-natural-400 mb-4" />
              <motion.h3
                className="text-2xl font-bold text-natural-500"
                variants={countUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                {item.value}
              </motion.h3>
              <p className="text-natural-400">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="bg-midnight-800 p-3 lg:p-8 rounded-lg"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center text-natural-100 mt-1 mb-4 lg:mb-8"
          >
            Focus Areas
          </motion.h3>
          <div className="overflow-x-auto scrollbar-hide md:scrollbar-default">
            <div ref={scrollRef} className="flex space-x-4 p-4">
              {works.map((artwork, index) => (
                <motion.figure
                  key={artwork.title}
                  className="shrink-0"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="overflow-hidden rounded-md">
                    <Image
                      src={artwork.art || "/placeholder.svg"}
                      alt={`Photo by ${artwork.title}`}
                      width={300}
                      height={200}
                    />
                  </div>
                  <figcaption className="pt-2 text-xs text-natural-300">
                    <span className="font-semibold text-natural-200">
                      {artwork.title}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
