import React from "react";
import Banner from "../ui/Banner";
import Heading from "../ui/Heading";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const Footer = () => {
  const { phone } = useSiteMetadata();
  return (
    <div className='footer'>
      <Heading theme='dark' size=''>
        Get the help you deserve!
      </Heading>
      <Banner className='banner banner__footer'>{phone}</Banner>
      <Heading theme='dark' size=''>
        Call now for a free consultation!
      </Heading>
      <p>
        We might not be able to handle all types of cases due to expertise and
        other various reasons.{" "}
      </p>
      <footer></footer>
    </div>
  );
};

export default Footer;
