import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div id="footer" className="container mx-auto py-9">
      <div className="bg-[#8D448B] text-white py-10 px-6 md:py-8 md:px-12 lg:px-16 rounded-xl mx-auto mx-14 flex flex-col md:flex-row justify-between items-center max-w-screen-xl">
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-2xl md:text-3xl font-bold leading-relaxed">
            Hire the worlds best developers and designers around!
          </h1>
        </div>
        {/* Image between h1 and button */}
      <div className="hidden lg:block my-4">
        <Image
          src="/images/imgFooter.svg"
          alt="Icon between title and button"
          width={250}  // Adjust the size as needed
          height={250} // Adjust the size as needed
          className="mx-auto"
        />
      </div>
      <div className="mt-6 md:mt-0 flex items-center justify-center relative">
  {/* Image en haut du bouton */}
  <div className="hidden lg:block absolute top-[-30px]">
    <Image
      src="/images/imageFooter.svg"
      alt="Top small icon"
      width={70}  // Augmenter la taille de l'image
      height={70} // Augmenter la taille de l'image
      className="mx-auto"
    />
  </div>

  {/* Bouton */}
  <button className="bg-white text-[#8D448B] tracking-wider font-semibold py-4 px-10 rounded shadow-md hover:bg-gray-200 transition relative z-10">
    HIRE DEVELOPERS
  </button>

  {/* Image en bas du bouton, retournée */}
  <div className="hidden lg:block absolute bottom-[-30px] transform rotate-180">
    <Image
      src="/images/imageFooter.svg"
      alt="Bottom small icon"
      width={70}  // Augmenter la taille de l'image
      height={70} // Augmenter la taille de l'image
      className="mx-auto"
    />
  </div>
</div>

      </div>
      <div className="text-center text-black text-sm mt-10 px-4">
        {/* Logo et Texte Copyright */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logoNavbar.svg"
              alt="Startup Agency Logo"
              width={180}
              height={40}
              className="mx-auto lg:mx-0 object-contain transition-all duration-300"
            />
          </Link>

          {/* Texte copyright */}
          <p className="text-center lg:text-left">
            © 2025 All rights reserved - Design & Developed by RedQ, Inc
          </p>

          {/* Liens */}
          <ul className="flex justify-center gap-6 text-[#8D448B] font-medium mt-6 lg:mt-0 hidden lg:flex items-center">
            <li>
              <Link href="/home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/advertise">
                Advertise
              </Link>
            </li>
            <li>
              <Link href="/supports">
                Supports
              </Link>
            </li>
            <li>
              <Link href="/marketing">
                Marketing
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;