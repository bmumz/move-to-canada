import React from "react";
import Banner from "../ui/Banner";
import Heading from "../ui/Heading";

const Footer = () => {
  return (
    <div className="footer">
      <Heading theme="dark" size="">
        Get the help you deserve!
      </Heading>
      <Banner className="banner banner__footer">1-800-321-MOVE</Banner>
      <Heading theme="dark" size="">
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
