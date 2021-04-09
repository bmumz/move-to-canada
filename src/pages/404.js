import * as React from "react";
import Banner from "../components/ui/Banner";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Paragraph from "../components/layout/Paragraph";
import Heading from "../components/ui/Heading";

// markup
const NotFoundPage = () => {
  const pageTitle = "Error 404: Page Not Found!";
  return (
    <main>
      <Header pageName={pageTitle} />
      <Layout>
        <Heading theme='dark' size=''>
          {pageTitle}
        </Heading>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id porta
          nibh venenatis cras sed. Gravida quis blandit turpis cursus in. In
          hendrerit gravida rutrum quisque non tellus. Turpis nunc eget lorem
          dolor sed viverra ipsum nunc. Gravida cum sociis natoque penatibus et
          magnis dis parturient montes. Consequat nisl vel pretium lectus quam
          id leo in vitae. Fermentum dui faucibus in ornare. Proin libero nunc
          consequat interdum varius sit amet. Et sollicitudin ac orci phasellus
          egestas tellus rutrum. Id interdum velit laoreet id.
        </Paragraph>
      </Layout>
      <Footer />
    </main>
  );
};

export default NotFoundPage;
