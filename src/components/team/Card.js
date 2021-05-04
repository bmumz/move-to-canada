import React from "react";

const Card = ({ name, title, location, children }) => (
  <div className='team__card'>
    {children}
    <div className='team__info'>
      <h2>{name}</h2>
      <h4 className='team__title'>
        <span>{title}</span>
      </h4>

      <h4 className='team__location'>
        <span role='img' aria-label='location pin'>
          📍
        </span>
        {location}
      </h4>
      <button>More info...</button>
    </div>
  </div>
);

export default Card;
