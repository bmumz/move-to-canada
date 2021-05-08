import React from "react";
import PageIntro from "../components/layout/PageIntro";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/layout/Header";
import Footer from "../components/layout/footer/Footer";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Heading from "../components/ui/Heading";
import servicesData from "../data/services-data";
import Layout from "../components/layout/Layout";
import ServicesFirstRow from "../image-queries/services-queries/first-row";
import ServicesSecondRow from "../image-queries/services-queries/second-row";
//svg
import World from "../components/services/svg/World";

const Services = () => {
  const pageTitle = "Services";

  const { title } = useSiteMetadata();

  const heading = (
    <Heading title={`${pageTitle} Offered by`} className='heading__start'>
      {title}
    </Heading>
  );

  const blurb = <p>{servicesData.blurb} </p>;

  return (
    <div className='servicesPg'>
      <Header pageName={pageTitle} />
      <PageIntro
        heading={heading}
        blurbHeading={servicesData.blurbHeading}
        blurb={blurb}
        path='#services'
        cta='Learn more'
      >
        <StaticImage
          src='../images/lake-louise.jpeg'
          alt='Lake Louise, Alberta'
          className='pageIntro__img'
        />
      </PageIntro>
      <section className='services__details' id='services'>
        <Layout>
          <div className='service'>
            <World />
            <span>
              <h2>{servicesData.details}</h2>
            </span>
          </div>
        </Layout>
      </section>

      <ServicesFirstRow />
      <ServicesSecondRow hidden={false} />

      <Footer banner={true} />
    </div>
  );
};

export default Services;
