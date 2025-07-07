import React, { useState, useEffect } from "react";
import mukesh from "../assets/Images/mukeshcustomer.png";
import pavika from "../assets/Images/pavikacustomer.png";
import shivansh from "../assets/Images/shivanshcustomer.png";
import rajvi from "../assets/Images/rajvicustomer.png";
import cafe4 from "../assets/Images/cafe4.jpg";

const testimonials = [
  {
    img: mukesh,
    name: "Mukesh Kapoor",
    text: "I had an amazing experience at Dialogue Cafe, Sector 35. The Minestrone and Anchor soups were delicious, and the quesadillas were full of flavor. Cozy ambiance and prompt, friendly service. Highly recommended!",
  },
  {
    img: pavika,
    name: "Pavika Nanda",
    text: "Tried their spinach mushroom sandwich and cappuccino, both are good. Love the calm ambience of this cafe always❣️",
  },
  {
    img: shivansh,
    name: "Shivansh Wali",
    text: "Amazing food, amazing ambience, diverse options across the cuisines and certainly boasts great staff as well. It's a place that'll never ever disappoint you. Just no second thoughts required!",
  },
  {
    img: rajvi,
    name: "Rajvi Doshi",
    text: "Food is great with a wide range of options to choose from. What I loved the most was the super sweet and accommodating staff.",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="testimonials-section"
      style={{
        backgroundImage: `url(${cafe4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div className="testimonials-overlay"></div>
      <div className="testimonials-content">
        <h2>Testimonials</h2>
        <div className="testi-slider">
          <div className="slide active">
            <div className="quote">❝</div>
            <img src={testimonials[idx].img} alt={testimonials[idx].name} className="guest-photo" />
            <p>{testimonials[idx].text}</p>
            <span className="author"><strong>{testimonials[idx].name}</strong></span>
            <span className="author-role">Satisfied Customer</span>
          </div>
          <div className="testi-dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={"dot" + (i === idx ? " active" : "")}
                onClick={() => setIdx(i)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
