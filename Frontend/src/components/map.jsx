import React from "react";

export default function MapSection() {
  return (
    <section className="map-section" id="location" style={{ margin: "40px 0 0 0" }}>
      <h2
        className="map-heading"
        data-aos="fade-down"
        data-aos-duration="1000"
        style={{
          textAlign: "center",
          fontFamily: "Lobster, cursive",
          marginBottom: 32,
          marginTop: 8,
        }}
      >
        Find Us
      </h2>
      <div className="map-container" style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.2744051096614!2d76.77191297431756!3d30.726465684614987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedf8df07ecff%3A0x887b4411fd4e7124!2sDialogue%20Cafe!5e0!3m2!1sen!2sin!4v1720510141785!5m2!1sen!2sin"
          width="270"
          height="160"
          style={{
            border: 0,
            borderRadius: "12px",
            boxShadow: "0 2px 16px #0001"
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dialogue Cafe Location"
        ></iframe>
      </div>
    </section>
  );
}
