import React from "react";
import { Link } from "gatsby";
import teamData from "../../data/team-data";

const Card = ({ name, title, location, children }) => {
  const path = teamData.member.path;

  return (
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
        <Link to={`./${path}`} className='button__grey'>
          More info...
        </Link>
      </div>
    </div>
  );
};

export default Card;
