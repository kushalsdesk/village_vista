"use client";

import { forwardRef, useState } from "react";
import {
  Users,
  TractorIcon as Farm,
  SproutIcon as Seedling,
  IndianRupeeIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const impactData = [
  { icon: Users, title: "Communities Served", value: "500+" },
  { icon: Farm, title: "Acres Improved", value: "100,000+" },
  { icon: Seedling, title: "Sustainable Practices Implemented", value: "50+" },
  { icon: IndianRupeeIcon, title: "Economic Impact", value: "$1M+" },
];

const focusAreas = [
  {
    title: "Sustainable Farming",
    description: "Promoting eco-friendly agricultural practices",
  },
  {
    title: "Rural Education",
    description: "Empowering communities through knowledge",
  },
  {
    title: "Economic Development",
    description: "Creating opportunities for rural prosperity",
  },
  {
    title: "Water Management",
    description: "Ensuring sustainable water use in agriculture",
  },
];

const ImpactFigures = forwardRef<HTMLElement>((props, ref) => {
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0);

  return (
    <section
      ref={ref}
      id="impact"
      className="min-h-screen flex items-center justify-center bg-white snap-start"
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-natural-800 mb-12">
          Our Impact
        </h2>
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {impactData.map((item, index) => (
            <div key={index} className="text-center">
              <item.icon className="h-12 w-12 mx-auto text-natural-600 mb-4" />
              <h3 className="text-2xl font-bold text-natural-800">
                {item.value}
              </h3>
              <p className="text-natural-600">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="bg-natural-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center text-natural-800 mb-8">
            Focus Areas
          </h3>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentFocusIndex * 100}%)`,
                }}
              >
                {focusAreas.map((area, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <h4 className="text-xl font-semibold text-natural-700 mb-2">
                      {area.title}
                    </h4>
                    <p className="text-natural-600">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() =>
                setCurrentFocusIndex(
                  (prev) => (prev - 1 + focusAreas.length) % focusAreas.length,
                )
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-natural-200 p-2 rounded-full"
            >
              <ChevronLeft className="h-6 w-6 text-natural-800" />
            </button>
            <button
              onClick={() =>
                setCurrentFocusIndex((prev) => (prev + 1) % focusAreas.length)
              }
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-natural-200 p-2 rounded-full"
            >
              <ChevronRight className="h-6 w-6 text-natural-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

ImpactFigures.displayName = "ImpactFigures";
export default ImpactFigures;
