import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ title, options, placeholder }) => {
  return (
    <span className='form-input'>
      <select aria-label={title}>
        <option value={placeholder} disabled>
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

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Dropdown;
