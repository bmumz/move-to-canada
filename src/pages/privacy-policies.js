import React from "react";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Heading from "../components/ui/Heading";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Legal from "../components/legal/Legal";
import PrivacyPolicyData from "../data/legal/privacy-policy-data";

const LegalNoticesPage = () => {
  const pageTitle = "Privacy Policies, Notices and Statements";
  const { title } = useSiteMetadata();
  return (
    <div id='privacy-policy'>
      <Header pageName={pageTitle} />
      <Layout>
        <section className='legal'>
          <h1>
            <span>{pageTitle}</span>
          </h1>
          <Legal data={PrivacyPolicyData(title)} />
        </section>
      </Layout>

      <Footer />
    </div>
  );
};

export default LegalNoticesPage;
