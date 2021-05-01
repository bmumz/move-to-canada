import React from "react";
import Banner from "../../ui/Banner";
import FooterCol from "./FooterCol";
import BuildLinks from "../nav/BuildLinks";
import { useSiteMetadata } from "../../../hooks/use-site-metadata";
import { LegalPages, Pages } from "../nav/pages";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  const { phone, title, email, website, copyright } = useSiteMetadata();

  return (
    <section>
      <h2 className='heading__black '>Get the help you deserve!</h2>

      <Banner>
        <h1 className='heading__bold'>{phone}</h1>
      </Banner>

      <h2 className='heading__center heading__black '>
        Call now for a free consultation!
      </h2>

      <p className='footer__disclaimer'>
        We might not be able to handle all types of cases due to expertise and
        other various reasons.
      </p>

      <footer>
        <div className='footer__content'>
          <FooterCol>
            <StaticImage
              src='../../../images/move-to-canada.png'
              alt='The Move to Canada Team Logo with maple leaf'
              layout='fixed'
              width={250}
              className='footer__img'
            />
          </FooterCol>

          <FooterCol title='More about our company'>
            <p>
              {title} offers comprehensive, full service to help people from all
              around the world buy real estate and move to Canada.
            </p>
          </FooterCol>

          <FooterCol title={`${title}`}>
            <p>{phone}</p>
            <p>1-800-321-6683</p>
            <p> {email}</p>
            <p> {website}</p>
          </FooterCol>

          <FooterCol title='Page Directory'>
            <div className='footer__directory'>
              <span>
                <BuildLinks collection={Pages} />
              </span>

              <span className='footer__legal'>
                <BuildLinks collection={LegalPages} />
              </span>
            </div>
          </FooterCol>
        </div>
        <span className='footer__copyright'>
          © {copyright} {title} Inc., All Rights Reserved
        </span>
      </footer>
    </section>
  );
};

export default Footer;
