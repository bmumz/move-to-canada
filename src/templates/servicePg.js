import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Header from "../components/layout/Header";
import PageIntro from "../components/layout/PageIntro";
import servicesData from "../data/services-data";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        jobTitle
        location
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(height: 350)
          }
        }
      }
    }
  }
`;

const ServicePg = ({ data }) => {
  const bio = data.markdownRemark;
  const bioData = bio.frontmatter;
  const pageName = bio.frontmatter.name;

  return (
    <div className="servicesPg">
      <Header pageName={pageName} />
      <PageIntro
        // heading={heading}
        blurbHeading={servicesData.blurbHeading}
        // blurb={blurb}
        path="#services"
        cta="Learn more"
      >
        <StaticImage
          src="../images/lake-louise.jpeg"
          alt="Lake Louise, Alberta"
          className="pageIntro__img"
        />
      </PageIntro>
      <section className="services__details" id="services"></section>
    </div>
  );
};

export default ServicePg;
