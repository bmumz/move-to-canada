import React from "react";
import PropTypes from "prop-types";

const Heading = ({ children, color, size, weight, align }) => {
  return (
    <h1
      className={`heading__${color} heading__${size} heading__${weight} heading__${align}`}
    >
      {children}
    </h1>
  );
};

Heading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  align: PropTypes.string,
};

export default Heading;
