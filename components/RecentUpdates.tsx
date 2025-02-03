"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const updates = [
  {
    title: "New Irrigation System Implemented",
    image: "/placeholder.svg",
    date: "June 15, 2023",
  },
  {
    title: "Rural Education Program Launched",
    image: "/placeholder.svg",
    date: "May 28, 2023",
  },
  {
    title: "Community Farm Yield Increases by 30%",
    image: "/placeholder.svg",
    date: "May 10, 2023",
  },
  {
    title: "Partnership with Local Government Announced",
    image: "/placeholder.svg",
    date: "April 22, 2023",
  },
  {
    title: "Sustainable Farming Workshop Success",
    image: "/placeholder.svg",
    date: "April 5, 2023",
  },

  {
    title: "Sustainable Farming Workshop Success",
    image: "/placeholder.svg",
    date: "April 5, 2023",
  },

  {
    title: "Sustainable Farming Workshop Success",
    image: "/placeholder.svg",
    date: "April 5, 2023",
  },
];

interface RecentUpdatesProps {
  onVisible: () => void;
}

export function RecentUpdates({ onVisible }: RecentUpdatesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(currentSection);
    return () => observer.unobserve(currentSection);
  }, [onVisible]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      ref={sectionRef}
      id="updates"
      className="min-h-screen flex items-center justify-center bg-midnight-950 snap-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center text-natural-100 mb-12"
        >
          Recent Updates
        </motion.h2>
        <motion.div className="relative" variants={itemVariants}>
          <div className="overflow-x-auto scrollbar-hide md:scrollbar-default">
            <motion.div
              ref={scrollRef}
              className="flex space-x-4 pb-4"
              variants={containerVariants}
            >
              {updates.map((update, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-64"
                  variants={itemVariants}
                >
                  <motion.div
                    className="bg-midnight-800 rounded-lg shadow-md overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Image
                      src={update.image || "/placeholder.svg"}
                      alt={update.title}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-natural-200 mb-2">
                        {update.title}
                      </h3>
                      <p className="text-sm text-natural-400">{update.date}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
