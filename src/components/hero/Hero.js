import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Contact from "./contact-form/Contact";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <StaticImage src='../../images/slideshow/road.jpg' alt='road' />

        <div className='hero__overlay'> </div>

        <Contact />
      </div>
    </div>
  );
};

export default Hero;
