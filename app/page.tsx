"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import ImpactFigures from "@/components/ImpactFigures";
import RecentUpdates from "@/components/RecentUpdates";
import Team from "@/components/Team";
import Connect from "@/components/Connect";
import HeroCarousel from "@/components/HeroCarousel";

const Home = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-natural-50 overflow-x-hidden">
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <HeroSection ref={(el) => (sectionsRef.current[0] = el)} />
        <AboutUs ref={(el) => (sectionsRef.current[1] = el)} />
        <ImpactFigures ref={(el) => (sectionsRef.current[2] = el)} />
        <RecentUpdates ref={(el) => (sectionsRef.current[3] = el)} />
        <Team ref={(el) => (sectionsRef.current[4] = el)} />
        <Connect ref={(el) => (sectionsRef.current[5] = el)} />
      </div>
    </main>
  );
};

export default Home;
