import React, { useState } from "react";
import { Pages } from "./pages";
import Banner from "../ui/Banner";
import { Link } from "gatsby";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const showNavMenu = () => setNavMenu(!navMenu);

  return (
    <div className='navbar'>
      <div className='button__hamburger'>
        <div className={`navbar__button ${navMenu ? "open" : "closed"}`}>
          <button onClick={showNavMenu} className='button__animation' />
        </div>
      </div>
      <Banner className={`navbar__menu ${navMenu ? "mobile" : "desktop"}`}>
        <nav>
          {Pages.map((page, index) => (
            <Link key={index} className='nav__item' to={page.path}>
              {page.title}
            </Link>
          ))}
        </nav>
      </Banner>
    </div>
  );
};

export default Navbar;
