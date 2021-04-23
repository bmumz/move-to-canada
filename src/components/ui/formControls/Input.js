import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, title }) => {
  return (
    <span className='form-input'>
      <input type={type} aria-label={title} placeholder={title} required />
    </span>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Input;
