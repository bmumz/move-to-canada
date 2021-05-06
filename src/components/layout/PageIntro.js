import React from "react";
import PropTypes from "prop-types";

const PageIntro = ({ blurb, blurbHeading, heading, path, children }) => (
  <div className='page-intro'>
    <div className='page-intro__blurb'>
      {heading}
      <span>
        {blurbHeading && <h4>{blurbHeading}</h4>}
        <p>{blurb}</p>
      </span>
      <a className='button__red' href={path}>
        Learn more
      </a>
    </div>
    {children}
  </div>
);

PageIntro.propTypes = {
  blurb: PropTypes.string.isRequired,
  blurbHeading: PropTypes.string,
  heading: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default PageIntro;
