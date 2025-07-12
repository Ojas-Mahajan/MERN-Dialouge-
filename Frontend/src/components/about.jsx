// import React from "react";
// import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";
// import cafe1 from "../assets/Images/cafe1.jpg"; // make sure path is correct

// const About = () => {
//   return (
//     <section className="about" id="about">
//       <div className="about-text">
//         <h2>About Us</h2>
//         <p>
//           Located in the heart of Chandigarh, <strong>Dialogue Café</strong> offers a vibrant mix of
//           <em> Continental, Mexican, Chinese, North Indian, and American</em> cuisines, along with delightful desserts and beverages.
//         </p>
//         <p>
//           With stylish interiors and cozy ambience, it's the ideal spot for casual outings or special meals.
//           Enjoy great food, warm hospitality, and aesthetic vibes—all in one place.
//         </p>
//         <ul className="about-details">
//           <li><FaMapMarkerAlt /> SCO 301-302, Sector 35, Chandigarh</li>
//           <li><FaClock /> <span className="highlight-timing">10:30 AM – 10:30 PM (Daily)</span></li>
//           <li><FaPhone /> <a href="tel:+919216073888">+91 9216073888</a></li>
//         </ul>
//       </div>
//       <div className="about-images">
//         <img src={cafe1} alt="Cafe Entrance" />
//       </div>
//     </section>
//   );
// };

// export default About;
import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import cafe1 from "../assets/Images/cafe1.jpg"; // Make sure this path is correct

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-text" data-aos="fade-right">
        <h2>About Us</h2>
        <p>
          Located in the heart of Chandigarh, <strong>Dialogue Café</strong> offers a vibrant mix of
          <em> Continental, Mexican, Chinese, North Indian, and American</em> cuisines, along with delightful desserts
          and beverages.
        </p>
        <p>
          With stylish interiors and cozy ambience, it's the ideal spot for casual outings or special meals.
          Enjoy great food, warm hospitality, and aesthetic vibes—all in one place.
        </p>
        <ul className="about-details">
          <li>
            <FaMapMarkerAlt /> SCO 301-302, Sector 35, Chandigarh
          </li>
          <li>
            <FaClock /> <span className="highlight-timing">10:30 AM – 10:30 PM (Daily)</span>
          </li>
          <li>
            <FaPhone /> <a href="tel:+919216073888">+91 9216073888</a>
          </li>
          {/* If you want to add ratings, uncomment below: */}
          {/* <li><FaStar /> 4.1 (Dining) | 4.3 (Delivery)</li> */}
        </ul>
      </div>

      <div className="about-images" data-aos="fade-left">
        <img src={cafe1} alt="Cafe Entrance" />
        {/* If you want to add more images, import and add below: */}
        {/* <img src={bar} alt="Food Variety" />
        <img src={beverages} alt="Beverage Setup" /> */}
      </div>
    </section>
  );
};

export default About;
