import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Data } from "./services-data";
import Heading from "../ui/Heading";

const Services = () => {
  return (
    <div className='grid'>
      <Heading theme='dark' size=''>
        How We Can Help
      </Heading>

      <div className='services__container-desktop'>
        <div className='services__img-container'>
          <h1 className='services__title'>Buying a Home</h1>
          <StaticImage
            src='../../images/services/buying-home.jpg'
            alt='{Data[0].title}'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Personal/Family Immigration</h1>
          <StaticImage
            src='../../images/services/immigration.jpg'
            alt='{Data[1].title}'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Business Relocation</h1>
          <StaticImage
            src='../../images/services/business-relocation.jpg'
            alt='{Data[2].title}'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>International Banking</h1>
          <StaticImage
            src='../../images/services/banking.jpg'
            alt='{Data[3].title}'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Mortgage Financing</h1>
          <StaticImage
            src='../../images/services/mortgage-financing.jpg'
            alt='{Data[4].title}'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Real Estate Law</h1>
          <StaticImage
            src='../../images/services/real-estate-law02.jpg'
            alt='{Data[5].title}'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>International Taxation</h1>
          <StaticImage
            src='../../images/services/international-taxation.jpg'
            alt='{Data[6].title}'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Other Services</h1>
          <StaticImage
            src='../../images/services/other.jpg'
            alt='{Data[7].title}'
          />
          <span className='services__overlay'></span>
        </div>
      </div>
      <div className='services__container-mobile'>
        <ul>
          {Data.map((service, index) => (
            <li key={index}>{service.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
