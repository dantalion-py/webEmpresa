import React from 'react';
import './styles/Sobre_nosotros.css';

const Sobre_nosotros = () => {
  return (
    <div className="aboutus-container">
      <header className="aboutus-header">
        <h1 className="aboutus-title">About Us</h1>
        <p className="aboutus-subtitle">We're passionate about building software solutions that matter.</p>
      </header>

      <section className="aboutus-mission">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-description">
          At DevPanel, we strive to create innovative tools that help teams collaborate and succeed in software development. 
          Our mission is to make complex projects manageable with intuitive solutions that save time and increase productivity.
        </p>
      </section>

      <section className="aboutus-team">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="team-member-image"/>
            <h3 className="team-member-name">John Doe</h3>
            <p className="team-member-role">CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="team-member-image"/>
            <h3 className="team-member-name">Jane Smith</h3>
            <p className="team-member-role">CTO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="team-member-image"/>
            <h3 className="team-member-name">Sara Lee</h3>
            <p className="team-member-role">Lead Developer</p>
          </div>
        </div>
      </section>

      <footer className="aboutus-footer">
        <p>© 2024 DevPanel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Sobre_nosotros;
