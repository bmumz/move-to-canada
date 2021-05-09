import React from "react";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/Header";
import Heading from "../components/ui/Heading";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Layout from "../components/layout/Layout";
import ThanksVg from "../components/thanks/svg/thanks";
import { Link } from "gatsby";

const Thanks = () => {
  const pageTitle = "Thank You for Contacting Us";
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

      <Layout>
        <section className='thanks'>
          {heading}
          <ThanksVg />
          {blurb}
          <Link to='/' className='button__red'>
            Back home...
          </Link>
        </section>
      </Layout>

      <Footer banner={true} />
    </>
  );
};

export default Thanks;
