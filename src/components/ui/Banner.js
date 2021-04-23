import React from "react";
import PropTypes from "prop-types";

const Banner = ({ children, className }) => {
  return <div className={className || "banner"}>{children}</div>;
};

Banner.propTypes = {
  className: PropTypes.string,
};

export default Banner;
