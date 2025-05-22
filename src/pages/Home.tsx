// src/pages/Home.tsx

import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/slideshow/slide1.jpg",
    "/images/slideshow/slide2.jpg",
    "/images/slideshow/slide3.jpg",
    "/images/slideshow/slide4.jpg",
    "/images/slideshow/slide5.jpg",
    "/images/slideshow/slide6.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white bg-black/50 text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold drop-shadow">
            Welcome to Padaminas Brazilian Bakery
          </h1>
          <p className="mt-2 text-base md:text-lg drop-shadow max-w-md">
            Flavors from Minas straight to your table. Place your online order now!
          </p>
          <a
            href="https://www.toasttab.com/padaminas-brazilian-bakery-66-w-lincoln-ave"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-green-700 hover:bg-green-800 px-6 py-2 rounded text-white text-sm md:text-base"
          >
            Order Online
          </a>
          <a
            href="https://www.instagram.com/padaminas_mountvernon/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 text-white hover:text-pink-400 text-sm md:text-base"
          >
            <FaInstagram className="text-xl" />
            @padaminas_mountvernon
          </a>
        </div>
      </div>

      {/* Menu Highlights */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-8">Menu Highlights</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-36">
            <img src="/images/pao-de-queijo.jpg" alt="Pão de Queijo" className="w-full h-32 object-cover rounded" />
            <p className="mt-2 text-sm">Cheese Bread</p>
          </div>
          <div className="w-36">
            <img src="/images/coxinha.jpg" alt="Coxinha" className="w-full h-32 object-cover rounded" />
            <p className="mt-2 text-sm">Coxinha</p>
          </div>
          <div className="w-36">
            <img src="/images/bolo-cenoura.jpg" alt="Carrot Cake" className="w-full h-32 object-cover rounded" />
            <p className="mt-2 text-sm">Carrot Cake with Chocolate</p>
          </div>
        </div>
      </section>

      {/* About + Map */}
      <section className="px-4 pb-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm md:text-base">
            Padaminas was founded with a mission: to bring the authentic flavors, knowledge, and traditions of Minas Gerais to New York
            <br />
            Crafted with fresh ingredients and traditional recipes, our bakery is a celebration of love, culture, and warmth—made especially for you and your family.
          </p>
        </div>
        <div>
          <iframe
            title="Padaminas Location"
            src="https://www.google.com/maps?q=66+W+Lincoln+Ave&output=embed"
            width="100%"
            height="250"
            className="rounded shadow"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 px-4 text-center text-sm">
        <p><strong>Address:</strong> 66 W Lincoln Ave</p>
        <p><strong>Hours:</strong> Mon–Sat: 6:00 AM – 8:00 PM | Sun: 6:00 AM – 1:00 PM</p>
        <p><strong>Phone:</strong> (914) 667-9101</p>
      </footer>
    </div>
  );
}

export default Home;
