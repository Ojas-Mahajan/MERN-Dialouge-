
import React, { useState, useEffect } from "react";
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

const galleryImages = [
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
  { src: waffles, alt: "Waffles" }
];

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hide/show social icons when modal is open/closed
  useEffect(() => {
    const icons = document.querySelector(".social-icons");
    if (icons) {
      if (modalOpen) {
        icons.style.opacity = 0;
        icons.style.pointerEvents = "none";
      } else {
        icons.style.opacity = 1;
        icons.style.pointerEvents = "auto";
      }
    }
  }, [modalOpen]);

  const openModal = idx => {
    setCurrentIndex(idx);
    setModalOpen(true);
  };

  const closeModal = e => {
    e && e.stopPropagation();
    setModalOpen(false);
  };

  const prevImage = e => {
    e.stopPropagation();
    setCurrentIndex(prev =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextImage = e => {
    e.stopPropagation();
    setCurrentIndex(prev =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="gallery" id="gallery">
      <h2
        style={{
          textAlign: "center",
          fontFamily: "Lobster, cursive",
          marginBottom: 20
        }}
      >
        Gallery
      </h2>
      <div className="gallery-grid">
        {galleryImages.map((img, idx) => (
          <img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            className="modal-img"
            data-aos="fade-up"
            data-aos-duration="600"
            onClick={() => openModal(idx)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      {modalOpen && (
        <div
          className="gallery-modal"
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1001
          }}
        >
          {/* Left Arrow */}
          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              left: 40,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 32,
              color: "#fff",
              background: "rgba(0,0,0,0.5)",
              border: "none",
              borderRadius: "50%",
              width: 50,
              height: 50,
              cursor: "pointer",
              zIndex: 1002
            }}
            aria-label="Previous"
          >
            &#8592;
          </button>

          {/* Modal Image */}
          <img
            src={galleryImages[currentIndex].src}
            alt={galleryImages[currentIndex].alt}
            style={{
              maxHeight: "55vh",
              maxWidth: "75vw",
              borderRadius: 14,
              boxShadow: "0 4px 32px #0008",
              background: "#fff",
              objectFit: "contain"
            }}
            onClick={e => e.stopPropagation()}
          />

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              right: 40,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 32,
              color: "#fff",
              background: "rgba(0,0,0,0.5)",
              border: "none",
              borderRadius: "50%",
              width: 50,
              height: 50,
              cursor: "pointer",
              zIndex: 1002
            }}
            aria-label="Next"
          >
            &#8594;
          </button>

          {/* Red circular close button, top right */}
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: 25,
              right: 38,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#e53935",
              color: "#fff",
              border: "none",
              fontSize: 26,
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1003,
              boxShadow: "0 2px 8px #0004"
            }}
            aria-label="Close"
          >
            &#10006;
          </button>
        </div>
      )}
    </section>
  );
}
