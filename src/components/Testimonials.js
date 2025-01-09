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

  // Défilement aléatoire
  useEffect(() => {
    const interval = setInterval(() => {
      const randomId =
        testimonialsData[Math.floor(Math.random() * testimonialsData.length)].id;
      setActiveId(randomId);
    }, 3000);

    return () => clearInterval(interval); // Nettoyer l'intervalle
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-16 text-center">
        {/* Section Header */}
        <h4 className="text-lg text-[#8D448B] mb-4">Customer Comments</h4>
        <h2 className="text-2xl md:text-4xl font-bold text-[#171717] mb-6">
          Why customers love us
        </h2>

        {/* Testimonial Text Carousel */}
        <div className="relative">
          {testimonialsData.map((testimonial) => (
            <p
              key={testimonial.id}
              className={`text-4xl text-[#0f2137] leading-snug mx-auto max-w-3xl mb-12 transition-opacity duration-300 ${
                activeId === testimonial.id ? "opacity-100" : "opacity-0 hidden"
              }`}
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {testimonial.testimonial}
            </p>
          ))}
        </div>

        {/* Testimonial Profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 relative">
          {testimonialsData.map((profile) => (
            <div
              key={profile.id}
              className={`flex flex-col items-center text-center cursor-pointer`}
              onClick={() => setActiveId(profile.id)}
            >
              {/* Barre active */}
              <div
                className={`h-1 w-36 mb-4 ${
                  activeId === profile.id ? "bg-[#8D448B]" : "bg-transparent"
                }`}
              />
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#171717]">
                  {profile.name}
                </h3>
                <p className="text-sm text-gray-500">{profile.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;


// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const testimonialsData = [
//   {
//     id: 1,
//     name: "Pierre Hackett",
//     role: "VP of Engineering",
//     image: "/images/testi1.png",
//     testimonial:
//       "They are doing an amazing job with hundred percent customer satisfaction. Love their work and would like to work with them again.",
//   },
//   {
//     id: 2,
//     name: "Natalia Sanz",
//     role: "Head of Technology",
//     image: "/images/testi2.png",
//     testimonial:
//       "Leverage agile frameworks to provide a robust synopsis for high-level overviews. Iterative approaches to corporate strategy foster.",
//   },
//   {
//     id: 3,
//     name: "Ece Akman",
//     role: "Senior Marketer",
//     image: "/images/testi3.png",
//     testimonial:
//       "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base.",
//   },
// ];

// const Testimonials = () => {
//   const [activeId, setActiveId] = useState(1);

//   // Défilement aléatoire
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const randomId =
//         testimonialsData[Math.floor(Math.random() * testimonialsData.length)].id;
//       setActiveId(randomId);
//     }, 5000); // Change toutes les 5 secondes

//     return () => clearInterval(interval); // Nettoyer l'intervalle
//   }, []);

//   return (
//     <div className="bg-gray-50 py-16">
//       <div className="container mx-auto px-6 md:px-16 text-center">
//         {/* Section Header */}
//         <h4 className="text-lg text-[#8D448B] mb-4">Customer Comments</h4>
//         <h2 className="text-2xl md:text-4xl font-bold text-[#171717] mb-6">
//           Why customers love us
//         </h2>

//         {/* Testimonial Text Carousel */}
//         <div className="relative">
//           {testimonialsData.map((testimonial) => (
//             <p
//               key={testimonial.id}
//               className={`text-4xl text-[#0f2137] leading-snug mx-auto max-w-3xl mb-12 transition-opacity duration-300 ${
//                 activeId === testimonial.id ? "opacity-100" : "opacity-0 hidden"
//               }`}
//               style={{ fontFamily: "Playfair Display, serif" }}
//             >
//               {testimonial.testimonial}
//             </p>
//           ))}
//         </div>

//         {/* Testimonial Profiles */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 relative">
//           {testimonialsData.map((profile) => (
//             <div
//               key={profile.id}
//               className={`flex flex-col items-center text-center cursor-pointer`}
//               onClick={() => setActiveId(profile.id)}
//             >
//               {/* Barre active */}
//               <div
//                 className={`h-1 w-16 mb-4 ${
//                   activeId === profile.id ? "bg-[#8D448B]" : "bg-transparent"
//                 }`}
//               />
//               <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
//                 <Image
//                   src={profile.image}
//                   alt={profile.name}
//                   width={80}
//                   height={80}
//                   className="object-cover"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-[#171717]">
//                   {profile.name}
//                 </h3>
//                 <p className="text-sm text-gray-500">{profile.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
