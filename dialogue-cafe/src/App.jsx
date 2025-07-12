
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import Navbar from "./components/navbar";
// import Hero from "./components/hero";
// import About from "./components/about";
// import Gallery from "./components/gallery";
// import MenuQR from "./components/menu";
// import Testimonials from "./components/testimonials";
// import MapSection from "./components/map"; //
// import Footer from "./components/footer";
// import FloatingSocial from "./components/floatingsocial";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 400, // faster (default AOS speed)
//       once: false,   // animation triggers every scroll in view
//     });
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Testimonials />
//       <Gallery />
//       <MenuQR />
//             <MapSection />  
//       <Footer />
//       <FloatingSocial />
//     </>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import About from "./components/about";
import Gallery from "./components/gallery";
import MenuQR from "./components/menu";
import Testimonials from "./components/testimonials";
import MapSection from "./components/map";
import FloatingSocial from "./components/floatingsocial";

import MenuPage from "./pages/menupage";         // full menu page
import GalleryPage from "./pages/gallerypage";   // full gallery page
import ContactPage from "./pages/contactpage";   // full contact page

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Gallery />
      <MenuQR />
      <MapSection />
      <FloatingSocial />
    </>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 400, // faster (default AOS speed)
      once: false,   // animation triggers every scroll in view
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Optionally, add <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
