import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

// Define Navbar component
const Navbar = () => {
  return (
    // Navbar container
    <div className='navbar'>
      {/* Logo container */}
      <div className='logo-container'>
        {/* Logo image with link to home page */}
        <Link to='/'>
          <img 
            src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg" 
            alt=""
            className='logo'
          />
        </Link>
      </div>
      {/* Navigation links container */}
      <div className='nav-links-container'>
        <ul>
          {/* Home link */}
          <h3>
            <Link to='/Home' className='link'>Home</Link>
          </h3>
          {/* Books link */}
          <h3>
            <Link to='/Books' className='link'>Books</Link>
          </h3>
          {/* Register link */}
          <h3>
            <Link to='/RegisterPage' className='link'>Register</Link> 
          </h3>
          {/* Cart emoji */}
          <h3 className='emoji'>
            🛒
          </h3>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
