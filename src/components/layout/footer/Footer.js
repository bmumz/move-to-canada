import React from "react";
import FooterBanner from "./FooterBanner";
import FooterCol from "./FooterCol";
import BuildLinks from "../nav/LinkBuilder";
import { useSiteMetadata } from "../../../hooks/use-site-metadata";
import { LegalPages, Pages } from "../../../data/pages-data";
import { StaticImage } from "gatsby-plugin-image";
import footerData from "../../../data/footer-data";
import PropTypes from "prop-types";

const Footer = ({ banner }) => {
  const { title, copyright } = useSiteMetadata();

  const contactData = (
    <div className="footer__contact">
      {Object.values(footerData).map((m, i) => (
        <span key={i}>
          <span className="footer__contact-row1">
            {m.icon}

            {m.path ? <a href={m.path}>{m.title}</a> : <p>{m.title}</p>}
          </span>

          {m.subtitle && <p className="footer__contact-row2">{m.subtitle}</p>}
        </span>
      ))}
    </div>
  );
  return (
    <section>
      {banner && <FooterBanner />}
      <footer>
        <div className="footer__content">
          <FooterCol>
            <StaticImage
              src="../../../images/move-to-canada.png"
              alt="The Move to Canada Team Logo with maple leaf"
              layout="fixed"
              width={250}
              className="footer__img"
            />
          </FooterCol>

          <FooterCol title="More about our company">
            <p>
              {title} offers comprehensive, full service to help people from all
              around the world buy real estate and move to Canada.
            </p>
          </FooterCol>
          <FooterCol title={title}>{contactData}</FooterCol>

          <FooterCol title="Page Directory">
            <div className="footer__directory">
              <span>
                <BuildLinks collection={Pages} />
              </span>

              <span className="footer__legal">
                <BuildLinks collection={LegalPages} />
              </span>
            </div>
          </FooterCol>
        </div>
        <span className="footer__copyright">
          © {copyright} {title} Inc., All Rights Reserved
        </span>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  banner: PropTypes.bool.isRequired,
};

export default Footer;
