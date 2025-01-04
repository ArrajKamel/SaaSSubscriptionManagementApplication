import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './NavbarPremium.css';
import { useAuth } from '../../Context/useAuth';

const NavBar: React.FC = () => {
  const { isLoggedIn, user, logout, isPremium } = useAuth();

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
      {!isPremium() && (
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
    <nav className={isPremium() ? 'navbar-premium' : 'navbar'}>
      <div className={isPremium() ? 'navbar-premium-brand' : 'navbar-brand'}>
        <Link to={'/'} className="navbar-brand-link" >Subscription Management Application</Link>
      </div>
      <ul className={isPremium() ? 'navbar-premium-links' : 'navbar-links'}>
        {authLinks}
        {isPremium() && (
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
