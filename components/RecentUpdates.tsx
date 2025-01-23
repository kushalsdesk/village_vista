"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const updates = [
  {
    title: "New Irrigation System Implemented",
    image: "/placeholder.svg?height=200&width=300",
    date: "June 15, 2023",
  },
  {
    title: "Rural Education Program Launched",
    image: "/placeholder.svg?height=200&width=300",
    date: "May 28, 2023",
  },
  {
    title: "Community Farm Yield Increases by 30%",
    image: "/placeholder.svg?height=200&width=300",
    date: "May 10, 2023",
  },
  {
    title: "Partnership with Local Government Announced",
    image: "/placeholder.svg?height=200&width=300",
    date: "April 22, 2023",
  },
  {
    title: "Sustainable Farming Workshop Success",
    image: "/placeholder.svg?height=200&width=300",
    date: "April 5, 2023",
  },
];

export function RecentUpdates() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section id="updates" className="py-16 bg-natural-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-natural-800 mb-8">
          Recent Updates
        </h2>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 scrollbar-hide"
          >
            {updates.map((update, index) => (
              <div key={index} className="flex-none w-64">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={update.image || "/placeholder.svg"}
                    alt={update.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-natural-800 mb-2">
                      {update.title}
                    </h3>
                    <p className="text-sm text-natural-600">{update.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-natural-200 p-2 rounded-full"
          >
            <ChevronLeft className="h-6 w-6 text-natural-800" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-natural-200 p-2 rounded-full"
          >
            <ChevronRight className="h-6 w-6 text-natural-800" />
          </button>
        </div>
      </div>
    </section>
  );
}
