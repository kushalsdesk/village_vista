"use client";

import { useEffect, useRef } from "react";
import { Users, Sprout, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface AboutUsProps {
  onVisible: () => void;
}

export function AboutUs({ onVisible }: AboutUsProps) {
  const ref = useRef<HTMLElement>(null);

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

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const content = [
    {
      icon: Users,
      title: "Community-Focused",
      description:
        "We work hand-in-hand with rural communities to understand their unique challenges and opportunities.",
    },
    {
      icon: Sprout,
      title: "Sustainable Practices",
      description:
        "Our initiatives promote environmentally friendly and economically viable agricultural methods.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "While we act locally, our vision is to create a global network of thriving rural communities.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center justify-center bg-white snap-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center text-natural-400 mb-12"
        >
          Who We Are
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {content.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <motion.div variants={iconVariants}>
                <item.icon className="h-16 w-16 mx-auto text-natural-400 mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-natural-500">
                {item.title}
              </h3>
              <p className="text-natural-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
