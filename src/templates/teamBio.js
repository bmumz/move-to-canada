import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Header from "../components/layout/Header";
import Footer from "../components/layout/footer";
import Heading from "../components/ui/Heading";

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

const TeamBio = ({ data }) => {
  const bio = data.markdownRemark;
  const bioData = bio.frontmatter;
  const pageName = bio.frontmatter.name;

  return (
    <div className="team">
      <Header pageName={pageName} tags={bioData.tags} />
      <div className="team__template">
        <Heading title="About">{bioData.name}</Heading>
        <h4>{bioData.jobTitle}</h4>

        {bioData && (
          <GatsbyImage
            image={bioData.featuredImage.childImageSharp.gatsbyImageData}
            alt={bioData.name}
            className="team__img"
          />
        )}

        <div
          dangerouslySetInnerHTML={{ __html: bio.html }}
          className="team__bio"
        ></div>
        <a className="button__red" href="/contact">
          Get in touch!
        </a>
      </div>

      <Footer banner={true} />
    </div>
  );
};

export default TeamBio;
