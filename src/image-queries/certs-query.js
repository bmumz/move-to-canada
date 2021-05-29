import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const CertsImgs = () => {
  const data = useStaticQuery(graphql`
    query CertsImgs {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativeDirectory: { eq: "images/certs" }
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

  const getImgName = (img) => img.replace(/[0-9]/g, "");

  return (
    <div>
      {data.allFile.edges.map(({ node }, i) => (
        <React.Fragment key={i}>
          <GatsbyImage
            image={node.childImageSharp.gatsbyImageData}
            alt={getImgName(node.name)}
            className="about__certs--logo"
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default CertsImgs;
