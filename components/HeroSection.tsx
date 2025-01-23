import { forwardRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center snap-start"
    >
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Hero background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Empowering Rural Communities
        </h1>
        <p className="text-xl mb-8">Through Sustainable Agriculture</p>
        <a
          href="#about"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-natural-800 bg-white hover:bg-natural-100 transition-colors"
        >
          Learn More
        </a>
      </div>
      <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white  w-8 h-8" />
    </section>
  );
});

HeroSection.displayName = "HeroSection";
export default HeroSection;
