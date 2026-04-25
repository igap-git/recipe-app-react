import React from 'react';
import './Button.css';

export default function Button({ children, variant = 'primary' }) {
  return <button className={`btn-${variant}`}>{children}</button>;
}
