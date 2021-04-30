import React from "react";
import Banner from "../../ui/Banner";
import Heading from "../../ui/Heading";
import FooterCol from "./FooterCol";
import Paragraph from "../Paragraph";
import BuildLinks from "../../nav/BuildLinks";
import { useSiteMetadata } from "../../../hooks/use-site-metadata";
import { LegalPages, Pages } from "../../nav/pages";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  const { phone, title, email, website, copyright } = useSiteMetadata();

  return (
    <div className='footer'>
      <Heading color='grey' align='center' size='sm'>
        Get the help you deserve!
      </Heading>

      <Banner>
        <span>
          <Heading color='white' size='xl'>
            {phone}
          </Heading>
        </span>
      </Banner>

      <Heading color='grey' align='center' size='sm'>
        Call now for a free consultation!
      </Heading>

      <Paragraph>
        We might not be able to handle all types of cases due to expertise and
        other various reasons.
      </Paragraph>

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
            <Paragraph>
              {title} offers comprehensive, full service to help people from all
              around the world buy real estate and move to Canada.
            </Paragraph>
          </FooterCol>

          <FooterCol title={`${title}`}>
            <Paragraph>{phone}</Paragraph>
            <Paragraph>1-800-321-6683</Paragraph>
            <Paragraph> {email}</Paragraph>
            <Paragraph> {website}</Paragraph>
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
    </div>
  );
};

export default Footer;
