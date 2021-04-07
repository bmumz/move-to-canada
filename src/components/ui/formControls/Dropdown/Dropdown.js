import React from 'react';
import { Inquiry } from './inquiry';

const Dropdown = ({ title, className }) => {
  return (
    <select aria-label={title} className={className}>
      <option value='Inquiry Type' disabled selected>
        Inquiry Type
      </option>
      {Inquiry.map((inquiry, index) => (
        <option key={index} value={inquiry}>
          {inquiry}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
