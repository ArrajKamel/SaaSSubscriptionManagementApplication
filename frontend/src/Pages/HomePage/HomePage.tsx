import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="home-hero">
        <h1 className="home-title">Welcome to Subscription Manager</h1>
        <p className="home-description">
          Your all-in-one solution to manage subscriptions, track expenses, and take control of your finances.
        </p>
        <div className="home-actions">
          <Link to="/register" className="home-button primary-button">Get Started</Link>
          <Link to="/premium" className="home-button secondary-button">Explore Premium</Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="home-features">
        <h2 className="features-title">Why Choose Subscription Manager?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Track Subscriptions</h3>
            <p>Add, update, or remove subscriptions effortlessly. Stay notified about upcoming payments.</p>
          </div>
          <div className="feature-card">
            <h3>Analyze Expenses</h3>
            <p>Visualize your spending with detailed charts and graphs, categorized by type and frequency.</p>
          </div>
          <div className="feature-card">
            <h3>One-Click Cancellations</h3>
            <p>Cancel unwanted subscriptions instantly with our premium service.</p>
          </div>
          <div className="feature-card">
            <h3>Custom Alerts</h3>
            <p>Set personalized alerts for price changes, unused services, and upcoming renewals.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="home-cta">
        <h2 className="cta-title">Ready to Take Control?</h2>
        <p className="cta-text">
          Whether you're a casual user or a power manager, Subscription Manager has a plan for you. Sign up today and experience the convenience of streamlined subscription management.
        </p>
        <Link to="/register" className="home-button primary-button">Get Started Now</Link>
      </div>
    </div>
  );
};

export default HomePage;
