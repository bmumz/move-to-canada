import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ title }) => {
  return (
    <span className='form-input'>
      <textarea
        aria-label={title}
        placeholder={title}
        spellCheck='true'
        rows={5}
        required
      />
    </span>
  );
};

Textarea.prototypes = {
  title: PropTypes.string.isRequired,
};
export default Textarea;
