import React from "react";
import Button from "../../ui/Button";
import Dropdown from "../../ui/formControls/Dropdown/Dropdown";
import Inquiry from "../../ui/formControls/Dropdown/inquiry";
import Input from "../../ui/formControls/Input";
import Textarea from "../../ui/formControls/Textarea";
import Heading from "../../ui/Heading";

const Contact = () => {
  const handleSubmit = () => {
    alert("Clicked");
  };
  return (
    <div className='contact'>
      <Heading theme='light' size=''>
        Contact Us!
      </Heading>
      <Heading theme='light' size='smaller'>
        for a free case evaluation!
      </Heading>
      <Input type='text' title='Full Name' className='' />
      <Input type='text' title='Email Address' className='' />
      <Input type='tel' title='Phone Number' className='' />
      <Input type='text' title='Country' className='' />
      <Dropdown
        title='Inquiry Type'
        options={Inquiry}
        placeholder='Inquiry Type'
        className=''
      />
      <Textarea title='Message' className='' />
      <Button onClick={handleSubmit} className='button__primary'>
        Submit!
      </Button>
    </div>
  );
};

export default Contact;
