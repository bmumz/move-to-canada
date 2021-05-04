import React from "react";
import PropTypes from "prop-types";

const Heading = ({ children, title }) => {
  return (
    <div className='heading__center'>
      <h2 className='heading__grey'>{title}</h2>
      <h2 className='heading__red heading__bold heading__underline'>
        <span>{children}</span>
      </h2>
    </div>
  );
};

Heading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  align: PropTypes.string,
};

export default Heading;
