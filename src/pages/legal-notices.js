import React from "react";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Heading from "../components/ui/Heading";
import Legal from "../components/legal/Legal";
import LegalNoticesData from "../components/legal/legal-notices-data";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const LegalNoticesPage = () => {
  const pageTitle = "Legal Notices";
  const { title } = useSiteMetadata();

  return (
    <>
      <Header pageName={pageTitle} />
      <Layout>
        <Heading size='lg' color='black'>
          Legal Notices
        </Heading>
        <Legal data={LegalNoticesData(title)} />
      </Layout>

      <Footer />
    </>
  );
};

export default LegalNoticesPage;
