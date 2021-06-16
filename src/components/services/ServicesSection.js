import React from "react";
import Heading from "../ui/Heading";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const ServicesSection = ({ heading }) => {
  const { title } = useSiteMetadata();

  return (
    <section className="services">
      {heading && <Heading title={title}>Services</Heading>}

      <div className="services__ind--container">
        <div className="services__img-container">
          <a href="/services/buying-a-home" className="services__title">
            <h3>Buying a Home</h3>
          </a>
          <StaticImage
            src="../../images/services/first-row/1 Buying a Home.jpg"
            alt="Buying a Home"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
        <div className="services__img-container">
          <a
            href="/services/personal-and-family-immigration"
            className="services__title"
          >
            <h3>Personal and Family Immigration</h3>
          </a>
          <StaticImage
            src="../../images/services/first-row/2 Personal & Family Immigration.jpg"
            alt="Personal and Family Immigration"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
        <div className="services__img-container">
          <a href="/services/business-relocation" className="services__title">
            <h3>Business Relocation</h3>
          </a>

          <StaticImage
            src="../../images/services/third-row/1 Business Relocation.jpg"
            alt="Business Relocation"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
      </div>
      <div className="services__ind--container">
        <div className="services__img-container">
          <a href="/services/real-estate-law" className="services__title">
            <h3>Real Estate Law</h3>
          </a>

          <StaticImage
            src="../../images/services/second-row/3 Real Estate Law.jpg"
            alt="Real Estate Law"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
        <div className="services__img-container">
          <a href="/services/international-banking" className="services__title">
            <h3>International Banking</h3>
          </a>

          <StaticImage
            src="../../images/services/third-row/2 Moving Money to Canada.jpg"
            alt="Moving Money to Canada"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
        <div className="services__img-container">
          <a href="/services/additional-services" className="services__title">
            <h3>Additional Services</h3>
          </a>

          <StaticImage
            src="../../images/services/third-row/3 Other Services.jpg"
            alt="Other Services"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
      </div>
    </section>
  );
};

ServicesSection.propTypes = {
  heading: PropTypes.bool,
};

export default ServicesSection;
