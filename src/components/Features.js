import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  // État pour contrôler l'ouverture et la fermeture du modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const [iconColor, setIconColor] = useState("#8D448B");

  // Fonction pour ouvrir le modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Fonction pour changer les couleurs
  const handleClick = () => {
    setBgColor((prev) => (prev === "white" ? "#8D448B" : "white"));
    setIconColor((prev) => (prev === "#8D448B" ? "white" : "#8D448B"));
  };

  return (
    <>
      <section className="bg-white py-24" id="services">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h4 className="text-base text-[#8D448B] mb-4">Quality Features</h4>
          <h2 className="md:text-3xl text-[#171717] font-bold mb-10">
            Meet exciting feature of app
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-6 text-center">
              <div className="flex items-center justify-center bg-amber-200 w-24 h-24 rounded-3xl mb-4">
                <Image
                  src="/images/imageService1.svg"
                  alt="Unlimited Customization"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#171717] font-bold mb-2">
                Unlimited Customization
              </h3>
              <p className="text-[#343d48] leading-7">
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center p-6 text-center">
              <div className="flex items-center justify-center bg-teal-300 w-24 h-24 rounded-3xl mb-4">
                <Image
                  src="/images/imageService2.svg"
                  alt="Vector shape & resizable"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#171717] font-bold mb-2">
                Vector shape & resizable
              </h3>
              <p className="text-[#343d48] leading-7">
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center p-6 text-center">
              <div className="flex items-center justify-center bg-sky-400 w-24 h-24 rounded-3xl mb-4">
                <Image
                  src="/images/imageService3.svg"
                  alt="Editing freedom"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#171717] font-bold mb-2">
                Editing freedom
              </h3>
              <p className="text-[#343d48] leading-7">
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center  p-6 text-center">
              <div className="flex items-center justify-center bg-amber-500 w-24 h-24 rounded-3xl mb-4">
                <Image
                  src="/images/imageService4.svg"
                  alt="Best Award history"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#171717] font-bold mb-2">
                Best Award history
              </h3>
              <p className="text-[#343d48] leading-7">
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-18">
        <div className="container mx-auto px-6 md:px-16 flex flex-col lg:flex-row-reverse items-center">
          {/* Texte */}
          <div className="flex justify-center lg:w-1/2 text-left pl-4 lg:pl-8 lg:pr-16 mb-4 lg:mb-0">
            <div className="max-w-md">
              <h3 className="text-xl md:text-3xl lg:text-3xl font-bold text-[#171717] mb-6 text-center lg:text-left">
                Boost your agencies by choosing <br className="lg:hidden" />{" "}
                Ninja Developers
              </h3>

              <p className="text-[17px] text-[#02073E] opacity-60 leading-7 md:leading-10 mb-6 text-center lg:text-left">
                Create custom landing pages with Shades that convert more
                visitors than any website, no coding required.
              </p>

              <ul className="list-none text-[#343d48] mb-6 space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#dadada"
                      strokeWidth="2"
                      fill="#dadada"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                      fill="none"
                      stroke="white"
                    />
                  </svg>
                  Unlimited design possibility
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#dadada"
                      strokeWidth="2"
                      fill="#dadada"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                      fill="none"
                      stroke="white"
                    />
                  </svg>
                  Completely responsive features
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#dadada"
                      strokeWidth="2"
                      fill="#dadada"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                      fill="none"
                      stroke="white"
                    />
                  </svg>
                  Easy to customize plugins
                </li>
              </ul>

              <Link
                href="#"
                className="inline-flex items-center text-[#8D448B] font-bold hover:text-[#702c6e] transition"
              >
                Learn more
                <span className="ml-2 text-xl">&gt;</span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/images/imageService5.png"
              alt="Boost your agencies"
              width={700}
              height={600}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6 md:px-16 text-center">
          {/* Titre */}
          <h2 className="md:text-3xl text-[#171717] font-bold mb-6 max-w-3xl mx-auto">
            Leading companies trust us <br className="hidden md:block" /> to
            develop software
          </h2>

          {/* Paragraphe */}
          <p className="text-[17px] text-[#343d48] leading-7 mb-6 max-w-3xl mx-auto">
            We believe it’s important for everyone to have access to software,{" "}
            <br className="hidden md:block" /> especially when it comes to
            digital learning and navigation.
          </p>

          {/* Lien */}
          <Link
            href="#"
            className="inline-flex items-center text-[#8D448B] font-bold hover:text-[#702c6e] transition"
          >
            Explore Details
            <span className="ml-2 text-xl">&gt;</span>
          </Link>
        </div>
      </section>

      <section className="bg-white pb-6">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <div className="relative mb-8 flex justify-center items-center">
            <div className="relative h-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                width={900}
                height={900}
                src="/images/imageVideo.png"
                alt="Video background"
                className="rounded-2xl"
              />
            </div>

            <button
              onClick={openModal}
              className="absolute flex justify-center items-center bg-white text-[#8D448B] rounded-full w-28 h-28 hover:bg-[#8D448B] hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 transition-all"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor" // Utilise la couleur définie par `text-[#8D448B]` et `hover:text-white`
              >
                <polygon
                  points="5,3 19,12 5,21"
                  stroke="none"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center">
              <div className="relative w-full max-w-4xl">
                {/* Bouton de fermeture - croix */}
                <button
                  onClick={closeModal}
                  className="absolute top-[-40px] right-0 flex items-center justify-center"
                >
                  <span className="text-5xl">&times;</span>
                </button>

                {/* Vidéo YouTube */}
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    src="https://www.youtube.com/embed/Cm3U-NgJb9I?autoplay=1"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}



