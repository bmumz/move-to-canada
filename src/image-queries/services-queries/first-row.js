import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const ServicesFirstRow = () => {
  const firstRow = useStaticQuery(graphql`
    query ServicesImgs {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "services/first-row" }
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

  const files = firstRow.allFile.edges;

  return (
    <>
      <div className="services__container-row">
        {files.map(({ node }, i) => {
          console.log(node.name);
          return (
            <div key={i} className="services__img-container">
              <h3 className="services__title">{getImgName(node.name)}</h3>
              <GatsbyImage
                image={node.childImageSharp.gatsbyImageData}
                alt={getImgName(node.name)}
                className="services__img"
              />
              <span className="services__overlay"></span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServicesFirstRow;
