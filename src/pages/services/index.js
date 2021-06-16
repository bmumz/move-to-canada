import React from "react";
import PageIntro from "../../components/layout/PageIntro";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/footer/Footer";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import Heading from "../../components/ui/Heading";
import servicesData from "../../data/services-data";

//svg
import World from "../../components/services/svg/World";

const Services = () => {
  const pageTitle = "Services";

  const { title } = useSiteMetadata();

  const heading = <Heading title={`${pageTitle} Offered by`}>{title}</Heading>;

  const blurb = <p>{servicesData.blurb} </p>;

  return (
    <div className="servicesPg">
      <Header pageName={pageTitle} />
      <PageIntro
        heading={heading}
        blurbHeading={servicesData.blurbHeading}
        blurb={blurb}
        path="#services"
        cta="Learn more"
      >
        <StaticImage
          src="../images/lake-louise.jpeg"
          alt="Lake Louise, Alberta"
          className="pageIntro__img"
        />
      </PageIntro>
      <section className="services__details" id="services">
        <div className="service">
          <span>
            <World />
          </span>

          <span>
            <h2>{servicesData.details}</h2>
          </span>
        </div>
      </section>
      <div className="services__ind--container">
        <div className="services__img-container">
          <a href="/services/buying-a-home" className="services__title">
            <h3>Buying a Home</h3>
          </a>
          <StaticImage
            src="../../images/services/first-row/1 Buying a Home.jpg"
            alt="Buying a Home"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
        <div className="services__img-container">
          <a
            href="/services/personal-and-family-immigration"
            className="services__title"
          >
            <h3>Personal and Family Immigration</h3>
          </a>
          <StaticImage
            src="../../images/services/first-row/2 Personal & Family Immigration.jpg"
            alt="Personal and Family Immigration"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
        <div className="services__img-container">
          <a href="/services/employee-relocation" className="services__title">
            <h3>Employee Relocation</h3>
          </a>

          <StaticImage
            src="../../images/services/first-row/3 Business Relocation.jpg"
            alt="Business Relocation"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
      </div>
      <div className="services__ind--container">
        <div className="services__img-container">
          <a href="/services/mortgage-financing" className="services__title">
            <h3>Mortgage Financing</h3>
          </a>
          <StaticImage
            src="../../images/services/second-row/1 Mortgage Financing.jpg"
            alt="Mortgage Financing"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
        <div className="services__img-container">
          <a href="/services/international-tax" className="services__title">
            <h3>International Taxation</h3>
          </a>
          <StaticImage
            src="../../images/services/second-row/2 International Taxation.jpg"
            alt="International Taxation"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
        <div className="services__img-container">
          <a href="/services/real-estate-law" className="services__title">
            <h3>Real Estate Law</h3>
          </a>

          <StaticImage
            src="../../images/services/second-row/3 Real Estate Law.jpg"
            alt="Real Estate Law"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
      </div>
      <div className="services__ind--container">
        <div className="services__img-container">
          <a href="/services/business-relocation" className="services__title">
            <h3>Business Relocation</h3>
          </a>

          <StaticImage
            src="../../images/services/third-row/1 Business Relocation.jpg"
            alt="Business Relocation"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
        <div className="services__img-container">
          <a href="/services/international-banking" className="services__title">
            <h3>International Banking</h3>
          </a>

          <StaticImage
            src="../../images/services/third-row/2 Moving Money to Canada.jpg"
            alt="Moving Money to Canada"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
        <div className="services__img-container">
          <a href="/services/additional-services" className="services__title">
            <h3>Additional Services</h3>
          </a>

          <StaticImage
            src="../../images/services/third-row/3 Other Services.jpg"
            alt="Other Services"
            className="services__img"
          />
          <span className="services__overlay"></span>
        </div>
      </div>

      <Footer banner={true} />
    </div>
  );
};

export default Services;
