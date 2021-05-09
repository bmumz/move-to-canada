import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ title, options, placeholder, name, onBlur }) => {
  return (
    <span className='form-input'>
      <select
        aria-label={title}
        defaultValue={placeholder}
        name={name}
        onBlur={onBlur}
      >
        <option disabled>{placeholder}</option>
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
  onBlur: PropTypes.func.isRequired,
};

export default Dropdown;
