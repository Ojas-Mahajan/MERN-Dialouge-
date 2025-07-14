import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import axios from "axios";
import logo from "../assets/Images/dialogue cafe.jpg";
import socialQR from "../assets/Images/NewQR.png";

// ✅ Thank You Modal (on form submit)
function ThankYouModal({ open, onClose, logo }) {
  if (!open) return null;
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={closeButtonStyle} onClick={onClose}>×</button>
        <img src={logo} alt="Dialogue Café Logo" style={logoStyle} />
        <div style={thankYouTextStyle}>
          Thank you! We will keep you updated.
        </div>
      </div>
    </div>
  );
}

// ✅ QR Modal (on page load)
function QRPopupModal({ open, onClose, qrImage }) {
  if (!open) return null;
  return (
    <div style={overlayStyle}>
      <div style={qrModalStyle}>
        <button style={closeButtonStyle} onClick={onClose}>×</button>
        <h3 style={qrHeadingStyle}>📲 Scan to Follow Us</h3>
        <img src={qrImage} alt="Follow Us QR Code" width="200" height="200" style={qrImageStyle} />
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [modalOpen, setModalOpen] = useState(false);
  const [qrModalOpen, setQRModalOpen] = useState(true); // Auto show QR popup on load

  useEffect(() => {
    AOS.init({ duration: 400, once: false });

    // Optional: Auto close QR popup after 7 seconds
    // const timer = setTimeout(() => setQRModalOpen(false), 7000);
    // return () => clearTimeout(timer);
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    // try {
    //   await axios.post("http://localhost:5000/api/contact", form);
    // } catch (e) {}
    setModalOpen(true);
    setForm({ name: "", phone: "", email: "" });
  };

  return (
    <main>
      <section className="contact" id="contact" style={contactSectionStyle}>
        <h2 data-aos="fade-down" style={headingStyle}>
          Contact Us for staying updated!
        </h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required style={inputStyle} />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Your Phone number" required style={inputStyle} />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required style={inputStyle} />
          <button type="submit" style={submitButtonStyle}>Submit</button>
        </form>
      </section>

      <ThankYouModal open={modalOpen} onClose={() => setModalOpen(false)} logo={logo} />
      <QRPopupModal open={qrModalOpen} onClose={() => setQRModalOpen(false)} qrImage={socialQR} />

      <div className="form" style={{ marginTop: 30, textAlign: "center" }}>
        <p>We'd love to hear from you!</p>
        <p>
          Have questions about reservations, menu details, or events? Use the form above and we’ll get back to you shortly.
        </p>
        <p>
          We’re open daily from <strong>10:30 AM to 10:30 PM</strong>.
        </p>
      </div>

      {/* Fallback QR placement if user closes popup */}
      {/* <div className="menu-category" id="social-qr">
        <h3>📲 Scan to Follow Us</h3>
        <div className="menu-grid">
          <img
            src={socialQR}
            alt="Follow Us QR Code"
            className="menu-photo"
            width="250"
            height="250"
            style={{ borderRadius: 10, border: "1px solid #ddd" }}
          />
        </div>
      </div> */}
    </main>
  );
}

//
// 🔧 Style Objects
//

const contactSectionStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "65vh",
  background: "#faf8fd",
  paddingTop: 32,
  paddingBottom: 48,
};

const headingStyle = {
  fontFamily: "'Lobster', cursive",
  fontSize: "2.6rem",
  color: "#8e3adf",
  marginBottom: 24,
  marginTop: 8,
  letterSpacing: 1,
  textShadow: "0 3px 12px rgba(90,24,150,0.08)",
};

const formStyle = {
  background: "#fff",
  borderRadius: 18,
  boxShadow: "0 4px 28px rgba(110,50,180,0.09)",
  padding: "32px",
  width: "100%",
  maxWidth: 410,
  display: "flex",
  flexDirection: "column",
  gap: 22,
};

const inputStyle = {
  padding: "13px 16px",
  fontSize: "1.13rem",
  borderRadius: 8,
  border: "1.5px solid #c5b6e0",
  background: "#faf8ff",
  transition: "border 0.2s",
  outline: "none",
};

const submitButtonStyle = {
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
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.4)",
  zIndex: 1001,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalStyle = {
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
};

const qrModalStyle = {
  background: "#fff",
  borderRadius: 16,
  padding: "30px 20px",
  maxWidth: 340,
  width: "90%",
  textAlign: "center",
  position: "relative",
  boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
};

const closeButtonStyle = {
  position: "absolute",
  top: 16,
  right: 16,
  background: "#a259e4",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: 30,
  height: 30,
  fontSize: 20,
  cursor: "pointer",
  lineHeight: "30px",
};

const logoStyle = {
  width: 180,
  height: "auto",
  borderRadius: 16,
  marginTop: 14,
  marginBottom: 25,
  objectFit: "contain",
};

const thankYouTextStyle = {
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
};

const qrHeadingStyle = {
  fontFamily: "'Lobster', cursive",
  color: "#8430b3",
  fontSize: "1.7rem",
  marginBottom: 16,
};

const qrImageStyle = {
  borderRadius: 10,
  border: "1px solid #ddd",
};
