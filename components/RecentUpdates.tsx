"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
];

interface RecentUpdatesProps {
  onVisible: () => void;
}

export function RecentUpdates({ onVisible }: RecentUpdatesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      { threshold: 0.5 },
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [onVisible]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      if (direction === "left") {
        current.scrollBy({ left: -200, behavior: "smooth" });
      } else {
        current.scrollBy({ left: 200, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="updates"
      className="min-h-screen flex items-center justify-center bg-white snap-start"
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Recent Updates
        </h2>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 scrollbar-hide pb-4"
          >
            {updates.map((update, index) => (
              <div key={index} className="flex-none w-64">
                <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={update.image || "/placeholder.svg"}
                    alt={update.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-green-800 mb-2">
                      {update.title}
                    </h3>
                    <p className="text-sm text-gray-600">{update.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
          >
            <ChevronLeft className="h-6 w-6 text-green-800" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
          >
            <ChevronRight className="h-6 w-6 text-green-800" />
          </button>
        </div>
      </div>
    </section>
  );
}
