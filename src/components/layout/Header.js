import React from "react";
import Navbar from "../nav/Navbar";
import Seo from "../Seo";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

import { StaticImage } from "gatsby-plugin-image";

const Header = ({ pageName }) => {
  const { phone } = useSiteMetadata();

  return (
    <div>
      <Seo pageName={pageName} />
      <div className='header'>
        <Navbar />

        <div className='header__company-info'>
          <span className='header__logo'>
            <StaticImage
              src='../../images/move-to-canada.png'
              alt='The Move to Canada Team Logo with maple leaf'
              width={300}
            />
          </span>

          <div className='header__tel'>
            <h1>{phone}</h1>
            <span>Call for a FREE consultation!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
