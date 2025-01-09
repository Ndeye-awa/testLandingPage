import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-between py-20 container mx-auto px-6 md:px-16 mt-20"
      style={{ backgroundColor: "#f6f8fb" }}
    >
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-6xl font-bold text-primary md:leading-snug mb-4">
          {" "}
          {/* Modification de la taille de la police en mode mobile */}
          Great software is built with amazing developers
        </h1>
        <p className="text-lg md:text-[22px] text-gray-700 mb-6 md:leading-relaxed">
          {" "}
          {/* Modification de la taille de la police en mode mobile */}
          We help build and manage a team of world-class developers to bring
          your vision to life.
        </p>
        <form className="flex flex-col md:flex-row md:items-center">
          <div className="flex w-full mb-4 md:mb-0">
            <input

              type="email"
              placeholder="Subscribe newsletter"
              className="bg-white h-12 px-4 md:px-6 w-full focus:outline-none focus:ring-2 focus:ring-secondary border-0 placeholder-gray-500"
              required
            />
            <button
              type="submit"
              className="h-12 px-4 md:px-6 font-bold text-[16px] text-white bg-secondary rounded-md hover:bg-secondaryDark transition duration-300 ml-2"
              style={{ backgroundColor: "#8D448B" }}
            >
              Subscribe
            </button>
          </div>
        </form>
        <div className="flex items-center mt-12 flex-wrap">
          {" "}
          {/* Ajout de flex-wrap */}
          <p className="text-gray-600 mr-4 mb-2">Sponsored by:</p>
          <div className="flex justify-center space-x-6">
            <Image
              src="/images/paypal.png"
              alt="Partner 1"
              width={100}
              height={40}
              className="object-contain"
            />
            <Image
              src="/images/google.png"
              alt="Partner 2"
              width={90}
              height={40}
              className="object-contain"
            />
            <Image
              src="/images/drop.png"
              alt="Partner 3"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <Image
          src="/images/banner.png"
          alt="Hero Illustration"
          width={600} // Largeur
          height={400} // Hauteur
          className="w-full h-auto"
        />
      </div>
    </section>



  );
}
