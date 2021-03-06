import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const ServicesThirdRow = () => {
  const thirdRow = useStaticQuery(graphql`
    query ServicesImgs3 {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "services/third-row" }
        }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const getImgName = (img) => img.replace(/[0-9]/g, "");

  return (
    <>
      <div className="services__ind--container">
        {thirdRow.allFile.edges.map(({ node }, i) => (
          <div key={i} className="services__img-container">
            <h3 className="services__title">{getImgName(node.name)}</h3>

            <GatsbyImage
              image={node.childImageSharp.gatsbyImageData}
              alt={getImgName(node.name)}
              className="services__img"
            />
            <span className="services__overlay"></span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesThirdRow;
