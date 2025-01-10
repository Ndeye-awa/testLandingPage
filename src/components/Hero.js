import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-between py-20 container mx-auto px-6 md:px-10 lg:px-16 mt-20"
      style={{ backgroundColor: "#f6f8fb" }}
    >
      <div className="md:w-1/2 text-center md:text-left"> {/* Centrage en mode mobile */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary md:leading-snug mb-4">
          Great software is built with amazing developers
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:leading-relaxed">
          We help build and manage a team of world-class developers to bring
          your vision to life.
        </p>
        <form className="flex flex-col md:flex-row md:items-center w-full">
          <input
            type="email"
            placeholder="Subscribe newsletter"
            className="bg-white h-12 px-4 md:px-6 w-full md:w-3/4 focus:outline-none focus:ring-2 focus:ring-secondary border-0 placeholder-gray-500 rounded-md md:rounded-none md:rounded-l-md"
            required
          />
          <button
            type="submit"
            className="h-12 px-4 md:px-6 font-bold text-[16px] text-white bg-secondary rounded-md md:rounded-none md:rounded-r-md hover:bg-secondaryDark transition duration-300 mt-4 md:mt-0"
            style={{ backgroundColor: "#8D448B" }}
          >
            Subscribe
          </button>
        </form>
        <div className="flex items-center mt-12 flex-wrap justify-center md:justify-start">
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
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/images/banner.png"
          alt="Hero Illustration"
          width={500} // Largeur adaptée pour tablettes
          height={350} // Hauteur adaptée pour tablettes
          className="w-full max-w-md md:max-w-full h-auto"
        />
      </div>
    </section>
  );
}
