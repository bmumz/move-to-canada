import React from "react";
import Navbar from "../nav/Navbar";
import Seo from "../Seo";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const Header = ({ pageName }) => {
  const { phone } = useSiteMetadata();

  return (
    <div>
      <Seo pageName={pageName} />
      <div className='header'>
        <div className='header__company-info'>
          <img
            src='https://sjfltc.com/wp-content/uploads/2016/10/logo-placeholder.jpg'
            alt='Logo placeholder'
          />
          <div className='header__tel'>
            <h1>{phone}</h1>
            <span>Call for a FREE consultation!</span>
          </div>
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default Header;
