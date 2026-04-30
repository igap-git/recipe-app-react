import React, { useRef, useState, useEffect } from 'react';
import './DropDownMenu.css';
import arrowDown from '../../assets/icons/keyboard_arrow_down.svg';
import arrowUp from '../../assets/icons/keyboard_arrow_up.svg';

export default function DropDownMenu({
  children,
  items = [],
  isOpen,
  onToggle,
  variant,
  selectedValue,
  onItemClick,
  type,
}) {
  const menuRef = useRef(null);

  const selectedLabel = items.find(
    (item) => item.value === selectedValue
  )?.label;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (isOpen) onToggle?.();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onToggle?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onToggle]);

  return (
    <>
      <div
        ref={menuRef}
        className={`drop-down-menu ${
          variant ? `drop-down-menu-${variant}` : ''
        }`}
      >
        <div
          className={`drop-down-menu-button-content ${
            variant ? `drop-down-menu-button-content-${variant}` : ''
          }`}
          onClick={onToggle}
        >
          <div
            className={`drop-down-text${
              variant ? `drop-down-text-${variant}` : ''
            }`}
          >
            {selectedValue && (
              <div className="selected-value">
                {selectedLabel || selectedValue}
              </div>
            )}

            <label>{children}</label>
          </div>

          <img
            src={isOpen ? arrowUp : arrowDown}
            className="icon"
            alt="menu icon"
          />
        </div>

        <ul
          className={`menu ${isOpen ? 'open' : ''} ${
            variant ? `menu-${variant}` : ''
          }`}
        >
          {items.map((item, index) => (
            <li
              key={index}
              className={item.value === selectedValue ? 'active' : ''}
              onClick={() => onItemClick?.(item.value)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
