import React from 'react';

const Textarea = ({ title, className }) => {
  return (
    <textarea
      aria-label={title}
      placeholder={title}
      className={className}
      spellCheck='true'
      rows='10'
      required
    />
  );
};

export default Textarea;
