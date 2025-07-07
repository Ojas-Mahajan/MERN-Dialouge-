import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) icon from react-icons v6
import pinterestLogo from "../assets/Images/Pinterest-logo.png";
import whatsappLogo from "../assets/Images/whatsapp_3536445.png";

export default function FloatingSocial() {
  return (
    <div className="floating-social">
      <a
        href="https://www.facebook.com/Dialoguecafe35/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon fb"
        title="Facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/dialoguecafe35chd/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon ig"
        title="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://x.com/OrangeInn35chd"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon x"
        title="X (Twitter)"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://in.pinterest.com/orangeinnchd/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon pinterest"
        title="Pinterest"
      >
        <img
          src={pinterestLogo}
          alt="Pinterest"
          style={{ width: 32, height: 32, borderRadius: 8 }}
        />
      </a>
      <a
        href="https://wa.me/919216073888"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Chat on WhatsApp"
      >
        <img
          src={whatsappLogo}
          alt="WhatsApp"
          style={{ width: 32, height: 32, borderRadius: 8 }}
        />
      </a>
    </div>
  );
}
