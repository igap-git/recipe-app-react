import React, { useRef, useState } from 'react';
import './DropDownMenu.css';
import arrowDown from '../../assets/icons/keyboard_arrow_down.svg';
import arrowUp from '../../assets/icons/keyboard_arrow_up.svg';

export default function DropDownMenu({
  children,
  items = [],
  isOpen,
  onToggle,
}) {
  return (
    <div className="drop-down-menu">
      <div className="drop-down-menu-button-content" onClick={onToggle}>
        <label>{children}</label>
        <img
          src={isOpen ? arrowUp : arrowDown}
          className="icon"
          alt="menu icon"
        />
      </div>

      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        {items.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
}
