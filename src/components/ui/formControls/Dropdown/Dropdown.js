import React from "react";

const Dropdown = ({ title, className, options, placeholder }) => {
  return (
    <span className='form-input'>
      <select aria-label={title} className={className}>
        <option value={placeholder} disabled selected>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </span>
  );
};

export default Dropdown;
