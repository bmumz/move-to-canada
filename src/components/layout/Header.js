import React, { useEffect } from "react";
import Navbar from "./nav/Navbar";
import Seo from "../Seo";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import PropTypes, { any } from "prop-types";

const Header = ({ pageName, tags }) => {
  const { phone, phoneAlt } = useSiteMetadata();

  useEffect(() => {
    const header = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 70) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }, []);
  return (
    <>
      <Seo pageName={pageName} tags={tags} />
      <div className="header">
        <Navbar />

        <div className="header__company-info">
          <div className="header__logo">
            <Link to="/">
              <StaticImage
                src="../../images/move-to-canada.png"
                alt="The Move to Canada Team Logo with maple leaf"
                layout="fixed"
                width={250}
              />
            </Link>
          </div>

          <div className="header__tel">
            <h1>{phoneAlt}</h1>
            <h2>({phone})</h2>
            <h3>Call for a FREE consultation!</h3>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  tags: PropTypes.array,
  pageName: any.isRequired,
};
export default Header;
