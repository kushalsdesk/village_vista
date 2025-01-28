import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface ConnectProps {
  onVisible: () => void;
}

export function Connect({ onVisible }: ConnectProps) {
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
      id="connect"
      className="min-h-screen flex items-center justify-center bg-white snap-start"
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Connect With Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Mail className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-800">Email</h3>
            <p className="text-gray-600">info@agriruraldev.com</p>
          </div>
          <div className="text-center">
            <Phone className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-800">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-800">
              Address
            </h3>
            <p className="text-gray-600">123 Rural Road, Farmville, CA 12345</p>
          </div>
        </div>
      </div>
    </section>
  );
}
