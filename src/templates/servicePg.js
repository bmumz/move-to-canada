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
        title
        subtitle
        listTitle
        list
        tags
      }
    }
  }
`;

const ServicePg = ({ data }) => {
  const service = data.markdownRemark;
  const { title, subtitle, list, listTitle } = service.frontmatter;
  const listMidPoint = Math.ceil(list.length / 2);
  const listLeft = list.slice(0, listMidPoint);
  const listRight = list.slice(listMidPoint, list.length);

  return (
    <div className="servicesPg">
      <Header pageName={title} />
      <PageIntro
        heading={title}
        blurb={subtitle}
        path="#services"
        cta="Learn more"
      >
        <StaticImage
          src="../images/lake-louise.jpeg"
          alt="Lake Louise, Alberta"
          className="pageIntro__img"
        />
      </PageIntro>
      <div
        className="services__template"
        id="services"
        dangerouslySetInnerHTML={{ __html: service.html }}
      />
      <div className="services__list">
        <h3>{listTitle}</h3>
        <span>
          <ul>
            {listLeft.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <ul>
            {listRight.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
};

export default ServicePg;
