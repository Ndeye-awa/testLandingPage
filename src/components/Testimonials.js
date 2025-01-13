import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonialsData = [
  {
    id: 1,
    name: "Pierre Hackett",
    role: "VP of Engineering",
    image: "/images/testi1.png",
    testimonial:
      "They are doing an amazing job with hundred percent customer satisfaction. Love their work and would like to work with them again.",
  },
  {
    id: 2,
    name: "Natalia Sanz",
    role: "Head of Technology",
    image: "/images/testi2.png",
    testimonial:
      "Leverage agile frameworks to provide a robust synopsis for high-level overviews. Iterative approaches to corporate strategy foster.",
  },
  {
    id: 3,
    name: "Ece Akman",
    role: "Senior Marketer",
    image: "/images/testi3.png",
    testimonial:
      "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base.",
  },
];

const Testimonials = () => {
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prevId) => (prevId % testimonialsData.length) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white pt-24 pb-10">
      <div className="container mx-auto px-6 md:px-16 text-center">
        {/* Section Header */}
        <h4 className="text-sm md:text-lg text-[#8D448B] mb-4">Customer Comments</h4>
        <h2 className="text-xl md:text-3xl font-bold text-[#171717] mb-6">
          Why customers love us
        </h2>

        {/* Testimonial Text Carousel */}
        <div className="relative mb-12 overflow-hidden">
          <div
            className="flex transition-transform duration-1000"
            style={{ transform: `translateX(-${(activeId - 1) * 100}%)` }}
          >
            {testimonialsData.map((testimonial) => (
              <p
                key={testimonial.id}
                className="text-2xl md:text-3xl lg:text-[34px] text-[#0f2137] mb-6 tracking-wide max-w-3xl mx-auto lg:px-32"
                style={{
                  fontFamily: "Playfair Display, serif",
                  minWidth: "100%",
                  textAlign: "center",
                  maxHeight: "none",
                  overflow: "visible",
                  display: "-webkit-box",
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                  lineHeight: "1.6",
                }}
              >
                {testimonial.testimonial}
              </p>
            ))}
          </div>
        </div>

        {/* Testimonial Profiles */}
        <div className="relative flex flex-wrap justify-center md:gap-20 gap-16">
          {testimonialsData.map((profile) => (
            <div
              key={profile.id}
              className="flex justify-center items-center text-center cursor-pointer relative"
              onClick={() => setActiveId(profile.id)}
            >
              {/* Barre active */}
              <div
                className={`absolute h-1 md:w-40 w-24 ${
                  activeId === profile.id ? "bg-[#8D448B]" : "bg-transparent"
                }`}
                style={{
                  top: "-15px", // Barre au-dessus
                  left: "50%",
                  transform: "translateX(-50%)",
                  transition: "background-color 0.3s ease",
                }}
              />
              <div className="flex items-center gap-2">
                {/* Image */}
                <div className="w-12 h-12 overflow-hidden mb-2">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={48}
                    height={48}
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="hidden md:block">
                  {/* Name */}
                  <h3 className="text-sm font-medium text-[#171717]">
                    {profile.name}
                  </h3>
                  {/* Role */}
                  <p className="text-xs text-gray-500">{profile.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

