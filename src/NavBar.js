import React from 'react';
import './navbar.css';
import logo from './utils/logo.png';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='logo__container'>
        <img src={logo} alt='logo' />
      </div>
    </div>
  );
};

export default NavBar;
