import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Cards = () => {
  const data = useStaticQuery(graphql`
    query memberData {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              jobTitle
              name
              location
              featuredImage {
                childImageSharp {
                  gatsbyImageData(width: 150)
                }
              }
            }
          }
        }
      }
    }
  `);

  const teamQuery = data.allMarkdownRemark.edges;

  return (
    <div className="cards">
      {teamQuery.map((member, i) => {
        const {
          name,
          jobTitle,
          location,
          featuredImage,
        } = member.node.frontmatter;

        return (
          <div className="card" key={i}>
            <GatsbyImage
              image={featuredImage.childImageSharp.gatsbyImageData}
              alt={name}
              imgStyle={{ borderRadius: "100%" }}
              className="card__img"
            />

            <div className="card__info">
              <h2>{name}</h2>
              <h4 className="card__jobTitle">
                <span>{jobTitle}</span>
              </h4>

              <h4 className="team__location">
                <span role="img" aria-label="location pin">
                  📍
                </span>
                {location}
              </h4>

              <Link
                to={`/our-team/${member.node.fields.slug}`}
                className="button__grey"
              >
                More info...
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
