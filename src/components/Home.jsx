import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to DevPanel</h1>
        <p className="home-subtitle">Your ultimate solution for managing software development projects</p>
        <button className="home-button">Get Started</button>
      </header>

      <section className="home-features">
        <div className="feature-card">
          <h3 className="feature-title">Project Management</h3>
          <p className="feature-description">Keep track of your team's progress with ease.</p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Team Collaboration</h3>
          <p className="feature-description">Communicate and collaborate with your team seamlessly.</p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Analytics</h3>
          <p className="feature-description">Get insights into project performance with built-in analytics.</p>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2024 DevPanel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
