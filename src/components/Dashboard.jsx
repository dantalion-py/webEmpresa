import React from 'react';
import './styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">DevPanel</h2>
        <ul className="sidebar-menu">
          <li className="menu-item">Overview</li>
          <li className="menu-item">Projects</li>
          <li className="menu-item">Team</li>
          <li className="menu-item">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h1 className="header-title">Dashboard</h1>
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </header>

        <section className="dashboard-section">
          <div className="stats-grid">
            <div className="stats-card">
              <h3 className="stats-title">Active Projects</h3>
              <p className="stats-value">12</p>
            </div>
            <div className="stats-card">
              <h3 className="stats-title">Pending Tasks</h3>
              <p className="stats-value">24</p>
            </div>
            <div className="stats-card">
              <h3 className="stats-title">Team Members</h3>
              <p className="stats-value">8</p>
            </div>
            <div className="stats-card">
              <h3 className="stats-title">New Messages</h3>
              <p className="stats-value">5</p>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <h2 className="section-title">Recent Activities</h2>
          <div className="activity-list">
            <div className="activity-item">
              <p><strong>John</strong> added a new project: *API Redesign*</p>
              <span className="activity-time">2 hours ago</span>
            </div>
            <div className="activity-item">
              <p><strong>Sarah</strong> completed a task: *Database Migration*</p>
              <span className="activity-time">5 hours ago</span>
            </div>
            <div className="activity-item">
              <p><strong>Mark</strong> joined the team.</p>
              <span className="activity-time">1 day ago</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
