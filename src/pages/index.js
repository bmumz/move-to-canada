import * as React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Paragraph from "../components/layout/Paragraph";
import Banner from "../components/ui/Banner";
import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";

import "../styles/app.scss";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Header pageName="Home" />
      <Layout>
        <Heading theme="dark" size="">
          Full-Service Immigrantion Advisory
        </Heading>
        <Heading theme="red" size="larger">
          1-800-321-MOVE
        </Heading>

        <Paragraph>
          Are you planning to move to Canada? You may need a dedicated team. Our
          full-service comprehensive team of Lawyers, Realtors, Bankers,
          Accountants and everyone in between are here to ensure your relocation
          experience is seamless and stress-free.
        </Paragraph>
        <img src="http://via.placeholder.com/640x360" alt="Placeholder" />
        <Paragraph>
          The Move to Canada Team has served clients around the world from
          almost every country. Our proven track record of helping individuals
          and businesses relocate to Canada is second to none. We are committed
          to customer service and personalized attention to ensure each client
          receives custom tailored solutions that fit their needs. Every member
          of our team has years of experience and is recognized as a leader in
          their field. While relocating to another country can be a stressful
          experience, The Move to Canada Team makes it simple.
        </Paragraph>
      </Layout>
      <Banner className="banner">
        <div className="banner__content">
          Thinking about moving to Canada?{" "}
          <Button className="button__secondary" onClick="">
            Speak to us now!
          </Button>
        </div>
      </Banner>

      <Footer />
    </main>
  );
};

export default IndexPage;
