import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className='hero'>
      <StaticImage
        src='../../images/slideshow/road.jpg'
        alt='road'
        className='hero__img-container'
        imgClassName='hero__img'
      />

      <div className='hero__overlay'> </div>

      <Contact />
    </div>
  );
};

export default Hero;
