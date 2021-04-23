import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";
import Paragraph from "../components/layout/Paragraph";
import WorkWithUs from "../components/work-with-us/WorkWithUs";
import Services from "../components/services/Services";
import Banner from "../components/ui/Banner";
import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";
import { useSiteMetadata } from "../hooks/use-site-metadata";

import "../styles/app.scss";

const IndexPage = () => {
  const { phone, title } = useSiteMetadata();
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <main>
      <title>Home Page</title>
      <Header pageName='Home' />
      <Hero />
      <Layout>
        <Heading color='grey'>Full-Service Immigration Advisory</Heading>
        <Heading color='red' size='lg'>
          {phone}
        </Heading>

        <Paragraph>
          Are you planning to move to Canada? You may need a dedicated team. Our
          full-service comprehensive team of Lawyers, Realtors, Bankers,
          Accountants and everyone in between are here to ensure your relocation
          experience is seamless and stress-free.
        </Paragraph>
        <StaticImage
          src='../images/canada.jpeg'
          alt='Skyscrapers in Canada forming a maple leaf.'
          placeholder='dominantColor'
        />
        <Paragraph>
          The {title} Team has served clients around the world from almost every
          country. Our proven track record of helping individuals and businesses
          relocate to Canada is second to none. We are committed to customer
          service and personalized attention to ensure each client receives
          custom tailored solutions that fit their needs. Every member of our
          team has years of experience and is recognized as a leader in their
          field. While relocating to another country can be a stressful
          experience, The {title} Team makes it simple.
        </Paragraph>
      </Layout>
      <Banner className='banner__col'>
        <Heading color='white' size='sm' weight='bold'>
          Thinking about moving to Canada?{" "}
        </Heading>

        <Button className='button__secondary' onClick={handleClick}>
          Speak to us now!
        </Button>
      </Banner>

      <Services />

      <WorkWithUs />

      <Footer />
    </main>
  );
};

export default IndexPage;
