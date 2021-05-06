import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

export default () => {
  const data = useStaticQuery(graphql`
    query IconQuery {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativeDirectory: { eq: "about" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                width: 100
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allFile.edges.map(({ node, index }) => (
        <div key={index} className='about__icon--container'>
          <span className='about__icon'>
            <GatsbyImage
              image={node.childImageSharp.gatsbyImageData}
              alt='test'
            />
          </span>
        </div>
      ))}
    </>
  );
};
