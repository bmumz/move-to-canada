import React from "react";

import PropTypes from "prop-types";

const PageIntro = ({ blurb, heading, path, cta, children, className }) => (
  <div className={className ? `'page-intro ${className}` : "page-intro"}>
    <div className="page-intro__container">
      <div className="page-intro__blurb">
        {heading}

        {blurb}

        {cta && (
          <a className="button__red" href={path}>
            {cta}
          </a>
        )}
      </div>
    </div>

    {children}
  </div>
);

PageIntro.propTypes = {
  blurb: PropTypes.element.isRequired,
  blurbHeading: PropTypes.string,
  heading: PropTypes.element.isRequired,
  path: PropTypes.string,
  cta: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
};

export default PageIntro;
