import { useEffect, useRef } from "react";
import { Users, Sprout, Globe } from "lucide-react";

interface AboutUsProps {
  onVisible: () => void;
}

export function AboutUs({ onVisible }: AboutUsProps) {
  const ref = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center justify-center bg-white snap-start"
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Who We Are
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
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
          ].map((item, index) => (
            <div key={index} className="text-center">
              <item.icon className="h-16 w-16 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-green-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
