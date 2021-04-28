import React from "react";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Card from "../components/team/Card";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/layout/Paragraph";
import { StaticImage } from "gatsby-plugin-image";

const Team = () => {
  const pageTitle = "Our Team";

  return (
    <div className='team'>
      <Header pageName={pageTitle} />
      <Layout>
        <Heading color='grey' align='center'>
          {pageTitle}
        </Heading>
        <Paragraph>
          Partner with a professional who knows your goals, your culture and how
          you do business. Our experienced team is on-the-ground, in all cities
          across Canada!
        </Paragraph>

        <div className='team__cards'>
          <Card
            name='Nick Zarlenga'
            title='Real Estate Broker'
            location='Toronto, ON'
          >
            {" "}
            <StaticImage
              src='../images/headshots/nick.jpeg'
              alt='Nick Zarlenga'
              className='team__img'
            />
          </Card>
          <Card
            name='Nick Zarlenga'
            title='Real Estate Broker'
            location='Toronto, ON'
          >
            {" "}
            <StaticImage
              src='../images/headshots/nick.jpeg'
              alt='Nick Zarlenga'
              className='team__img'
            />
          </Card>
          <Card
            name='Nick Zarlenga'
            title='Real Estate Broker'
            location='Toronto, ON'
          >
            {" "}
            <StaticImage
              src='../images/headshots/nick.jpeg'
              alt='Nick Zarlenga'
              className='team__img'
            />
          </Card>
          <Card
            name='Nick Zarlenga'
            title='Real Estate Broker'
            location='Toronto, ON'
          >
            {" "}
            <StaticImage
              src='../images/headshots/nick.jpeg'
              alt='Nick Zarlenga'
              className='team__img'
            />
          </Card>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Team;
