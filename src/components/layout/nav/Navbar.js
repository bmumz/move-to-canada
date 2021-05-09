import React, { useState } from "react";
import { Pages } from "../../../data/pages-data";
import Banner from "../../ui/Banner";
import LinkBuilder from "./LinkBuilder";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const showNavMenu = () => {
    setNavMenu(!navMenu);

    // !navMenu && document.body.classList.add("navbar__lock");

    // navMenu && document.body.classList.remove("navbar__lock");
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
        <nav>
          <LinkBuilder collection={Pages} />
        </nav>
      </Banner>
    </>
  );
};

export default Navbar;
