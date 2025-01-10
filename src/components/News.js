import React from "react";
import Image from "next/image";
import { FaRegCommentDots } from "react-icons/fa6";

const News = () => {
  // Données des cartes
  const newsItems = [
    {
      title: "How to work with prototype design with adobe xd featuring tools",
      comments: 22,
      image: "/images/new1.png", // Chemin de l'image
    },
    {
      title: "Create multiple artboard by using figma prototyping development",
      comments: 15,
      image: "/images/new2.png", // Chemin de l'image
    },
    {
      title:
        "Convert your web layout theming easily with sketch zeplin extension",
      comments: 12,
      image: "/images/new3.png", // Chemin de l'image
    },
  ];

  return (
    <div className="bg-gray-50 p-10 rounded-lg shadow-md">
      {/* Titre principal */}
      <div className="text-center mb-10">
        {" "}
        {/* Conteneur pour centrer */}
        <h2 className="text-sm md:text-lg text-[#8D448B] mb-4">
          Quality features
        </h2>
        <h2 className="text-xl md:text-3xl font-bold text-[#171717] mb-6">
          Tutorials that people love most
        </h2>
      </div>

      {/* Liste des cartes */}
      <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-52 relative">
              {" "}
              {/* Conteneur avec hauteur fixe */}
              <Image
                src={item.image}
                alt={item.title}
                layout="fill" // Permet à l'image de remplir tout le conteneur
                objectFit="cover" // Assure que l'image garde ses proportions tout en remplissant l'espace
                className="rounded-t-lg"
              />
            </div>
            {/* Titre et contenu */}
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {item.title}
              </h4>
              <div className="flex items-center text-gray-500">
                <FaRegCommentDots className="text-2xl mr-2" />{" "}
                <span className="text-md">{item.comments} Comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
