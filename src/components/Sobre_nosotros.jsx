import React from 'react';
import './styles/Sobre_nosotros.css';

const SobreNosotros = () => {
  return (
    <div className="aboutus-container">
      {/* Header Section */}
      <header className="aboutus-header">
        <h1 className="aboutus-title">Sobre Nosotros</h1>
        <p className="aboutus-subtitle">
          Creemos en el poder de la tecnología para cambiar vidas y transformar ideas en realidad.
        </p>
      </header>

      {/* Mission Section */}
      <section className="aboutus-mission">
        <h2 className="section-title">Nuestra Misión</h2>
        <p className="section-description">
          En BikiniBottom, nuestra misión es crear soluciones innovadoras que permitan a las personas y
          equipos alcanzar su máximo potencial. Nos comprometemos a desarrollar herramientas que
          simplifiquen procesos y fomenten la colaboración.
        </p>
      </section>

      {/* Team Section */}
      <section className="aboutus-team">
        <h2 className="section-title">Conoce a Nuestro Equipo</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="John Doe"
              className="team-member-image"
            />
            <h3 className="team-member-name">John Doe</h3>
            <p className="team-member-role">CEO & Fundador</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Jane Smith"
              className="team-member-image"
            />
            <h3 className="team-member-name">Jane Smith</h3>
            <p className="team-member-role">CTO</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Sara Lee"
              className="team-member-image"
            />
            <h3 className="team-member-name">Sara Lee</h3>
            <p className="team-member-role">Líder de Desarrollo</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="aboutus-footer">
        <p>© 2024 DevPanel. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default SobreNosotros;
