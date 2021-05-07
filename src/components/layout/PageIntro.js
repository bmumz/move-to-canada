import React from "react";
import PropTypes from "prop-types";

const PageIntro = ({ blurb, heading, path, cta, children }) => (
  <div className='page-intro'>
    <div className='page-intro__blurb'>
      {heading}

      {blurb}

      <a className='button__red' href={path}>
        {cta}
      </a>
    </div>
    {children}
  </div>
);

PageIntro.propTypes = {
  blurb: PropTypes.element.isRequired,
  blurbHeading: PropTypes.string,
  heading: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default PageIntro;
