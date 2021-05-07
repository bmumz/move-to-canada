import React from "react";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Legal from "../components/legal/Legal";
import LegalNoticesData from "../data/legal/legal-notices-data";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const LegalNoticesPage = () => {
  const pageTitle = "Legal Notices";
  const { title } = useSiteMetadata();

  return (
    <>
      <Header pageName={pageTitle} />
      <Layout>
        <section className='legal'>
          <h1>
            <span>{pageTitle}</span>
          </h1>
          <Legal data={LegalNoticesData(title)} />
        </section>
      </Layout>

      <Footer banner={true} />
    </>
  );
};

export default LegalNoticesPage;
