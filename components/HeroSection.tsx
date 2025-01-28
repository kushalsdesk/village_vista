import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onVisible: () => void;
}

interface Item {
  url: string;
  message: string;
}

const items: Item[] = [
  {
    url: "/first.jpg",
    message: "Empowering Farmers with Modern Solutions",
  },
  {
    url: "/second.jpg",
    message: "Transforming Agriculture through Innovation",
  },
  {
    url: "/third.jpg",
    message: "Sustainable Practices for a Greener Future",
  },
  {
    url: "/fourth.jpg",
    message: "Advancing Farming Technology",
  },
  {
    url: "/fifth.jpg",
    message: "Building Resilient Agricultural Communities",
  },
];
export function HeroSection({ onVisible }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) {
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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [onVisible]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % items.length);
    }, 5000); // Changed to 5000ms (5 seconds) for a more reasonable transition time
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen flex items-center justify-center snap-start"
    >
      {items.map((item, index) => (
        <div key={index} className="absolute inset-0">
          <Image
            src={item.url || "/placeholder.svg"}
            alt={`Hero image ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-5xl font-bold text-white text-center">
              {item.message}
            </h1>
          </div>
        </div>
      ))}
      <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce w-8 h-8" />
    </section>
  );
}
