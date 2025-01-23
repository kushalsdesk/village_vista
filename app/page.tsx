"use client";

import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutUs } from "@/components/AboutUs";
import { ImpactFigures } from "@/components/ImpactFigures";
import { RecentUpdates } from "@/components/RecentUpdates";
import { Team } from "@/components/Team";
import { Connect } from "@/components/Connect";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error("Uncaught error:", error.error);
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);
  return (
    <main className="min-h-screen bg-natural-50">
      <Navbar />
      <HeroCarousel />
      <AboutUs />
      <ImpactFigures />
      <RecentUpdates />
      <Team />
      <Connect />
    </main>
  );
}
