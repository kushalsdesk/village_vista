import Image from "next/image";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "John Smith",
    role: "Head of Agriculture",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Emily Brown",
    role: "Community Outreach",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Michael Johnson",
    role: "Sustainable Practices Expert",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export function Team() {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-natural-800 mb-12">
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
              <h3 className="text-xl font-semibold text-natural-800">
                {member.name}
              </h3>
              <p className="text-natural-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
