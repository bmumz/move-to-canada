import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

export default () => {
  const data = useStaticQuery(graphql`
    query Certs {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativeDirectory: { eq: "certs" }
        }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(height: 55)
            }
          }
        }
      }
    }
  `);
  return (
    <div>
      {data.allFile.edges.map(({ node }, i) => (
        <React.Fragment key={i}>
          <GatsbyImage
            image={node.childImageSharp.gatsbyImageData}
            alt={node.name}
            className='about__certs--logo'
          />
        </React.Fragment>
      ))}
    </div>
  );
};
