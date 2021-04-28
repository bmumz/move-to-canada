import React from "react";
import PropTypes from "prop-types";

const FooterCol = ({ children, title }) => (
  <div className='footer__col'>
    {title ? <h4>{title}</h4> : ""}

    {children}
  </div>
);

FooterCol.propTypes = {
  title: PropTypes.string,
};

export default FooterCol;
