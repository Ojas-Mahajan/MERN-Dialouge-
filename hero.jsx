// import React from "react";
// import heroBg from "../assets/Images/JuneCAFE.jpg";

// export default function Hero() {
//   return (
//     <section className="hero-section" id="home">
//       <img src={heroBg} alt="Cafe Interior" className="background-img" />
//       <div className="hero-overlay">
//         <h1>Welcome to Dialogue Café</h1>
//         <p className="cuisine-links subtitle">
//           <a href={require("../assets/Images/MENU1.jpg")} target="_blank" rel="noopener noreferrer" className="menu-link">Continental</a> ·
//           <a href={require("../assets/Images/MENU3.jpg")} target="_blank" rel="noopener noreferrer" className="menu-link">Mexican</a> ·
//           <a href={require("../assets/Images/MENU4.jpg")} target="_blank" rel="noopener noreferrer" className="menu-link">Chinese</a> ·
//           <a href={require("../assets/Images/MENU5.jpg")} target="_blank" rel="noopener noreferrer" className="menu-link">North Indian</a> ·
//           <a href={require("../assets/Images/MENU2.jpg")} target="_blank" rel="noopener noreferrer" className="menu-link">American</a>
//         </p>
//         <div className="hero-buttons">
//           <a href="#menu-qr" className="btn">Menu</a>
//           <button id="book-btn" className="btn highlight">Book a Table</button>
//         </div>
//       </div>
//     </section>
//   );
// }
 import React from "react";
import heroBg from "../assets/Images/JuneCAFE.jpg";
import menu1 from "../assets/Images/MENU1.jpg";
import menu2 from "../assets/Images/MENU2.jpg";
import menu3 from "../assets/Images/MENU3.jpg";
import menu4 from "../assets/Images/MENU4.jpg";
import menu5 from "../assets/Images/MENU5.jpg";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <img src={heroBg} alt="Cafe Interior" className="background-img" />
      <div className="hero-overlay">
        <h1>Welcome to Dialogue Café</h1>
        <p className="cuisine-links subtitle">
          <a href={menu1} target="_blank" rel="noopener noreferrer" className="menu-link">Continental</a> ·
          <a href={menu3} target="_blank" rel="noopener noreferrer" className="menu-link">Mexican</a> ·
          <a href={menu4} target="_blank" rel="noopener noreferrer" className="menu-link">Chinese</a> ·
          <a href={menu5} target="_blank" rel="noopener noreferrer" className="menu-link">North Indian</a> ·
          <a href={menu2} target="_blank" rel="noopener noreferrer" className="menu-link">American</a>
        </p>
        <div className="hero-buttons">
          <a href="#menu-qr" className="btn">Menu</a>
          <button id="book-btn" className="btn highlight">Book a Table</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
