import React from "react";
// import all images from assets/Images if you want to use them as imports
import interiors from "../assets/Images/interiors.jpg";
import interiors3 from "../assets/Images/interiors3.jpg";
import cafe2 from "../assets/Images/cafe2.jpg";
import cafe5 from "../assets/Images/cafe5.jpg";
import food2 from "../assets/Images/food2.jpg";
import food3 from "../assets/Images/food3.jpg";
import pasta from "../assets/Images/pasta.jpg";
import paneer from "../assets/Images/paneer.jpg";
import quesadillas from "../assets/Images/quesadillas.jpg";
import noodles from "../assets/Images/noodles.jpg";
import mocktail from "../assets/Images/mocktail.jpg";
import waffles from "../assets/Images/waffles.jpg";

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2 style={{ textAlign: "center", fontFamily: "Lobster, cursive", marginBottom: 20 }}>Gallery</h2>
      <p style={{ textAlign: "center", fontSize: "1.1rem", marginTop: 20, marginBottom: 40 }}>
        Here’s a glimpse into the vibrant ambiance, flavorful dishes, and cozy corners of Dialogue Café.<br />
        Whether it’s a hearty meal or a quiet evening with friends — we’ve got the perfect setting waiting for you!
      </p>
      <div className="gallery-grid">
        <img src={interiors} alt="Interior 1" className="modal-img" />
        <img src={interiors3} alt="Interior 2" className="modal-img" />
        <img src={cafe2} alt="Seating" className="modal-img" />
        <img src={cafe5} alt="Exterior" className="modal-img" />
        <img src={food2} alt="Burger & Fries" className="modal-img" />
        <img src={food3} alt="Pizza" className="modal-img" />
        <img src={pasta} alt="Pasta" className="modal-img" />
        <img src={paneer} alt="Paneer" className="modal-img" />
        <img src={quesadillas} alt="Quesadillas" className="modal-img" />
        <img src={noodles} alt="Noodles" className="modal-img" />
        <img src={mocktail} alt="Mocktails" className="modal-img" />
        <img src={waffles} alt="Waffles" className="modal-img" />
      </div>
    </section>
  );
}
