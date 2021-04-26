import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Paragraph from "../components/layout/Paragraph";
import Heading from "../components/ui/Heading";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const LegalNoticesPage = () => {
  const pageTitle = "Legal Notices";
  const { title } = useSiteMetadata();
  return (
    <>
      <Header pageName={pageTitle} />
      <Layout>
        <Heading size='lg'>Legal Notices</Heading>
        <Paragraph>
          This website is a public resource of general information which is
          intended, but not promised or guaranteed, to be complete, accurate,
          and up-to-date. This website is not intended to provide legal advice,
          and therefore, does not invite or create an attorney-client
          relationship. Visitors to this website should not act, or refrain from
          acting, based upon any information available via this website, and
          should always seek the advice of competent counsel in the relevant
          jurisdiction. Nothing in this website is to be considered as either
          creating an attorney-client relationship between the reader and The
          {title} Team Inc. or as rendering legal advice for any specific
          matter.  Readers are responsible for obtaining such advice from their
          own legal counsel. The {title} Team Inc. expressly disclaims any and
          all liability with regard to actions taken or not taken based upon the
          content of this website.
        </Paragraph>
        <Paragraph>
          None of the members of The {title} Team are employed by The
          {title} Team Inc., and The {title} Team Inc. is not liable for any
          actions taken as a result of receiving services from any of The{" "}
          {title} Team’s members. All members of the Move to Canada Team are
          individually liable for any services rendered, and The
          {title} Team Inc. is not to be named in any legal actions against any
          of The {title} Team’s members.
        </Paragraph>
        <Paragraph>
          This website is not sponsored or associated with any particular linked
          entity unless so stated. The existence of any particular link is
          intended solely to provide viewers with information which may be of
          interest to them. {title} takes no responsibility for the content or
          accuracy of information contained on a linked site. Please email us at
          info@movetocanada.com with any questions.
        </Paragraph>
      </Layout>

      <Footer />
    </>
  );
};

export default LegalNoticesPage;
