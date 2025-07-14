import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import interiors from "../assets/Images/interiors.jpg";
import interiors3 from "../assets/Images/interiors3.jpg";
import cafe2 from "../assets/Images/cafe2.jpg";
import cafe5 from "../assets/Images/cafe5.jpg";
import food2 from "../assets/Images/platter.jpg";
import food3 from "../assets/Images/snacks.jpg";
import pasta from "../assets/Images/pasta.jpg";
import paneer from "../assets/Images/paneer.jpg";
import quesadillas from "../assets/Images/quesadillas.jpg";
import noodles from "../assets/Images/noodles.jpg";
import mocktail from "../assets/Images/sweet.jpg";
import waffles from "../assets/Images/waffles.jpg";

const images = [
  { src: interiors, alt: "Interior 1" },
  { src: interiors3, alt: "Interior 2" },
  { src: cafe2, alt: "Seating" },
  { src: cafe5, alt: "Exterior" },
  { src: food2, alt: "Burger & Fries" },
  { src: food3, alt: "Pizza" },
  { src: pasta, alt: "Pasta" },
  { src: paneer, alt: "Paneer" },
  { src: quesadillas, alt: "Quesadillas" },
  { src: noodles, alt: "Noodles" },
  { src: mocktail, alt: "Mocktails" },
  { src: waffles, alt: "Waffles" },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 400, once: false });

    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev + 1) % images.length);
        if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
        if (e.key === "Escape") setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const prevImage = () => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setSelectedIndex((prev) => (prev + 1) % images.length);

  return (
    <section className="gallery" id="gallery">
      <h2
        data-aos="fade-down"
        style={{
          textAlign: "center",
          fontFamily: "'Lobster', cursive",
          marginBottom: 20,
        }}
      >
        Gallery
      </h2>
      
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="modal-img"
            data-aos="fade-up"
            data-aos-duration="600"
            onClick={() => openModal(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <span className="modal-close" onClick={closeModal}>×</span>
          <img
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing on image click
          />
          <button className="arrow left" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</button>
          <button className="arrow right" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</button>
        </div>
      )}
    </section>
  );
}
