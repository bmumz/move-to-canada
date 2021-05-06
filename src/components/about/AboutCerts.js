import React from "react";
import aboutData from "../../data/about-data";

const AboutCerts = () => (
  <section className='about__certs'>
    <h2>{aboutData.certifications.heading}</h2>
    <div>array of images goes here</div>
  </section>
);

export default AboutCerts;
