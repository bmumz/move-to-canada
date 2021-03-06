import React from "react";
import { Link } from "gatsby";

const AboutDetails = ({ data }) => {
  return (
    <section>
      <span className="svg__container">{data.svg}</span>
      <h2>{data.heading}</h2>

      {Object.values(data.paragraphs).map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <Link className="button__red" to={data.bannerContent.path}>
        {data.bannerContent.cta}
      </Link>
    </section>
  );
};

export default AboutDetails;
