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
                  gatsbyImageData(width: 175)
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
    <>
      {teamQuery.map((member, i) => {
        const {
          name,
          jobTitle,
          location,
          featuredImage,
        } = member.node.frontmatter;

        return (
          <section className="team">
            <div className="team__card" key={i}>
              <GatsbyImage
                image={featuredImage.childImageSharp.gatsbyImageData}
                alt={name}
                className="team__img-container"
                imgClassName="team__img"
              />
              <div className="team__info">
                <h2>{name}</h2>
                <h4 className="team__title">
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
          </section>
        );
      })}
    </>
  );
};

export default Cards;
