import React, { useState, useEffect } from "react";
import mukesh from "../assets/Images/mukeshcustomer.png";
import pavika from "../assets/Images/pavikacustomer.png";
import shivansh from "../assets/Images/shivanshcustomer.png";
import rajvi from "../assets/Images/rajvicustomer.png";
import cafe4 from "../assets/Images/croppedcafe.jpg";

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
        backgroundImage: `linear-gradient(
          to bottom,
          rgba(20, 20, 20, 0.55),
          rgba(20, 20, 20, 0.55)
        ), url(${cafe4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "100px 0 40px 0",
        textAlign: "center",
        color: "#fff",
        position: "relative",
      }}
    >
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonial-quote" style={{ fontSize: "2.8rem", marginBottom: "1.1rem" }}>❝</div>
      <img
        src={testimonials[idx].img}
        alt={testimonials[idx].name}
        className="guest-photo"
        style={{
          width: 88,
          height: 88,
          borderRadius: "50%",
          border: "4px solid #fff",
          objectFit: "cover",
          margin: "0 auto 24px auto",
          boxShadow: "0 6px 24px 0 rgba(0,0,0,0.28)"
        }}
      />
      <p className="testimonial-text" style={{
        maxWidth: 800,
        margin: "0 auto 1.8rem auto",
        fontSize: "1.35rem",
        fontWeight: 400,
        lineHeight: 1.35,
        letterSpacing: ".01em"
      }}>
        {testimonials[idx].text}
      </p>
      <div>
        <span className="author" style={{
          fontFamily: "Quicksand, Arial, sans-serif",
          fontWeight: 700,
          fontSize: "1.12rem",
          fontStyle: "italic",
          display: "block"
        }}>{testimonials[idx].name}</span>
        <span className="author-role" style={{
          fontFamily: "Quicksand, Arial, sans-serif",
          fontSize: "1rem",
          opacity: 0.9
        }}>Satisfied Customer</span>
      </div>
      <div className="testi-dots" style={{ marginTop: 26 }}>
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot${i === idx ? " active" : ""}`}
            onClick={() => setIdx(i)}
            style={{
              height: 10,
              width: 10,
              margin: "0 6px",
              display: "inline-block",
              borderRadius: "50%",
              background: i === idx ? "#ff1ab6" : "#fff",
              opacity: i === idx ? 1 : 0.4,
              cursor: "pointer",
              transition: "background 0.3s"
            }}
          />
        ))}
      </div>
    </section>
  );
}
