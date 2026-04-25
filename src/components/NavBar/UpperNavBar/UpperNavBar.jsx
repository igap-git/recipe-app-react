import Button from '../../Button/Button';
import React from 'react';
import './UpperNavBar.css';
import login from '../../../assets/icons/login.svg';
import logo from '../../../assets/logo.png';

export default function UpperNavBar() {
  return (
    <div className="upper-nav-bar">
      <img src={logo} className="logo" alt="logo icon" />
      <div className="upper-nav-bar-content">
        <div className="upper-menu-sign-in-content">
          <Button variant="upper-menu-sing-in">Sign In</Button>
          <img src={login} className="icon" alt="login icon" />
        </div>
        <Button variant="upper-menu-sign-up">Sign Up</Button>
      </div>
    </div>
  );
}
