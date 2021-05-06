import React from "react";
import Heading from "../ui/Heading";
import servicesData from "../../data/services-data";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

const ServicesSection = ({ heading }) => {
  const { title } = useSiteMetadata();
  const { firstRow, secondRow } = servicesData.images;

  return (
    <section className='services'>
      {heading && <Heading title={title}>Services</Heading>}

      <div className='services__container-row1'>
        <div className='services__img-container'>
          <h3 className='services__title'>{firstRow.home}</h3>
          <StaticImage
            src='../../images/services/buying-home.jpg'
            alt={firstRow.home}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h3 className='services__title'>{firstRow.immigration}</h3>
          <StaticImage
            src='../../images/services/immigration.jpg'
            alt={firstRow.immigration}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h3 className='services__title'>{firstRow.businessRelocation}</h3>
          <StaticImage
            src='../../images/services/business-relocation.jpg'
            alt={firstRow.businessRelocation}
          />
          <span className='services__overlay'></span>
        </div>

        <div className='services__img-container'>
          <h3 className='services__title'>{firstRow.banking}</h3>
          <StaticImage
            src='../../images/services/banking.jpg'
            alt={firstRow.banking}
          />
          <span className='services__overlay'></span>
        </div>
      </div>
      <div className='services__container-row2'>
        <div className='services__img-container'>
          <h3 className='services__title'>{secondRow.mortgage}</h3>
          <StaticImage
            src='../../images/services/mortgage-financing.jpg'
            alt={secondRow.mortgage}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h3 className='services__title'>{secondRow.realEstate}</h3>
          <StaticImage
            src='../../images/services/real-estate-law02.jpg'
            alt={secondRow.realEstate}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h3 className='services__title'>{secondRow.taxation}</h3>
          <StaticImage
            src='../../images/services/international-taxation.jpg'
            alt={secondRow.taxation}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h3 className='services__title'>{secondRow.other}</h3>
          <StaticImage
            src='../../images/services/other.jpg'
            alt={secondRow.other}
          />
          <span className='services__overlay'></span>
        </div>
      </div>

      <div className='services__container-mobile'>
        <h3>As well as...</h3>
        <ul>
          {Object.values(secondRow).map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

ServicesSection.propTypes = {
  heading: PropTypes.bool,
};

export default ServicesSection;
