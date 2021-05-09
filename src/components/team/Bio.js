import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import teamData from "../../data/team-data";
import Header from "../layout/Header";
import PageIntro from "../layout/PageIntro";
import Heading from "../ui/Heading";
import Footer from "../layout/footer";

const Bio = () => {
  const pageName = `${teamData.member.name} + 'Bio'`;

  const heading = <Heading title='About'>{teamData.member.name}</Heading>;

  const blurb = (
    <div className='team__bio'>
      <h3>{teamData.member.title}</h3>
      {Object.values(teamData.member.paragraphs).map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
  return (
    <div className='team'>
      <Header pageName={pageName} />

      <PageIntro
        cta='Get in touch'
        path='/contact'
        heading={heading}
        blurb={blurb}
        className='--bio'
      >
        <StaticImage
          src='../../images/headshots/nick.jpeg'
          alt={teamData.member.name}
          className='page-intro__img --bio'
        />
      </PageIntro>
      <Footer banner={false} />
    </div>
  );
};
export default Bio;
