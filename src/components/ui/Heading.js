import React from "react";
import PropTypes from "prop-types";

const Heading = ({ children, title, className }) => {
  return (
    <div className={className || "heading__center"}>
      <h2 className='heading__grey'>{title}</h2>
      <h2 className='heading__red heading__bold heading__underline'>
        <span>{children}</span>
      </h2>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Heading;
