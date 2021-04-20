import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Contact from "./contact-form/Contact";

const Hero = () => {
  return (
    <div className='slideshow'>
      <div className='slideshow__container'>
        <StaticImage src='../../images/slideshow/road.jpg' alt='road' />

        <div className='slideshow__overlay'> </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Hero;
