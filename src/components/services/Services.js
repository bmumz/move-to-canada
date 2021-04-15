import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ServicesData from "./services-data";
import Heading from "../ui/Heading";

const Services = () => {
  return (
    <div>
      <Heading theme='dark' size=''>
        How We Can Help
      </Heading>

      <div className='services__container-desktop'>
        <div className='services__img-container'>
          <h1 className='services__title'>{ServicesData.home}</h1>
          <StaticImage
            src='../../images/services/buying-home.jpg'
            alt={ServicesData.home}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>{ServicesData.immigration}</h1>
          <StaticImage
            src='../../images/services/immigration.jpg'
            alt={ServicesData.immigration}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>{ServicesData.businessRelocation}</h1>
          <StaticImage
            src='../../images/services/business-relocation.jpg'
            alt={ServicesData.businessRelocation}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>{ServicesData.banking}</h1>
          <StaticImage
            src='../../images/services/banking.jpg'
            alt={ServicesData.banking}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>{ServicesData.mortgage}</h1>
          <StaticImage
            src='../../images/services/mortgage-financing.jpg'
            alt={ServicesData.mortgage}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>{ServicesData.realEstate}</h1>
          <StaticImage
            src='../../images/services/real-estate-law02.jpg'
            alt={ServicesData.realEstate}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>{ServicesData.taxation}</h1>
          <StaticImage
            src='../../images/services/international-taxation.jpg'
            alt={ServicesData.taxation}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>{ServicesData.other}</h1>
          <StaticImage
            src='../../images/services/other.jpg'
            alt={ServicesData.other}
          />
          <span className='services__overlay'></span>
        </div>
      </div>
      <div className='services__container-mobile'>
        <ul>
          {Object.values(ServicesData).map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
