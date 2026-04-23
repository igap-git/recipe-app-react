import React, { useRef, useState } from 'react';
import './DropDownMenu.css';
import icon from '../../assets/icons/keyboard_arrow_down.svg';

export default function DropDownMenu({ children, items = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={menuRef} className="drop-down-menu">
      <div className="drop-down-menu-button-content" onClick={toggleMenu}>
        <label>{children}</label>
        <img src={icon} className="icon" alt="menu icon" />
      </div>

      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        {items.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
}
