import React, { useEffect } from "react";
import Navbar from "./nav/Navbar";
import Seo from "../Seo";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Header = ({ pageName }) => {
  const { phone } = useSiteMetadata();

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
      <Seo pageName={pageName} />
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
            <h1>1-844-CAN-MOVE</h1>
            <h2>({phone})</h2>
            <h3>Call for a FREE consultation!</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
