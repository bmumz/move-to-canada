import React from "react";
import Heading from "../ui/Heading";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import PropTypes from "prop-types";
import ServicesFirstRow from "../../image-queries/services-queries/first-row";
import { Link } from "gatsby";
import ServicesThirdRow from "../../image-queries/services-queries/third-row";

const ServicesSection = ({ heading }) => {
  const { title } = useSiteMetadata();

  return (
    <section className="services">
      {heading && <Heading title={title}>Services</Heading>}
      <Link to="/services">
        <ServicesFirstRow />
        <ServicesThirdRow />
      </Link>
    </section>
  );
};

ServicesSection.propTypes = {
  heading: PropTypes.bool,
};

export default ServicesSection;
