import React from "react";
import Banner from "../ui/Banner";
import Heading from "../ui/Heading";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const Footer = () => {
  const { phone } = useSiteMetadata();
  return (
    <div className='footer'>
      <Heading color='grey' align='center'>
        Get the help you deserve!
      </Heading>

      <Banner>
        <span>
          <Heading color='white' size='xl'>
            {phone}
          </Heading>
        </span>
      </Banner>

      <Heading color='grey' align='center'>
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
