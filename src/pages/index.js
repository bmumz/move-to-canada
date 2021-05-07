import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Hero from "../components/contact/Hero";
import WorkWithUs from "../components/work-with-us/WorkWithUs";
import ServicesSection from "../components/services/ServicesSection";
import Banner from "../components/ui/Banner";

import { useSiteMetadata } from "../hooks/use-site-metadata";
import homeData from "../data/home-data";

import "../styles/app.scss";
import Heading from "../components/ui/Heading";
import HomeBlurb from "../components/home/HomeBlurb";
import { Link } from "gatsby";

const IndexPage = () => {
  const { phone } = useSiteMetadata();
  const pageTitle = "Home";

  const handleClick = () => {
    alert("clicked");
  };
  return (
    <main>
      <title>{pageTitle}</title>
      <Header pageName={pageTitle} />
      <Hero />
      <HomeBlurb />
      <Layout>
        <section>
          <Heading title='Full-Service Immigration Advisory'>{phone}</Heading>
          <span className='svg__container'>{homeData.svg}</span>

          {/* <StaticImage
            src='../images/canada.jpeg'
            alt='Skyscrapers in Canada forming a maple leaf.'
            placeholder='dominantColor'
            className='placeholder__img'
            layout='constrained'
          /> */}

          <p>{homeData.paragraphs}</p>
        </section>
      </Layout>
      <Banner className='banner__col'>
        <h2>...thinking about moving to Canada?</h2>

        <Link to='/contact' className='button__white'>
          Speak to us now!
        </Link>
      </Banner>

      <ServicesSection heading={true} />

      <WorkWithUs />

      <Footer banner={true} />
    </main>
  );
};

export default IndexPage;
