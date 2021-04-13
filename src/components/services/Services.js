import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Data } from "./services-data";
import Layout from "../layout/Layout";
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
          <StaticImage src='../../images/buying-home.jpg' alt='Buying a Home' />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Personal/Family Immigration</h1>
          <StaticImage src='../../images/immigration.jpg' alt='Buying a Home' />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Business Relocation</h1>
          <StaticImage
            src='../../images/business-relocation.jpg'
            alt='Buying a Home'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>International Banking</h1>
          <StaticImage src='../../images/banking.jpg' alt='Buying a Home' />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Mortgage Financing</h1>
          <StaticImage
            src='../../images/mortgage-financing.jpg'
            alt='Buying a Home'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Real Estate Law</h1>
          <StaticImage
            src='../../images/real-estate-law02.jpg'
            alt='Buying a Home'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>International Taxation</h1>
          <StaticImage
            src='../../images/international-taxation.jpg'
            alt='Buying a Home'
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>Other Services</h1>
          <StaticImage src='../../images/other.jpg' alt='Buying a Home' />
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
