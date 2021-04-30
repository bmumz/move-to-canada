import React, { useState } from "react";
import { Pages } from "./pages";
import Banner from "../ui/Banner";
import BuildLinks from "./BuildLinks";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const showNavMenu = () => setNavMenu(!navMenu);

  return (
    <>
      <div className='button__hamburger'>
        <div className={`navbar__button ${navMenu ? "open" : "closed"}`}>
          <button onClick={showNavMenu} className='button__animation' />
        </div>
      </div>
      <Banner className={`navbar__menu ${navMenu ? "mobile" : "desktop"}`}>
        <nav>
          <BuildLinks collection={Pages} />
        </nav>
      </Banner>
    </>
  );
};

export default Navbar;
