import React from "react";
import Heading from "../ui/Heading";
import servicesData from "../../data/services-data";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

const ServicesSection = ({ heading }) => {
  const { title } = useSiteMetadata();

  return (
    <section className='services'>
      {heading && <Heading title={title}>Services</Heading>}

      <div className='services__container-row1'>
        <div className='services__img-container'>
          <h3 className='services__title'>
            {servicesData.images.firstRow.home}
          </h3>
          <StaticImage
            src='../../images/services/buying-home.jpg'
            alt={servicesData.images.firstRow.home}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h3 className='services__title'>
            {servicesData.images.firstRow.immigration}
          </h3>
          <StaticImage
            src='../../images/services/immigration.jpg'
            alt={servicesData.images.firstRow.immigration}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h3 className='services__title'>
            {servicesData.images.firstRow.businessRelocation}
          </h3>
          <StaticImage
            src='../../images/services/business-relocation.jpg'
            alt={servicesData.images.firstRow.businessRelocation}
          />
          <span className='services__overlay'></span>
        </div>

        <div className='services__img-container'>
          <h3 className='services__title'>
            {servicesData.images.firstRow.banking}
          </h3>
          <StaticImage
            src='../../images/services/banking.jpg'
            alt={servicesData.images.firstRow.banking}
          />
          <span className='services__overlay'></span>
        </div>
      </div>
      <div className='services__container-row2'>
        <div className='services__img-container'>
          <h3 className='services__title'>
            {servicesData.images.secondRow.mortgage}
          </h3>
          <StaticImage
            src='../../images/services/mortgage-financing.jpg'
            alt={servicesData.images.secondRow.mortgage}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h3 className='services__title'>
            {servicesData.images.secondRow.realEstate}
          </h3>
          <StaticImage
            src='../../images/services/real-estate-law02.jpg'
            alt={servicesData.images.secondRow.realEstate}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h3 className='services__title'>
            {servicesData.images.secondRow.taxation}
          </h3>
          <StaticImage
            src='../../images/services/international-taxation.jpg'
            alt={servicesData.images.secondRow.taxation}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h3 className='services__title'>
            {servicesData.images.secondRow.other}
          </h3>
          <StaticImage
            src='../../images/services/other.jpg'
            alt={servicesData.images.secondRow.other}
          />
          <span className='services__overlay'></span>
        </div>
      </div>

      <div className='services__container-mobile'>
        <h3>As well as...</h3>
        <ul>
          {Object.values(servicesData.images.secondRow).map(
            (service, index) => (
              <li key={index}>{service}</li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

ServicesSection.propTypes = {
  heading: PropTypes.bool,
};

export default ServicesSection;
