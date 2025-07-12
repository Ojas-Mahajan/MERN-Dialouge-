// import React, { useState } from "react";
// import { FaBars, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
// import logo from "../assets/Images/dialogue cafe.jpg"; // Update path if needed

// const Navbar = () => {
//   const [showNav, setShowNav] = useState(false);

//   const handleToggle = () => setShowNav((prev) => !prev);

//   return (
//     <header>
//       <div className="header-container">
//         <div className="logo">
//           <img src={logo} alt="Dialogue Café Logo" className="logo-img" />
//         </div>
//         <nav>
//           <ul id="nav-links" className={showNav ? "show" : ""}>
//             <li><a href="#home" onClick={() => setShowNav(false)}>Home</a></li>
//             {/* <li><a href="#about" onClick={() => setShowNav(false)}>About</a></li> */}
//             <li><a href="#menu-qr" onClick={() => setShowNav(false)}>Menu</a></li>
//             <li><a href="#gallery" onClick={() => setShowNav(false)}>Gallery</a></li>
//             <li><a href="#location" onClick={() => setShowNav(false)}>Contact Us</a></li>
//           </ul>
//           <span id="hamburger-btn" className="fa fa-bars" onClick={handleToggle}>
//             <FaBars />
//           </span>
//         </nav>
//       </div>
//       <div className="contact-info">
//         <FaMapMarkerAlt /> SCO 301-302, Sector 35, Chandigarh
//         <span className="divider">|</span>
//         <FaPhone /> <a href="tel:+919216073888">+91 9216073888</a>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import logo from "../assets/Images/dialogue cafe.jpg"; // Update path if needed

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => setShowNav((prev) => !prev);

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Dialogue Café Logo" className="logo-img" />
        </div>
        <nav>
          <ul id="nav-links" className={showNav ? "show" : ""}>
            <li>
              <NavLink to="/" end onClick={() => setShowNav(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" onClick={() => setShowNav(false)}>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={() => setShowNav(false)}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setShowNav(false)}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <span id="hamburger-btn" className="fa fa-bars" onClick={handleToggle}>
            <FaBars />
          </span>
        </nav>
      </div>
      <div className="contact-info">
        <FaMapMarkerAlt /> SCO 301-302, Sector 35, Chandigarh
        <span className="divider">|</span>
        <FaPhone /> <a href="tel:+919216073888">+91 9216073888</a>
      </div>
    </header>
  );
};

export default Navbar;
