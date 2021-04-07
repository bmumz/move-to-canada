import React from 'react';

const Input = ({ label, type, title, className }) => {
  return (
    <span>
      <p>{label}</p>
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
