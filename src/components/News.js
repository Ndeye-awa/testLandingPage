// // components/News.js
// import React from "react";
// import Image from "next/image";
// import { FaRegCommentDots } from "react-icons/fa6";
// import Slider from "react-slick";

// const News = () => {
//   const newsItems = [
//     {
//       title: "How to work with prototype design with adobe xd featuring tools",
//       comments: 22,
//       image: "/images/new1.png",
//     },
//     {
//       title: "Create multiple artboard by using figma prototyping development",
//       comments: 15,
//       image: "/images/new2.png",
//     },
//     {
//       title: "Convert your web layout theming easily with sketch zeplin extension",
//       comments: 12,
//       image: "/images/new3.png",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,  // Afficher 3 cartes en mode desktop
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,  // Afficher 2 cartes pour les tablettes
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,  // Afficher 1 carte pour mobile
//         },
//       },
//     ],
//   };

//   return (
//     <div className="bg-gray-50 p-10">
//       <div className="text-center mb-10">
//         <h2 className="text-sm md:text-lg text-[#8D448B] mb-4">
//           Quality features
//         </h2>
//         <h2 className="text-xl md:text-3xl font-bold text-[#171717] mb-6">
//           Tutorials that people love most
//         </h2>
//       </div>

//       <Slider {...settings}>
//         {newsItems.map((item, index) => (
//           <div key={index} className="p-4">
//             <div className="bg-white rounded-lg shadow-lg transition overflow-hidden">
//               <div className="relative w-full h-52">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-t-lg"
//                 />
//               </div>
//               <div className="p-4">
//                 <h4 className="text-lg font-semibold text-gray-800 mb-2">
//                   {item.title}
//                 </h4>
//                 <div className="flex items-center text-gray-500">
//                   <FaRegCommentDots className="text-xl mr-2" />
//                   <span className="text-md">{item.comments} Comments</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default News;
import React from "react";
import Image from "next/image";
import { FaRegCommentDots } from "react-icons/fa6";
import Slider from "react-slick";

const News = () => {
  const newsItems = [
    {
      title: "How to work with prototype design with adobe xd featuring tools",
      comments: 22,
      image: "/images/new1.png",
    },
    {
      title: "Create multiple artboard by using figma prototyping development",
      comments: 15,
      image: "/images/new2.png",
    },
    {
      title: "Convert your web layout theming easily with sketch zeplin extension",
      comments: 12,
      image: "/images/new3.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true, // Activer les points pour les tablettes
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true, // Activer les points pour les mobiles
        },
      },
    ],
    appendDots: (dots) => (
      <ul className="slick-dots hidden md:flex justify-center mt-4">{dots}</ul>
    ),
  };

  return (
    <div className="bg-gray-50 p-10">
      <div className="text-center mb-10">
        <h2 className="text-sm md:text-lg text-[#8D448B] mb-4">
          Quality features
        </h2>
        <h2 className="text-xl md:text-3xl font-bold text-[#171717] mb-6">
          Tutorials that people love most
        </h2>
      </div>

      <Slider {...settings}>
        {newsItems.map((item, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg transition overflow-hidden">
              <div className="relative w-full h-52">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <div className="flex items-center text-gray-500">
                  <FaRegCommentDots className="text-xl mr-2" />
                  <span className="text-md">{item.comments} Comments</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;

