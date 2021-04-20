import React from "react";

const Textarea = ({ title, className }) => {
  return (
    <span className='form-input'>
      <textarea
        aria-label={title}
        placeholder={title}
        className={className}
        spellCheck='true'
        rows={7}
        required
      />
    </span>
  );
};

export default Textarea;
