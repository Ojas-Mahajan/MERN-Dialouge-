import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function MenuPage() {
  useEffect(() => { AOS.init({ duration: 400, once: false }) }, [])

  return (
    <main style={{ minHeight: '70vh' }}>
      <section className="menu-section" id="menu-section">
        <h2 className="about-heading" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="100">
          Our Menu
        </h2>
        <p className="menu-description">
          Explore our handcrafted menu featuring <strong>Continental, Mexican, North Indian, Chinese</strong> and other
          global flavors...
        </p>
        <div className="menu-category">
          <h3>🍽 Food Menu</h3>
          <div className="menu-grid">
            
            <img src="/assets/Images/MENU1.jpg" alt="Continental Cuisine" className="modal-img menu-photo" id="continental" />
            <img src="/Images/MENU3.jpg" alt="Mexican" className="modal-img menu-photo" id="mexican" />
            <img src="/Images/MENU4.jpg" alt="Chinese" className="modal-img menu-photo" id="chinese" />
            <img src="/Images/MENU5.jpg" alt="Traditional Indian Cuisine" className="modal-img menu-photo" id="north-indian" />
            <img src="/Images/MENU2.jpg" alt="American Classics" className="modal-img menu-photo" id="american" />
          </div>
        </div>
        <div className="menu-category" id="beverages">
          <h3>🍹 Beverages</h3>
          <div className="menu-grid">
            <img src="/Images/beveragesMenu.jpg" alt="Beverages" className="modal-img menu-photo" />
          </div>
        </div>
        <div className="menu-category" id="menu-qr">
          <h3>📲 Scan for Full Menu</h3>
          <div className="menu-grid">
            <img src="/Images/Menu QR .png" alt="Dialogue Cafe Full Menu QR" className="menu-photo" />
          </div>
        </div>
      </section>
    </main>
  )
}
