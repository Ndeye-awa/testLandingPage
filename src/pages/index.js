import Header from "@/components/Header";
import Hero from "@/components/Hero"; // Assure-toi que le chemin est correct
import Features from "@/components/Features"; // Utilisation du composant Features
import Testimonials from "@/components/Testimonials"; // Importation du composant Testimonials
import Cta from "@/components/Cta"; // Importation du composant cta
import News from "@/components/News"; // Importation du composant news
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Fonction pour activer le défilement fluide
    const links = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      document.querySelector(e.currentTarget.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      // Nettoyage des écouteurs
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section id="hero">
        <Hero /> {/* Ajout du composant Hero ici */}
      </section>
      <section id="features">
        <Features /> {/* Ajout du composant Features ici */}
      </section>
      <section id="testimonials">
        <Testimonials /> {/* Ajout du composant Testimonials ici */}
      </section>
      <section id="cta">
        <Cta /> {/* Ajout du composant cta ici */}
      </section>
      <section id="news">
        <News /> {/* Ajout du composant cta ici */}
      </section>
      {/* Autres sections */}
    </div>
  );
}