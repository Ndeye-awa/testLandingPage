import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 py-6 transition-all duration-300 ${
    isScrolled
      ? "bg-white py-3 shadow-sm border-b border-gray-300"
      : "bg-[#f6f8fb] py-6"
  }`}
>
  <div className="container mx-auto px-6 md:px-10 lg:px-16 flex justify-between items-center">
    <Link href="#hero" scroll={false}>
      <Image
        src="/images/logoNavbar.svg"
        alt="Startup Agency Logo"
        // width={180}
        width={isScrolled ? 170 : 180} //Logo réduit en taille
        height={40}
        // className="object-contain"
        className="object-contain transition-all duration-300"
      />
    </Link>

    <button
      className="md:hidden text-primary hover:text-secondary focus:outline-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>

    <div
      ref={menuRef}
      className={`fixed top-0 left-0 w-64 bg-white h-full shadow-lg z-40 transition-transform ${
        isOpen ? "transform-none" : "transform -translate-x-full"
      } md:hidden`}
    >
      <div className="flex justify-between items-center p-6">
        <Link href="#hero" scroll={false}>
          <Image
            src="/images/logoNavbar.svg"
            alt="Startup Agency Logo"
            width={170}
            height={35}
            className="object-contain"
          />
        </Link>
        <button
          className="text-primary text-5xl"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
      </div>

      <nav className="flex flex-col space-y-6 py-8 px-6">
        <Link
          href="#hero"
          scroll={false}
          className="text-primary hover:text-secondary active:text-secondary"
        >
          Home
        </Link>
        <Link
          href="#services"
          scroll={false}
          className="text-primary hover:text-secondary active:text-secondary"
        >
          Services
        </Link>
        <Link
          href="#testimonials"
          scroll={false}
          className="text-primary hover:text-secondary active:text-secondary"
        >
          Testimonials
        </Link>
        <Link
          href="#news"
          scroll={false}
          className="text-primary hover:text-secondary active:text-secondary"
        >
          News
        </Link>
      </nav>

      <div className="absolute bottom-6 left-0 w-full px-6 flex justify-center">
        <Link
          href="#register"
          scroll={false}
          className="px-10 py-4 font-bold text-white bg-secondary transition duration-300 w-full text-center"
        >
          Register Now
        </Link>
      </div>
    </div>

    <nav className="hidden md:flex space-x-6 items-center lg:space-x-8">
      <Link
        href="#hero"
        scroll={false}
        className="text-primary hover:text-secondary active:text-secondary"
      >
        Home
      </Link>
      <Link
        href="#services"
        scroll={false}
        className="text-primary hover:text-secondary active:text-secondary"
      >
        Services
      </Link>
      <Link
        href="#testimonials"
        scroll={false}
        className="text-primary hover:text-secondary active:text-secondary"
      >
        Testimonials
      </Link>
      <Link
        href="#news"
        scroll={false}
        className="text-primary hover:text-secondary active:text-secondary"
      >
        News
      </Link>
    </nav>

    <div className="hidden md:block">
      <Link
        href="#register"
        scroll={false}
        className="px-6 py-3 font-bold border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition duration-300"
      >
        Register Now
      </Link>
    </div>
  </div>
</header>

  );
}
