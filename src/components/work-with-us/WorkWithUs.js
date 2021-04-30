import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Paragraph from "../layout/Paragraph";
import WorkWithUsData from "../../data/work-with-us-data";
import Heading from "../ui/Heading";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import Layout from "../layout/Layout";

const WorkWithUs = () => {
  const { title } = useSiteMetadata();
  return (
    <div className='work-with-us'>
      <Layout>
        <Heading color='grey' align='center'>
          Why Work With Us?
        </Heading>
        <Paragraph>
          People from all around the world turn to {title} because of our
          talent, knowledge and ability to resolve difficult situations!
        </Paragraph>
      </Layout>
      <div className='work-with-us__cards'>
        <div className='work-with-us__card'>
          <StaticImage
            src='../../images/work-with-us/national-immigration.jpg'
            alt={WorkWithUsData.immigration.title}
          />
          <h2>{WorkWithUsData.immigration.title}</h2>
          <span>{WorkWithUsData.immigration.blurb}</span>
        </div>
        <div className='work-with-us__card'>
          <StaticImage
            src='../../images/work-with-us/thousands.jpg'
            alt={WorkWithUsData.trusted.title}
          />
          <h2>{WorkWithUsData.trusted.title}</h2>
          <span>{WorkWithUsData.trusted.blurb}</span>
        </div>
        <div className='work-with-us__card'>
          <StaticImage
            src='../../images/work-with-us/phone-call.jpg'
            alt={WorkWithUsData.attention.title}
          />
          <h2>{WorkWithUsData.attention.title}</h2>
          <span>{WorkWithUsData.attention.blurb}</span>
        </div>
        <div className='work-with-us__card'>
          <StaticImage
            src='../../images/work-with-us/save-time.jpg'
            alt={WorkWithUsData.time.title}
          />
          <h2>{WorkWithUsData.time.title}</h2>
          <span>{WorkWithUsData.time.blurb}</span>
        </div>
        <div className='work-with-us__card'>
          <StaticImage
            src='../../images/work-with-us/free-consult.jpg'
            alt={WorkWithUsData.consultation.title}
          />
          <h2>{WorkWithUsData.consultation.title}</h2>
          <span>{WorkWithUsData.consultation.blurb}</span>
        </div>
        <div className='work-with-us__card'>
          <StaticImage
            src='../../images/work-with-us/team.jpg'
            alt={WorkWithUsData.team.title}
          />
          <h2>{WorkWithUsData.team.title}</h2>
          <span>{WorkWithUsData.team.blurb}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
