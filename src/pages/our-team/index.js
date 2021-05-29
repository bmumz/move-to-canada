import React from "react";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/Header";
import Cards from "../../components/team/Cards";
import Heading from "../../components/ui/Heading";

const Team = () => {
  const pageTitle = "Our Team";

  return (
    <>
      <Header pageName={pageTitle} />

      <section className="team__pg">
        <Heading title={`Meet ${pageTitle}`}>of Professionals</Heading>
        <p>
          Partner with a professional who knows your goals, your culture and how
          you do business. Our experienced team is on-the-ground, in all in all
          provinces across Canada!
        </p>

        <Cards />
      </section>

      <Footer banner={true} />
    </>
  );
};

export default Team;
