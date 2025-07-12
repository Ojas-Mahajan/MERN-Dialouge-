import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 400, once: false });
  }, []);

  return (
    <section className="gallery" id="gallery">
      <h2 style={{ textAlign: "center", fontFamily: "'Lobster', cursive", marginBottom: 20 }}>
        Gallery
      </h2>
      <div className="gallery-grid">
        <img src="/Images/interiors.jpg" alt="Interior 1" className="modal-img" data-aos="fade-up" data-aos-duration="600" />
        <img src="/Images/interiors3.jpg" alt="Interior 2" className="modal-img" data-aos="fade-up" data-aos-duration="600" />
        <img src="/Images/cafe2.jpg" alt="Seating" className="modal-img" data-aos="fade-up" data-aos-duration="600" />
        <img src="/Images/cafe5.jpg" alt="Exterior" className="modal-img" data-aos="fade-up" data-aos-duration="600" />
        <img src="/Images/food2.jpg" alt="Burger & Fries" className="modal-img" data-aos="fade-up" data-aos-duration="600" />
        <img src="/Images/food3.jpg" alt="Pizza" className="modal-img" data-aos="fade-up" data-aos-duration="600" />
        <img src="/Images/pasta.jpg" alt="Pasta" className="modal-img" data-aos="fade-up" data-aos-duration="600" />
        <img src="/Images/paneer.jpg" alt="Paneer" className="modal-img" data-aos="fade-up" data-aos-duration="600" />
        <img src="/Images/quesadillas.jpg" alt="Quesadillas" className="modal-img" data-aos="fade-up" data-aos-duration="600" />
        <img src="/Images/noodles.jpg" alt="Noodles" className="modal-img" data-aos="fade-up" data-aos-duration="600" />
        <img src="/Images/mocktail.jpg" alt="Mocktails" className="modal-img" data-aos="fade-up" data-aos-duration="600" />
        <img src="/Images/waffles.jpg" alt="Waffles" className="modal-img" data-aos="fade-up" data-aos-duration="600" />
      </div>
    </section>
  );
}
