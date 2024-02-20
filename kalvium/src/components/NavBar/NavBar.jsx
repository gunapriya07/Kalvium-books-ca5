import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <Link to='/'>
          <img 
            src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg" 
            alt=""
            className='logo'
          />
        </Link>
      </div>
      <div className='nav-links-container'>
        <ul>
          <h3>
            <Link to='/Home' className='link'>Home</Link>
          </h3>
          <h3>
            <Link to='/Books' className='link'>Books</Link>
          </h3>
          <h3>
            <Link to='/RegisterPage' className='link'>Register</Link> 
          </h3>
          <h3>
          🛒 {/* Cart emoji */}
          </h3>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
