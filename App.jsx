
// import React from "react";
// import Navbar from "./components/navbar";
// import Hero from "./components/hero";
// import About from "./components/about";
// import Gallery from "./components/gallery";
// import Menu from "./components/Menu";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";
// import "./index.css";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Gallery />
//       <Menu />
//       <Testimonials />
//       <Footer />
//     </>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Gallery from "./components/gallery";
import MenuQR from "./components/menu";         // <-- Scan for Menu QR section
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import FloatingSocial from "./components/floatingsocial"; // <-- Social icons on the side
// import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Gallery />
        <MenuQR />
      <Footer />
      <FloatingSocial />
    </>
  );
}

export default App;
