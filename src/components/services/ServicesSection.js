import React from "react";
import Heading from "../ui/Heading";
import servicesData from "../../data/services-data";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import PropTypes from "prop-types";
import ServicesFirstRow from "../../image-queries/services-queries/first-row";
import ServicesSecondRow from "../../image-queries/services-queries/second-row";

const ServicesSection = ({ heading }) => {
  const { title } = useSiteMetadata();
  const { secondRow } = servicesData.images;

  return (
    <section className='services'>
      {heading && <Heading title={title}>Services</Heading>}

      <ServicesFirstRow />
      <ServicesSecondRow hidden={true} />

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
