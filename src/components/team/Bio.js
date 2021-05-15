import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import teamData from "../../data/team-data";
import Header from "../layout/Header";
import PageIntro from "../layout/PageIntro";
import Heading from "../ui/Heading";
import Footer from "../layout/footer";
import Layout from "../layout/Layout";

const Bio = () => {
  const pageName = `${teamData.member.name} + 'Bio'`;

  const heading = (
    <>
      <Heading title="About">{teamData.member.name}</Heading>
      <h6>{teamData.member.title}</h6>
    </>
  );

  const blurb = (
    <div className="team__bio">
      {Object.values(teamData.member.paragraphs).map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
  return (
    <div className="team">
      <Header pageName={pageName} />

      <div className="team__bio">
        <Heading>{heading}</Heading>
        <StaticImage
          src="../../images/headshots/nick.jpeg"
          alt={teamData.member.name}
          className="team__bio-pic"
          height={350}
        />
        <span>{blurb}</span>
      </div>

      {/* <PageIntro
        cta="Get in touch"
        path="/contact"
        heading={heading}
        blurb={blurb}
        className="--bio"
      > */}

      {/* </PageIntro> */}
      <Footer banner={false} />
    </div>
  );
};
export default Bio;
