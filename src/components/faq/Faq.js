import React from "react";

import Heading from "../ui/Heading";
import faqData from "../../data/faq-data";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import GetFaq from "./GetFaq";
import Layout from "../layout/Layout";

const Faq = () => {
  const { title } = useSiteMetadata();

  return (
    <Layout>
      <section className="faq">
        <Heading title={title}>Frequently Asked Questions</Heading>

        <GetFaq data={faqData.general} />
        <GetFaq data={faqData.immigration} />
        <GetFaq data={faqData.realEstate} />
      </section>
    </Layout>
  );
};

export default Faq;
