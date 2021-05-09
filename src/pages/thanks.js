import React from "react";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/Header";
import PageIntro from "../components/layout/PageIntro";
import Heading from "../components/ui/Heading";
import { StaticImage } from "gatsby-plugin-image";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Thanks = () => {
  const pageTitle = "Thank you for Contacting";
  const { title } = useSiteMetadata();

  const heading = <Heading title={pageTitle}>{title}!</Heading>;

  const blurb = (
    <div>
      <p>A member from our team will be in touch with you shortly!</p>
    </div>
  );

  return (
    <>
      <Header pageName={pageTitle} />
      <PageIntro heading={heading} blurb={blurb} path='/' cta='Back home'>
        <StaticImage
          src='../images/toronto.jpg'
          alt='CN Tower, Toronto'
          className='pageIntro__img'
        />
      </PageIntro>

      <Footer banner={true} />
    </>
  );
};

export default Thanks;
