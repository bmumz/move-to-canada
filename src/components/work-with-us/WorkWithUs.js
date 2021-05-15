import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import WorkWithUsData from "../../data/work-with-us-data";
import Heading from "../ui/Heading";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import Layout from "../layout/Layout";

// TO DO:
// - QUERY images from graphql
// - pass data in as an object.
// - map over data
// {Objects.entries(WWUD).map(item, index =>

/* <div className='work-with-us__card'>
        <img src={WWUD.img} */

//   />
//   <h4>{WorkWithUsData.immigration.title}</h4>
//   <p>{WorkWithUsData.immigration.blurb}</p>
// </div>)}

const WorkWithUs = () => {
  const { title } = useSiteMetadata();
  return (
    <section className="work-with-us">
      <Layout>
        <Heading title="Why Work With">{title}?</Heading>
        <p>
          People from all around the world turn to {title} because of our
          talent, knowledge and ability to resolve difficult situations!
        </p>
      </Layout>

      <div className="work-with-us__cards">
        <div className="work-with-us__card">
          <StaticImage
            src="../../images/work-with-us/national-immigration.jpg"
            alt={WorkWithUsData.immigration.title}
          />
          <h4>{WorkWithUsData.immigration.title}</h4>
          <p>{WorkWithUsData.immigration.blurb}</p>
        </div>
        <div className="work-with-us__card">
          <StaticImage
            src="../../images/work-with-us/thousands.jpg"
            alt={WorkWithUsData.trusted.title}
          />
          <h4>{WorkWithUsData.trusted.title}</h4>
          <p>{WorkWithUsData.trusted.blurb}</p>
        </div>
        <div className="work-with-us__card">
          <StaticImage
            src="../../images/work-with-us/phone-call.jpg"
            alt={WorkWithUsData.attention.title}
          />
          <h4>{WorkWithUsData.attention.title}</h4>
          <p>{WorkWithUsData.attention.blurb}</p>
        </div>
        <div className="work-with-us__card">
          <StaticImage
            src="../../images/work-with-us/save-time.jpg"
            alt={WorkWithUsData.time.title}
          />
          <h4>{WorkWithUsData.time.title}</h4>
          <p>{WorkWithUsData.time.blurb}</p>
        </div>
        <div className="work-with-us__card">
          <StaticImage
            src="../../images/work-with-us/free-consult.jpg"
            alt={WorkWithUsData.consultation.title}
          />
          <h4>{WorkWithUsData.consultation.title}</h4>
          <p>{WorkWithUsData.consultation.blurb}</p>
        </div>
        <div className="work-with-us__card">
          <StaticImage
            src="../../images/work-with-us/team.jpg"
            alt={WorkWithUsData.team.title}
          />
          <h4>{WorkWithUsData.team.title}</h4>
          <p>{WorkWithUsData.team.blurb}</p>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
