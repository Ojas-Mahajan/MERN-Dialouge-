import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p><i className="fas fa-phone-alt"></i> +91 9216073888</p>
            <p><i className="fas fa-map-marker-alt"></i> SCO 301-302, Sector 35, Chandigarh</p>
            <p><i className="far fa-envelope"></i> dialoguecafe@gmail.com</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu-qr">Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#location">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="footer-social">
              <a href="https://www.facebook.com/Dialoguecafe35/" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/dialoguecafe35chd/?hl=en" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://x.com/OrangeInn35chd" target="_blank" rel="noopener noreferrer" title="Twitter (X)"><i className="fab fa-x-twitter"></i></a>
              <a href="https://in.pinterest.com/orangeinnchd/" target="_blank" rel="noopener noreferrer" title="Pinterest"><i className="fab fa-pinterest-p"></i></a>
              <a href="https://wa.me/919216073888" target="_blank" rel="noopener noreferrer" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Dialogue Café | All rights reserved.</p>
      </div>
    </footer>
  );
}
