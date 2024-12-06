// Home.js

import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
 
      <header className="home-header">
        <h1 className="home-title">
          Bienvenido a <strong>BikiniBottom</strong>
        </h1>
        <p className="home-subtitle">
          Somos una empresa especializada en desarrollo de software, con un enfoque particular en soluciones web innovadoras. Ofrecemos servicios de outsourcing que combinan talento técnico y creatividad para llevar tus proyectos al siguiente nivel, garantizando calidad, eficiencia y resultados excepcionales.
        </p>
        <button className="home-button">Empieza ahora</button>
      </header>

      <section className="home-features">
        <div className="feature-card">
          <h3 className="feature-title">Gestión de Proyectos</h3>
          <p className="feature-description">
            Haz un seguimiento del progreso de tu equipo con facilidad.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Colaboración en Equipo</h3>
          <p className="feature-description">
            Comunícate y colabora con tu equipo de forma fluida.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Análisis</h3>
          <p className="feature-description">
            Obtén información sobre el rendimiento de tus proyectos con análisis integrados.
          </p>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2024 BikiniBottom. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
