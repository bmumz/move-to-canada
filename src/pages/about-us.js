import React from "react";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/Header";
import PageIntro from "../components/layout/PageIntro";
import Heading from "../components/ui/Heading";
import Layout from "../components/layout/Layout";
import AboutCulture from "../components/about/AboutCulture";
import AboutDetails from "../components/about/AboutDetails";
import AboutCerts from "../components/about/AboutCerts";
import aboutData from "../data/about-data";
import { StaticImage } from "gatsby-plugin-image";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const About = () => {
  const pageTitle = "About";
  const { title } = useSiteMetadata();

  const heading = (
    <Heading title={pageTitle} className='heading__start'>
      {title}
    </Heading>
  );

  return (
    <>
      <Header pageName={pageTitle} />
      <PageIntro heading={heading} blurb={aboutData.blurb} path='#about'>
        <StaticImage
          src='../images/slideshow/toronto.jpg'
          alt='CN Tower, Toronto'
          className='pageIntro__img'
        />
      </PageIntro>
      <section className='about'>
        <AboutCulture />
        <Layout>
          <AboutDetails data={aboutData.details.section1} />
        </Layout>

        <Layout>
          <AboutDetails data={aboutData.details.section2} />
          <AboutCerts />
        </Layout>
      </section>

      <Footer />
    </>
  );
};

export default About;
