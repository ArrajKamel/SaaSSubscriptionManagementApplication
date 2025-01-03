import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  console.log("home page rendered!!");
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to MyApp</h1>
        <p className="home-description">
          MyApp is your go-to platform for managing tasks, connecting with your team, and achieving your goals efficiently. Join us today and start your journey toward productivity and success!
        </p>
        <Link to="/login" className="home-get-started">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
