"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    image: "/placeholder.svg",
  },
  {
    name: "John Smith",
    role: "Head of Agriculture",
    image: "/placeholder.svg",
  },
  {
    name: "Emily Brown",
    role: "Community Outreach",
    image: "/placeholder.svg",
  },
  {
    name: "Michael Johnson",
    role: "Sustainable Practices Expert",
    image: "/placeholder.svg",
  },
];

interface TeamProps {
  onVisible: () => void;
}

export function Team({ onVisible }: TeamProps) {
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

  return (
    <motion.section
      ref={ref}
      id="team"
      className="min-h-screen flex items-center justify-center bg-midnight-950 snap-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container flex flex-col items-center mx-auto px-4 py-16">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center text-natural-100 mb-12"
        >
          Meet Our Team
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="mb-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-natural-200">
                {member.name}
              </h3>
              <p className="text-natural-400">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button className="bg-natural-600 text-sm font-semibold text-midnight-950 hover:bg-natural-500">
            Show More
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
