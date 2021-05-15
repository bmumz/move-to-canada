import React, { useState } from "react";
import { Pages } from "../../../data/pages-data";
import Banner from "../../ui/Banner";
import LinkBuilder from "./LinkBuilder";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const showNavMenu = () => {
    setNavMenu(!navMenu);
  };

  return (
    <>
      <div className="button__hamburger">
        <div className={`navbar__button ${navMenu ? "open" : "closed"}`}>
          <button
            aria-label="hamburger-button"
            onClick={showNavMenu}
            className="button__animation"
          />
        </div>
      </div>
      <Banner className={`navbar__menu ${navMenu ? "mobile" : "desktop"}`}>
        <nav id="navbar" className="header2">
          <LinkBuilder collection={Pages} />
        </nav>
      </Banner>
    </>
  );
};

export default Navbar;
