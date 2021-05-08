import React from "react";
import Banner from "../../ui/Banner";
import { useSiteMetadata } from "../../../hooks/use-site-metadata";

const FooterBanner = () => {
  const { phone } = useSiteMetadata();
  return (
    <div className='footer__banner'>
      <h2 className='heading__black '>Get the help you deserve!</h2>
      <Banner>
        <h1 className='heading__bold'>{phone}</h1>
      </Banner>
      <h2 className='heading__center heading__black '>
        Call now for a free consultation!
      </h2>
      <p className='footer__disclaimer'>
        We might not be able to handle all types of cases due to expertise and
        other various reasons.
      </p>
    </div>
  );
};

export default FooterBanner;
