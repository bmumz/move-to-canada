import React from "react";
import PageIntro from "../components/layout/PageIntro";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/layout/Header";
import Footer from "../components/layout/footer/Footer";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Heading from "../components/ui/Heading";
import servicesData from "../data/services-data";
import Layout from "../components/layout/Layout";
//svg
import ServicesSection from "../components/services/ServicesSection";
import World from "../components/services/svg/World";

const Services = () => {
  const pageTitle = "Services";

  const { title } = useSiteMetadata();

  const heading = (
    <Heading title={`${pageTitle} Offered by`} className='heading__start'>
      {title}
    </Heading>
  );

  return (
    <div className='servicesPg'>
      <Header pageName={pageTitle} />
      <PageIntro
        heading={heading}
        blurbHeading={servicesData.blurbHeading}
        blurb={servicesData.blurb}
        path='#services'
      >
        <StaticImage
          src='../images/lake-louise.jpeg'
          alt='Lake Louise, Alberta'
          className='pageIntro__img'
        />
      </PageIntro>
      <section className='services__details'>
        <Layout>
          <div className='service'>
            <World />
            <span>
              <h2>
                We are committed to customer service and personalized attention
                to ensure each client receives custom tailored solutions that
                fit their needs.
              </h2>
            </span>
          </div>
        </Layout>
      </section>
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Services;
