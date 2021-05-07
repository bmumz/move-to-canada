import React from "react";
import Form from "./Form";

const ContactHero = () => {
  const handleSubmit = () => {
    alert("Clicked");
  };
  return (
    <div className='contact'>
      <h2 className='heading__white'>Contact Us!</h2>
      <h3 className='heading__white'>for a free case evaluation!</h3>
      <Form onClick={handleSubmit} onSubmit={handleSubmit} />
    </div>
  );
};

export default ContactHero;
