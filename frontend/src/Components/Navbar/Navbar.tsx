import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './NavbarPremium.css';
import { useAuth } from '../../Context/useAuth';
import { json } from 'stream/consumers';

const NavBar: React.FC = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [premiumUI, setPremiumUI] = useState(false);

  useEffect(() => {
    const userUnparced = localStorage.getItem("user");

    setPremiumUI(userUnparced !== null ? JSON.parse(userUnparced).isPremium : false)
  }, [localStorage.getItem("user")])

  const commonLinks = (
    <>
      <li><Link to="/" className="navbar-link">Home</Link></li>
    </>
  );

  const authLinks = isLoggedIn() ? (
    <>
      <li><a className="navbar-welcome">Welcome {user?.userName}</a></li>
      {commonLinks}
      <li><Link to="/" className="navbar-link" onClick={logout}>Logout</Link></li>
      <li><Link to="sub" className="navbar-link">Sub Page</Link></li>
      {!premiumUI && (
        <li><Link to="/premiumPlan" className="navbar-link">Get Premium</Link></li>
      )}
    </>
  ) : (
    <>
      {commonLinks}
      <li><Link to="register" className="navbar-link">Register</Link></li>
      <li><Link to="login" className="navbar-link">Login</Link></li>
    </>
  );

  return (
    <nav className={premiumUI ? 'navbar-premium' : 'navbar'}>
      <div className={premiumUI ? 'navbar-premium-brand' : 'navbar-brand'}>
        <Link to={'/'} className="navbar-brand-link" >Subscription Management Application</Link>
      </div>
      <ul className={premiumUI ? 'navbar-premium-links' : 'navbar-links'}>
        {authLinks}
        {premiumUI && (
          <li>
            <Link to="/premium" className="navbar-premium-link-button">
              Premium
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
