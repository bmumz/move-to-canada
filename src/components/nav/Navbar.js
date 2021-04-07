import React, { useState } from "react";
import { Pages } from "./pages";
import Banner from "../ui/Banner";
import { Link } from "gatsby";
import Button from "../ui/Button";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const showNavMenu = () => setNavMenu(!navMenu);

  return (
    <div>
      <div className="button__hamburger">
        <div className={`navbar__button ${navMenu ? "open" : "closed"}`}>
          <Button
            title=""
            onClick={showNavMenu}
            className="button__animation"
          />
        </div>
      </div>
      <Banner className={`banner__nav ${navMenu ? "open" : "closed"}`}>
        <nav className="nav">
          {Pages.map((page, index) => (
            <Link key={index} className="nav__item" to={page.path}>
              {page.title}
            </Link>
          ))}
        </nav>
      </Banner>
    </div>
  );
};

export default Navbar;
