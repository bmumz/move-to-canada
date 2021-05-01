import React from "react";
import Button from "../ui/Button";
import Dropdown from "../ui/formControls/Dropdown/Dropdown";
import Inquiry from "../ui/formControls/Dropdown/inquiry";
import Input from "../ui/formControls/Input";
import Textarea from "../ui/formControls/Textarea";

const Contact = () => {
  const handleSubmit = () => {
    alert("Clicked");
  };
  return (
    <div className='contact'>
      <h2 className='heading__white'>Contact Us!</h2>
      <h3 className='heading__white'>for a free case evaluation!</h3>
      <Input type='text' title='Full Name' />
      <Input type='text' title='Email Address' />
      <Input type='tel' title='Phone Number' />
      <Input type='text' title='Country' />
      <Dropdown
        title='Inquiry Type'
        options={Inquiry}
        placeholder='Inquiry Type'
      />
      <Textarea title='Message' />
      <Button onClick={handleSubmit} className='button__red'>
        Submit!
      </Button>
    </div>
  );
};

export default Contact;
