import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const ServicesSecondRow = ({ hidden }) => {
  const secondRow = useStaticQuery(graphql`
    query ServicesImgs2 {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "services/second-row" }
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
      <div
        className={
          hidden ? "services__container-row--hide" : "services__container-row"
        }
      >
        {secondRow.allFile.edges.map(({ node }, i) => (
          <div key={i} className='services__img-container'>
            <h3 className='services__title'>{getImgName(node.name)}</h3>
            <GatsbyImage
              image={node.childImageSharp.gatsbyImageData}
              alt={getImgName(node.name)}
            />
            <span className='services__overlay'></span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesSecondRow;
