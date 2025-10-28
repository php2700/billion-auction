import React, { useEffect, useState } from "react";
import home1 from "../../assets/home-1.jpg";
import home2 from "../../assets/home-2.jpg";
import home3 from "../../assets/home-3.jpg";
import home4 from "../../assets/home-4.jpg";
import home5 from "../../assets/home-5.jpg";

const images = [
  {
    src: home1,
    title: "Dubai luxury car sales",
    description: "Bid now",
    link: "#",
  },
  {
    src: home2,
    title: "Diamond jewellery",
    description: "Shop now",
    link: "#",
  },
  {
    src: home3,
    title: "Live Painting exhibition sale",
    description: "Book slot",
    link: "#",
  },
  {
    src: home4,
    title: "Persian art",
    description: "Bid now",
    link: "#",
  },
  {
    src: home5,
    title: `Tangalle villa for sale $1,200,000 USD`,
    description: "Contact agent",
    link: "#",
  },
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // ✅ Correct auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []); // No dependency needed

  return (
    <div className="relative w-full container mx-auto overflow-hidden rounded-xl shadow-lg">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].title}
        className="w-full h-[60vh] md:h-[80vh] object-cover"
      />

      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
        lg:left-auto lg:right-6 lg:translate-x-0 
        bg-[#00253E]/80 backdrop-blur-xs
        w-[90%] sm:w-[70%] md:w-[60%] lg:w-[350px]
        px-6 py-4 lg:px-8 lg:py-6 
        rounded-xl text-center lg:text-left 
        shadow-lg transition-all border border-white/10"
      >
        <h2 className="text-lg lg:text-2xl text-white font-semibold">
          {images[currentIndex].title}
        </h2>
        <p className="text-base lg:text-lg text-[#c29b40] font-semibold mt-2">
          {images[currentIndex].description}
        </p>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-2 rounded-full shadow-md"
      >
        &#60;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-2 rounded-full shadow-md"
      >
        &#62;
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
