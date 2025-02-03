"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutUs } from "@/components/AboutUs";
import { ImpactFigures } from "@/components/ImpactFigures";
import { RecentUpdates } from "@/components/RecentUpdates";
import { Team } from "@/components/Team";
import { Connect } from "@/components/Connect";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleSetActiveSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-natural-900 text-white">
      <Navbar activeSection={activeSection} />
      <HeroSection onVisible={() => handleSetActiveSection("hero")} />
      <AboutUs onVisible={() => handleSetActiveSection("about")} />
      <ImpactFigures onVisible={() => handleSetActiveSection("impact")} />
      <RecentUpdates onVisible={() => handleSetActiveSection("updates")} />
      <Team onVisible={() => handleSetActiveSection("team")} />
      <Connect onVisible={() => handleSetActiveSection("connect")} />
    </main>
  );
}
