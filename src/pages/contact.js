import React from "react";
import Form from "../components/contact/Form";
import Footer from "../components/layout/footer";
import Header from "../components/layout/Header";
import PageIntro from "../components/layout/PageIntro";
import Heading from "../components/ui/Heading";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Contact = () => {
  const pageTitle = "Contact Us";
  const { title } = useSiteMetadata();

  const heading = <Heading title='Contact'>{title}</Heading>;
  const blurb = (
    <p>
      Need help with real-estate brokerage, immigration law, real estate law,
      corporate law, employment services, or international banking and tax?
      <br />
      <br />
      Please fill out our contact form! Someone from {title} will be in touch as
      soon as possible!
    </p>
  );
  return (

    <>
      <Header pageName={pageTitle} />
      <PageIntro heading={heading} blurb={blurb} className='--contact'>
        <Form className='--pg' />
      </PageIntro>
      <Footer banner={false} />
    </>

  );
};

export default Contact;
