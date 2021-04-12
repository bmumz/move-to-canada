import * as React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Paragraph from "../components/layout/Paragraph";
import Heading from "../components/ui/Heading";
import { Link } from "gatsby";

// markup
const NotFoundPage = () => {
  const pageTitle = "Error 404: Page Not Found!";
  return (
    <main>
      <Header pageName={pageTitle} />
      <Layout>
        <Heading theme='dark' size=''>
          {pageTitle}
        </Heading>

        <Paragraph>
          We're sorry, but it looks like the page you've requested doesn't exist
          yet!
          <Link to='/'>
            <button className='button__primary'>Return home...</button>
          </Link>
        </Paragraph>
      </Layout>
      <Footer />
    </main>
  );
};

export default NotFoundPage;
