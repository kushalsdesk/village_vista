import { useEffect, useRef } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    image: "/placeholder.svg",
  },
  {
    name: "John Smith",
    role: "Head of Agriculture",
    image: "/placeholder.svg",
  },
  {
    name: "Emily Brown",
    role: "Community Outreach",
    image: "/placeholder.svg",
  },
  {
    name: "Michael Johnson",
    role: "Sustainable Practices Expert",
    image: "/placeholder.svg",
  },
];

interface TeamProps {
  onVisible: () => void;
}

export function Team({ onVisible }: TeamProps) {
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
      id="team"
      className="min-h-screen flex items-center justify-center bg-white snap-start"
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-green-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
