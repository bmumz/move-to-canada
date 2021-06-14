import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Contact from "./ContactHero";

const Hero = () => {
  return (
    <div className="hero" id="--hero">
      <StaticImage
        src="../../images/road.jpg"
        alt="road"
        className="hero__img-container"
        imgClassName="hero__img"
      />
      <h1 className="hero__overlayText">
        Canadian Immigration and Real Estate Advisory
      </h1>
      <div className="hero__overlay"> </div>

      <Contact />
    </div>
  );
};

export default Hero;
