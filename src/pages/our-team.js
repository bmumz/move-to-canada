import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Heading from "../components/ui/Heading";

const Team = () => {
  const pageTitle = "Our Team";
  return (
    <div>
      <Header pageName={pageTitle} />
      <Layout>
        <Heading color='grey'>{pageTitle}</Heading>
        <img
          src='https://img.freepik.com/free-vector/default-placeholder-avatar-profile-gray-background-man-woman_146706-350.jpg?size=626&ext=jpg&ga=GA1.2.418561836.1617148800'
          alt='Team Placeholder'
        />
      </Layout>
      <Footer />
    </div>
  );
};

export default Team;
