import React from "react";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/Header";
import Layout from "../../components/layout/Layout";
import Card from "../../components/team/Card";
import Heading from "../../components/ui/Heading";
import { StaticImage } from "gatsby-plugin-image";
import teamData from "../../data/team-data";

const Team = () => {
  const pageTitle = "Our Team";

  return (
    <>
      <Header pageName={pageTitle} />
      <Layout>
        <section>
          <Heading title={`Meet ${pageTitle}`}>of Professionals</Heading>
          <p>
            Partner with a professional who knows your goals, your culture and
            how you do business. Our experienced team is on-the-ground, in all
            cities across Canada!
          </p>

          <div className="team__cards">
            <Card
              name={teamData.member.name}
              title={teamData.member.title}
              location={teamData.member.location}
            >
              <StaticImage
                src="../../images/headshots/nick.jpeg"
                alt={teamData.member.name}
                className="team__img-container"
                imgClassName="team__img"
              />
            </Card>
          </div>
        </section>
      </Layout>
      <Footer banner={true} />
    </>
  );
};

export default Team;
