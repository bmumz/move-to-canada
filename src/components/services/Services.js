import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ServicesData from "../../data/services-data";
import Heading from "../ui/Heading";

const Services = () => {
  return (
    <div className='services'>
      <Heading color='grey' align='center'>
        How We Can Help
      </Heading>

      <div className='services__container-row1'>
        <div className='services__img-container'>
          <h1 className='services__title'>{ServicesData.firstRow.home}</h1>
          <StaticImage
            src='../../images/services/buying-home.jpg'
            alt={ServicesData.firstRow.home}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>
            {ServicesData.firstRow.immigration}
          </h1>
          <StaticImage
            src='../../images/services/immigration.jpg'
            alt={ServicesData.firstRow.immigration}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>
            {ServicesData.firstRow.businessRelocation}
          </h1>
          <StaticImage
            src='../../images/services/business-relocation.jpg'
            alt={ServicesData.firstRow.businessRelocation}
          />
          <span className='services__overlay'></span>
        </div>

        <div className='services__img-container'>
          <h1 className='services__title'>{ServicesData.firstRow.banking}</h1>
          <StaticImage
            src='../../images/services/banking.jpg'
            alt={ServicesData.firstRow.banking}
          />
          <span className='services__overlay'></span>
        </div>
      </div>
      <div className='services__container-row2'>
        <div className='services__img-container'>
          <h1 className='services__title'>{ServicesData.secondRow.mortgage}</h1>
          <StaticImage
            src='../../images/services/mortgage-financing.jpg'
            alt={ServicesData.secondRow.mortgage}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>
            {ServicesData.secondRow.realEstate}
          </h1>
          <StaticImage
            src='../../images/services/real-estate-law02.jpg'
            alt={ServicesData.secondRow.realEstate}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>{ServicesData.secondRow.taxation}</h1>
          <StaticImage
            src='../../images/services/international-taxation.jpg'
            alt={ServicesData.secondRow.taxation}
          />
          <span className='services__overlay'></span>
        </div>
        <div className='services__img-container'>
          <h1 className='services__title'>{ServicesData.secondRow.other}</h1>
          <StaticImage
            src='../../images/services/other.jpg'
            alt={ServicesData.secondRow.other}
          />
          <span className='services__overlay'></span>
        </div>
      </div>

      <div className='services__container-mobile'>
        <Heading color='grey' size='sm'>
          As well as...
        </Heading>
        <ul>
          {Object.values(ServicesData.secondRow).map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
