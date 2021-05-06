import React from "react";

const PageIntro = ({ blurb, heading, path, children }) => (
  <div className='page-intro'>
    <div className='page-intro__blurb'>
      {heading}
      <p>{blurb}</p>

      <a className='button__red' href={path}>
        Learn more
      </a>
    </div>
    {children}
  </div>
);

export default PageIntro;
