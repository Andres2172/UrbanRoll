import React from "react";

export default function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          DOMINA LA <span className="hl">CALLE</span>
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px' }}>
          Skates y Scooters de alto rendimiento para el parche en Bogotá. 
          Calidad pro para los que no se detienen.
        </p>
        <button className="btn-main" onClick={() => handleScroll('beneficios')}>
          VER EQUIPAMIENTO
        </button>
      </div>
    </section>
  );
}
