import React from "react";
import homeData from "../../data/home-data";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const HomeBlurb = () => {
  const { title } = useSiteMetadata();

  return (
    <div className='home__blurb'>
      <div>
        <h2>{homeData.blurbTitle}</h2>
      </div>

      <div>
        <h2>{title}</h2>
        <span>{homeData.blurb}</span>
      </div>
    </div>
  );
};

export default HomeBlurb;
