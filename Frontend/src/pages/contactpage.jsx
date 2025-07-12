

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import axios from "axios";
import logo from "../assets/Images/dialogue cafe.jpg";


function ThankYouModal({ open, onClose, logo }) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "18px",
        maxWidth: 520,
        width: "90%",
        boxShadow: "0 4px 40px rgba(0,0,0,0.13)",
        textAlign: "center",
        position: "relative",
        padding: "40px 20px 36px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <button
          style={{
            position: "absolute", top: 22, right: 22, background: "#ffb703",
            border: "none", color: "#fff", fontSize: 28, borderRadius: "50%", width: 36, height: 36, cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0,0,0,0.09)"
          }}
          onClick={onClose}
          aria-label="Close"
        >×</button>
<img
  src={logo}
  alt="Dialogue Café Logo"
  style={{
    width: 180,         // Increase from 120 or 130 to 180 (or any px value you want)
    height: "auto",     // Keeps aspect ratio
    borderRadius: 16,
    marginTop: 14,
    marginBottom: 25,
    objectFit: "contain",
  }}
/>

        <div style={{
          background: "#3a418b",
          color: "#fff",
          fontFamily: "'Lobster', cursive",
          fontSize: "2.1rem",
          padding: "24px 16px 16px 16px",
          borderRadius: 12,
          width: "100%",
          marginTop: 0,
          marginBottom: 8,
          boxSizing: "border-box",
        }}>
          Thank you! We will keep you updated.
        </div>
      </div>
    </div>
  );
}






export default function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 400, once: false });
  }, []);

  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // Send to backend here (adjust URL as needed)
    try {
      await axios.post("http://localhost:5000/api/contact", form);
    } catch (e) {}
    setModalOpen(true);
    setForm({ name: "", phone: "", email: "" });
  };

  return (
    <main>
 <section
  className="contact"
  id="contact"
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "65vh",
    background: "#faf8fd",
    paddingTop: 32,
    paddingBottom: 48,
  }}
>
  <h2
    style={{
      fontFamily: "'Lobster', cursive",
      fontSize: "2.6rem",
      color: "#8e3adf",
      marginBottom: 24,
      marginTop: 8,
      letterSpacing: 1,
      textShadow: "0 3px 12px rgba(90,24,150,0.08)",
    }}
  >
    Contact Us for staying updated!
  </h2>
  <form
    className="contact-form"
    onSubmit={handleSubmit}
    style={{
      background: "#fff",
      borderRadius: 18,
      boxShadow: "0 4px 28px rgba(110,50,180,0.09)",
      padding: "32px 32px 28px 32px",
      width: "100%",
      maxWidth: 410,
      display: "flex",
      flexDirection: "column",
      gap: 22,
    }}
  >
    <input
      name="name"
      value={form.name}
      onChange={handleChange}
      placeholder="Your Name"
      required
      style={{
        padding: "13px 16px",
        fontSize: "1.13rem",
        borderRadius: 8,
        border: "1.5px solid #c5b6e0",
        background: "#faf8ff",
        transition: "border 0.2s",
        outline: "none",
      }}
    />
    <input
      name="phone"
      value={form.phone}
      onChange={handleChange}
      placeholder="Your Phone number"
      required
      style={{
        padding: "13px 16px",
        fontSize: "1.13rem",
        borderRadius: 8,
        border: "1.5px solid #c5b6e0",
        background: "#faf8ff",
        transition: "border 0.2s",
        outline: "none",
      }}
    />
    <input
      name="email"
      type="email"
      value={form.email}
      onChange={handleChange}
      placeholder="Your Email"
      required
      style={{
        padding: "13px 16px",
        fontSize: "1.13rem",
        borderRadius: 8,
        border: "1.5px solid #c5b6e0",
        background: "#faf8ff",
        transition: "border 0.2s",
        outline: "none",
      }}
    />
    <button
      type="submit"
      style={{
        marginTop: 5,
        padding: "13px 0",
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#fff",
        background: "linear-gradient(90deg,#a259e4 55%,#8430b3 100%)",
        border: "none",
        borderRadius: 9,
        cursor: "pointer",
        letterSpacing: 0.4,
        boxShadow: "0 4px 16px rgba(162,89,228,0.07)",
        transition: "background 0.2s,box-shadow 0.2s",
      }}
    >
      Submit
    </button>
  </form>
</section>

      <ThankYouModal open={modalOpen} onClose={() => setModalOpen(false)} logo={logo} />

      <div className="form" style={{ marginTop: 30 }}>
        <p>We'd love to hear from you!</p>
        <p>
          Have questions about reservations, menu details, or events? Use the form above and we’ll get back to you shortly.
        </p>
        <p>
          We’re open daily from <strong>10:30 AM to 10:30 PM</strong>.
        </p>
      </div>

      {/* Social Media QR code */}
      <div className="menu-category" id="social-qr">
        <h3>📲 Scan to Follow Us</h3>
        <div className="menu-grid">
          <img
            src="/assets/Images/NewQR.png"
          
            alt="Follow Us QR Code"
            className="menu-photo"
            width="250"
            height="250"
            style={{ borderRadius: 10, border: "1px solid #ddd" }}
          />
        </div>
      </div>
    </main>
  );
}

