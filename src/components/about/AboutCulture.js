import React from "react";
import aboutData from "../../data/about-data";
import Layout from "../layout/Layout";

const AboutCulture = () => {
  return (
    <div className='about__sectionCulture'>
      <Layout>
        <span>
          <h1>{aboutData.culture.heading}</h1>
          <h4>{aboutData.culture.subheading}</h4>

          <div className='about__examples'>
            {Object.values(aboutData.culture.examples).map((e, i) => (
              <div key={i} className='about__icon--container'>
                <span className='about__icon'>
                  <img src={e.icon} alt={e.title} />
                </span>

                <h4>{e.title}</h4>
              </div>
            ))}
          </div>

          {Object.values(aboutData.culture.paragraphs).map((p, i) => (
            <div key={i} className='about__paragraphs'>
              <span className='about__point'>{p.example}</span>
              <span>{p.sentence}</span>
            </div>
          ))}
        </span>
      </Layout>
    </div>
  );
};

export default AboutCulture;
