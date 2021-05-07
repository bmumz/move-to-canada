import * as React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/footer/Footer";
import Heading from "../components/ui/Heading";
import { Link } from "gatsby";

// markup
const NotFoundPage = () => {
  const pageTitle = "Page Not Found!";
  return (
    <main>
      <Header pageName={pageTitle} />
      <Layout>
        <Heading title='Error 404:'>{pageTitle}</Heading>

        <p>
          We're sorry, but it looks like the page you've requested doesn't exist
          yet!
          <Link to='/'>
            <button className='button__red'>Return home...</button>
          </Link>
        </p>
      </Layout>
      <Footer banner={true} />
    </main>
  );
};

export default NotFoundPage;
