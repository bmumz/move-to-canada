import React from "react";
import PropTypes from "prop-types";

const Heading = ({ children, color, size, weight }) => {
  return (
    <h1 className={`heading__${color} heading__${size} heading__${weight}`}>
      {children}
    </h1>
  );
};

Heading.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
  weight: PropTypes.string,
};

export default Heading;
