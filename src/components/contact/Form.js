import React from "react";
import Button from "../ui/Button";
import Dropdown from "../ui/formControls/Dropdown/Dropdown";
import Inquiry from "../ui/formControls/Dropdown/inquiry";
import Input from "../ui/formControls/Input";
import Textarea from "../ui/formControls/Textarea";
import PropTypes from "prop-types";

const Form = ({ onClick, onSubmit, className }) => {
  const citizenship = `Applicant's Citizenship`;
  const country = `Applicant's Current Country of Residence`;
  return (
    <form
      className={className ? `contact__form ${className}` : "contact__form"}
      onSubmit={onSubmit}
    >
      <Input type='text' title='Full Name' />
      <Input type='text' title='Email Address' />
      <Input type='tel' title='Phone Number' />
      <Input type='text' title={citizenship} />
      <Input type='text' title={country} />
      <Dropdown
        title='Inquiry Type'
        options={Inquiry}
        placeholder='Inquiry Type'
      />
      <Textarea title='Message' />
      <Button onClick={onClick} className='button__red'>
        Submit!
      </Button>
    </form>
  );
};

Form.propTypes = {
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

export default Form;
