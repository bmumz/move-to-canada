import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/Header";
import PageIntro from "../components/layout/PageIntro";
import Heading from "../components/ui/Heading";
import AboutCulture from "../components/about/AboutCulture";
import AboutDetails from "../components/about/AboutDetails";
import AboutCerts from "../components/about/AboutCerts";

import aboutData from "../data/about-data";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Layout from "../components/layout/Layout";

const About = () => {
  const pageTitle = "About";
  const { title } = useSiteMetadata();

  const heading = (
    <Heading title={pageTitle} className='heading__start'>
      {title}
    </Heading>
  );

  return (
    <div>
      <Header pageName={pageTitle} />
      <PageIntro heading={heading} blurb={aboutData.blurb} path='#about'>
        <StaticImage
          src='../images/slideshow/toronto.jpg'
          alt='lake'
          className='pageIntro__img'
        />
      </PageIntro>
      <AboutCulture />
      <Layout>
        <AboutDetails data={aboutData.details.section1} />
        <AboutDetails data={aboutData.details.section2} />
        <AboutCerts />
      </Layout>

      <Footer />
    </div>
  );
};

export default About;
