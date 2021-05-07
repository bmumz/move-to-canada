import React from "react";
import ContactForm from "../components/contact/ContactHero";
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
    <div className='test'>
      <Header pageName={pageTitle} />
      <PageIntro heading={heading} blurb={blurb} className='--contact'>
        <div className='contacttest'>
          <Form onClick='test' onSubmit='test' className='--pg' />
        </div>
      </PageIntro>
      <Footer banner={false} />
    </div>
  );
};

export default Contact;
