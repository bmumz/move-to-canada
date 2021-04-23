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
      <Heading color='white' weight='bold'>
        Contact Us!
      </Heading>
      <Heading color='white' size='sm' weight='reg'>
        for a free case evaluation!
      </Heading>
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
      <Button onClick={handleSubmit} className='button__primary'>
        Submit!
      </Button>
    </div>
  );
};

export default Contact;
