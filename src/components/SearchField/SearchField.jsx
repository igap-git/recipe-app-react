import React from 'react';
import './SearchField.css';

export default function SearchField(props) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className={`input-${props.variant}`}
    />
  );
}
