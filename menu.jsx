import React from "react";
import menuQR from "../assets/Images/Menu QR .png";

export default function MenuQR() {
  return (
    <div className="menu-category" id="menu-qr">
      <h3>📲 Scan for Full Menu</h3>
      <div className="menu-grid">
        <img src={menuQR} alt="Dialogue Cafe Full Menu QR" className="menu-photo" style={{ borderRadius: 10, border: "1px solid #ddd", width: 250, height: 250 }} />
      </div>
    </div>
  );
}
