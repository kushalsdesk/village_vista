import { Users, Sprout, Globe } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="py-16 bg-natural-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-natural-800 mb-8">
          Who We Are
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto text-natural-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community-Focused</h3>
            <p>
              We work hand-in-hand with rural communities to understand their
              unique challenges and opportunities.
            </p>
          </div>
          <div className="text-center">
            <Sprout className="h-16 w-16 mx-auto text-natural-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Sustainable Practices
            </h3>
            <p>
              Our initiatives promote environmentally friendly and economically
              viable agricultural methods.
            </p>
          </div>
          <div className="text-center">
            <Globe className="h-16 w-16 mx-auto text-natural-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
            <p>
              While we act locally, our vision is to create a global network of
              thriving rural communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
