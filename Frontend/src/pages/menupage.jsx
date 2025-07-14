import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import MENU1 from '../assets/Images/MENU1.jpg';
import MENU2 from '../assets/Images/MENU2.jpg';
import MENU3 from '../assets/Images/MENU3.jpg';
import MENU4 from '../assets/Images/MENU4.jpg';
import MENU5 from '../assets/Images/MENU5.jpg';
import beveragesMenu from '../assets/Images/beveragesMenu.jpg';
import menuQR from '../assets/Images/Menu QR .png';

const menuImages = [
  { src: MENU1, alt: 'Continental' },
  { src: MENU3, alt: 'Mexican' },
  { src: MENU4, alt: 'Chinese' },
  { src: MENU5, alt: 'North Indian' },
  { src: MENU2, alt: 'American' },
  { src: beveragesMenu, alt: 'Beverages' },
];

function QRMenuModal({ open, onClose, qrImage }) {
  if (!open) return null;
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={closeButtonStyle} onClick={onClose}>×</button>
        <h3 style={qrHeadingStyle}>📲 Scan to View Our Full Menu</h3>
        <img
          src={qrImage}
          alt="Full Menu QR"
          width="200"
          height="200"
          style={qrImageStyle}
        />
      </div>
    </div>
  );
}

function ImageViewerModal({ images, index, onClose, onPrev, onNext }) {
  if (index === null) return null;
  const { src, alt } = images[index];

  return (
    <div style={overlayStyle}>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        padding: '30px 20px',
        maxWidth: '900px',
        width: '90vw',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <button style={closeButtonStyle} onClick={onClose}>×</button>
        <h2 style={{
          color: '#8430b3',
          marginBottom: '18px',
          textAlign: 'center',
          width: '100%',
        }}>
          {alt} 
        </h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: 32,
          }}
        >
          <button onClick={onPrev} style={navButtonStyle}>◀</button>
          <img
            src={src}
            alt={alt}
            style={{
              maxHeight: '65vh',
              maxWidth: '380px',
              borderRadius: 10,
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              margin: '0 16px',
              background: 'white',
              objectFit: 'contain',
              display: 'block'
            }}
          />
          <button onClick={onNext} style={navButtonStyle}>▶</button>
        </div>
      </div>
    </div>
  );
}


export default function MenuPage() {
  const [qrOpen, setQrOpen] = useState(true);
  const [imageIndex, setImageIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 400, once: false });
  }, []);

  const openImageModal = (index) => setImageIndex(index);
  const closeImageModal = () => setImageIndex(null);
  const showPrevImage = () => setImageIndex((imageIndex - 1 + menuImages.length) % menuImages.length);
  const showNextImage = () => setImageIndex((imageIndex + 1) % menuImages.length);

  return (
    <main style={{ minHeight: '70vh' }}>
      <section className="menu-section" id="menu-section">
        <h2 className="about-heading" data-aos="fade-down">
          Our Menu
        </h2>
        <p className="menu-description">
          Explore our handcrafted menu featuring{' '}
          <strong>Continental, Mexican, North Indian, Chinese, American & Beverages</strong>.
        </p>

        <div className="menu-category">
          <h3>📋 Food & Beverages</h3>
          <div
            className="menu-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '24px',
              justifyItems: 'center',
              alignItems: 'start',
              padding: '0 10px',
              marginTop: '20px',
              width: '100%',
              maxWidth: '1400px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            {menuImages.map((img, idx) => (
              <div key={idx} className="menu-item" style={{ textAlign: 'center', width: '100%' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  data-aos="fade-up"
                  onClick={() => openImageModal(idx)}
                  style={{
                    width: '100%',
                    maxWidth: '200px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{
                  marginTop: '10px',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  color: '#7b2ff2',
                  letterSpacing: '0.5px'
                }}>
                  {img.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QRMenuModal open={qrOpen} onClose={() => setQrOpen(false)} qrImage={menuQR} />
      <ImageViewerModal
        images={menuImages}
        index={imageIndex}
        onClose={closeImageModal}
        onPrev={showPrevImage}
        onNext={showNextImage}
      />
    </main>
  );
}

// 🔧 Popup Styles
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.6)',
  zIndex: 1001,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const modalStyle = {
  background: '#fff',
  borderRadius: 16,
  padding: '30px 20px',
  maxWidth: 340,
  width: '90%',
  textAlign: 'center',
  position: 'relative',
  boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
};

const closeButtonStyle = {
  position: 'absolute',
  top: 16,
  right: 16,
  background: '#a259e4',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: 30,
  height: 30,
  fontSize: 20,
  cursor: 'pointer',
  lineHeight: '30px',
};

const qrHeadingStyle = {
  fontFamily: "'Lobster', cursive",
  color: '#8430b3',
  fontSize: '1.7rem',
  marginBottom: 16,
};

const qrImageStyle = {
  borderRadius: 10,
  border: '1px solid #ddd',
};

const navButtonStyle = {
  fontSize: '2rem',
  padding: '8px 14px',
  background: '#8430b3',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
};
