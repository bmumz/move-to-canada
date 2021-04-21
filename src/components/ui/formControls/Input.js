import React from "react";

const Input = ({ type, title, className }) => {
  return (
    <span className='form-input'>
      <input
        type={type}
        aria-label={title}
        placeholder={title}
        className={className}
        required
      />
    </span>
  );
};

export default Input;
