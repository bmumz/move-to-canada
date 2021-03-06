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

  const heading = <Heading title={pageTitle}>{title}</Heading>;

  const blurb = (
    <div>
      <p>{aboutData.blurb}</p>
    </div>
  );

  return (
    <>
      <Header pageName={pageTitle} />
      <PageIntro heading={heading} blurb={blurb} path='#about' cta='Learn more'>
        <StaticImage
          src='../images/toronto.jpg'
          alt='CN Tower, Toronto'
          className='pageIntro__img'
        />
      </PageIntro>
      <section className='about' id='about'>
        <AboutCulture />
        <Layout>
          <AboutDetails data={aboutData.details.section1} />
          <AboutDetails data={aboutData.details.section2} />
          <AboutCerts />
        </Layout>
      </section>

      <Footer banner={true} />
    </>
  );
};

export default About;
