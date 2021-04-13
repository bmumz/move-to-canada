import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Paragraph from "../layout/Paragraph";
import { Data } from "./work-with-us-data";
import Heading from "../ui/Heading";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const WorkWithUs = () => {
  const { title } = useSiteMetadata();
  return (
    <div className='work-with-us'>
      <Heading theme='dark' size=''>
        Why Work With Us?
      </Heading>
      <Paragraph>
        People from all around the world turn to the {title} Team because of our
        talent, knowledge and ability to resolve difficult situations!
      </Paragraph>
      <div className='work-with-us__cards'>
        <div className='work-with-us__card'>
          <StaticImage
            src='../../images/work-with-us/national-immigration.jpg'
            alt={Data[0].title}
          />
          <h2>{Data[0].title}</h2>
          <span>{Data[0].blurb}</span>
        </div>
        <div className='work-with-us__card'>
          <StaticImage
            src='../../images/work-with-us/thousands.jpg'
            alt={Data[1].title}
          />
          <h2>{Data[1].title}</h2>
          <span>{Data[1].blurb}</span>
        </div>{" "}
        <div className='work-with-us__card'>
          <StaticImage
            src='../../images/work-with-us/phone-call.jpg'
            alt={Data[2].title}
          />
          <h2>{Data[2].title}</h2>
          <span>{Data[2].blurb}</span>
        </div>
        <div className='work-with-us__card'>
          <StaticImage
            src='../../images/work-with-us/save-time.jpg'
            alt={Data[3].title}
          />
          <h2>{Data[3].title}</h2>
          <span>{Data[3].blurb}</span>
        </div>
        <div className='work-with-us__card'>
          <StaticImage
            src='../../images/work-with-us/free-consult.jpg'
            alt={Data[4].title}
          />
          <h2>{Data[4].title}</h2>
          <span>{Data[4].blurb}</span>
        </div>{" "}
        <div className='work-with-us__card'>
          <StaticImage
            src='../../images/work-with-us/team.jpg'
            alt={Data[5].title}
          />
          <h2>{Data[5].title}</h2>
          <span>{Data[5].blurb}</span>
        </div>
      </div>

      {/* {Data.map((work-with-us, index) => (
        <div key={index}>
          <h2>{work-with-us.title}</h2>
          <span>{work-with-us.blurb}</span>
        </div>
      ))} */}
    </div>
  );
};

export default WorkWithUs;
