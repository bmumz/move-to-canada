import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Heading from "../ui/Heading";

const Card = ({ name, title, location, showModal }) => (
  <div className='team__card'>
    <StaticImage
      src='../../images/headshots/nick.jpeg'
      alt={name}
      className='team__img-container'
    />
    <div className='team__info'>
      <Heading size='sm' color='grey' weight='bold'>
        {name}{" "}
      </Heading>
      <h2>{title}</h2>
      <hr />
      <h3>📍 {location}</h3>
      <button onClick={showModal}>More info...</button>
    </div>
  </div>
);

export default Card;
