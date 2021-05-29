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
      <Link to="/services">
        <div className="services__ind--container">
          <div className="services__img-container">
            <h3 className="services__title">Buying a Home</h3>
            <StaticImage
              src="../../images/services/first-row/1 Buying a Home.jpg"
              alt="Buying a Home"
              className="services__img"
            />
            <span className="services__overlay"></span>
          </div>
          <div className="services__img-container">
            <h3 className="services__title">Personal and Family Immigration</h3>
            <StaticImage
              src="../../images/services/first-row/2 Personal & Family Immigration.jpg"
              alt="Personal and Family Immigration"
              className="services__img"
            />
            <span className="services__overlay"></span>
          </div>
          <div className="services__img-container">
            <h3 className="services__title">Business Relocation</h3>
            <StaticImage
              src="../../images/services/first-row/3 Business Relocation.jpg"
              alt="Business Relocation"
              className="services__img"
            />
            <span className="services__overlay"></span>
          </div>
        </div>
        <div className="services__ind--container">
          <div className="services__img-container">
            <h3 className="services__title">Corporate Law</h3>
            <StaticImage
              src="../../images/services/third-row/1 Corporate Law.jpg"
              alt="Corporate Law"
              className="services__img"
            />
            <span className="services__overlay"></span>
          </div>
          <div className="services__img-container">
            <h3 className="services__title">Moving Money to Canada</h3>
            <StaticImage
              src="../../images/services/third-row/2 Moving Money to Canada.jpg"
              alt="Moving Money to Canada"
              className="services__img"
            />
            <span className="services__overlay"></span>
          </div>
          <div className="services__img-container">
            <h3 className="services__title">Other Services</h3>
            <StaticImage
              src="../../images/services/third-row/3 Other Services.jpg"
              alt="Other Services"
              className="services__img"
            />
            <span className="services__overlay"></span>
          </div>
        </div>
      </Link>
    </section>
  );
};

ServicesSection.propTypes = {
  heading: PropTypes.bool,
};

export default ServicesSection;
