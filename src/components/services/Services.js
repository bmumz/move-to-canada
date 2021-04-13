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
            src='../../images/buying-home.jpg'
            alt='{Data[0].title}'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Personal/Family Immigration</h1>
          <StaticImage
            src='../../images/immigration.jpg'
            alt='{Data[1].title}'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Business Relocation</h1>
          <StaticImage
            src='../../images/business-relocation.jpg'
            alt='{Data[2].title}'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>International Banking</h1>
          <StaticImage src='../../images/banking.jpg' alt='{Data[3].title}' />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Mortgage Financing</h1>
          <StaticImage
            src='../../images/mortgage-financing.jpg'
            alt='{Data[4].title}'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Real Estate Law</h1>
          <StaticImage
            src='../../images/real-estate-law02.jpg'
            alt='{Data[5].title}'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>International Taxation</h1>
          <StaticImage
            src='../../images/international-taxation.jpg'
            alt='{Data[6].title}'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Other Services</h1>
          <StaticImage src='../../images/other.jpg' alt='{Data[7].title}' />
          <span className='services__overlay'></span>
        </div>
      </div>
      <div className='services__container-mobile'>
        <ul>
          <li>
            {Data.map((service, index) => (
              <li key={index}>{service.title}</li>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
