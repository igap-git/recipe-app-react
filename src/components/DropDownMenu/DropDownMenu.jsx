import React, { useRef, useState } from 'react';
import './DropDownMenu.css';
import arrowDown from '../../assets/icons/keyboard_arrow_down.svg';
import arrowUp from '../../assets/icons/keyboard_arrow_up.svg';

export default function DropDownMenu({
  children,
  items = [],
  isOpen,
  onToggle,
  variant,
}) {
  return (
    <div
      className={`drop-down-menu ${variant ? `drop-down-menu-${variant}` : ''}`}
    >
      <div
        className={`drop-down-menu-button-content ${variant ? `drop-down-menu-button-content-${variant}` : ''} `}
        onClick={onToggle}
      >
        <label>{children}</label>
        <img
          src={isOpen ? arrowUp : arrowDown}
          className="icon"
          alt="menu icon"
        />
      </div>

      <ul
        className={`menu ${isOpen ? 'open' : ''} ${variant ? `menu-${variant}` : ''}`}
      >
        {items.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
}
