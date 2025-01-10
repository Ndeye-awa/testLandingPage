import Image from "next/image";
import Link from "next/link"; // Assurez-vous d'importer Link

const CTA = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-10 pb-28 rounded-lg shadow-md">
      <div className="flex-1 mb-8 mt-14 md:mb-0 md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left"> {/* Centrer le texte */}
        <h3 className="text-xl md:text-3xl lg:text-3xl font-bold text-[#171717] mb-4">
          Free Customer Support to ensure what you like to expect
        </h3>
        <p className="text-base md:text-lg lg:text-base text-gray-700 mb-4" style={{ lineHeight: 1.8 }}>
          We offer a risk-free trial period of up to two weeks. You will only have to pay if you are happy with the developer and wish to continue. If you are unsatisfied, we&apos;ll refund payment or fix issues on our dime.
        </p>
        <p className="text-[17px] text-[#02073E] opacity-60 leading-7 md:leading-10 mb-4">
          We help build and manage a team of world-class developers to bring your vision to life.
        </p>
        <Link
          href="#learn-more"
          className="inline-flex items-center text-[#8D448B] font-bold hover:text-[#702c6e] transition mt-4" // Ajout d'une marge pour l'espacement
        >
          Learn more
          <span className="ml-2 text-xl">&gt;</span>
        </Link>
      </div>
      <div className="flex-1 md:flex md:justify-end my-auto md:w-1/2"> 
        <Image
          src="/images/imageCta.png" // Remplace par le bon chemin de l'image
          alt="Illustration"
          width={1000}
          height={600}
          className="w-full h-auto md:max-w-[1000px]" // L'image prendra toute la largeur sur les petits écrans
        />
      </div>
    </div>
  );
};

export default CTA;

