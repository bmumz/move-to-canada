import React from "react";
import aboutData from "../../data/about-data";
import CertsImgs from "../../image-queries/certs-query";

const AboutCerts = () => (
  <section className='about__certs'>
    <h2>{aboutData.certifications.heading}</h2>

    <CertsImgs />
  </section>
);

export default AboutCerts;
