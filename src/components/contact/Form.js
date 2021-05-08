import React, { useState } from "react";
import Dropdown from "../ui/formControls/Dropdown/Dropdown";
import PropTypes from "prop-types";
import { useInput } from "../../hooks/use-input";
import formData from "../../data/form-data";
import axios from "axios";

const Form = ({ className }) => {
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: phone, bind: bindPhone, reset: resetPhone } = useInput("");
  const {
    value: citizenship,
    bind: bindCitizenship,
    reset: resetCitizenship,
  } = useInput("");
  const { value: country, bind: bindCountry, reset: resetCountry } = useInput(
    ""
  );
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput(
    ""
  );
  // state
  const [status, setStatus] = useState("");
  const [contactPreference, setContactPreference] = useState();
  const [inquiryType, setInquiryType] = useState();

  // err handling
  const success = `Your email has been sent! We'll be in touch shortly!`;
  const err = `There was an unfortunate error! Please email/call us directly.`;

  const handleContactPreference = (event) => {
    setContactPreference(event.target.value);
  };

  const handleInquiryType = (event) => {
    setInquiryType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/contact", {
        headers: { "Content-Type": "application/json" },
        data: {
          name,
          email,
          phone,
          contactPreference,
          citizenship,
          country,
          inquiryType,
          message,
        },
      })
      .then((response) => {
        if (response.data.status === "success") {
          setStatus(success);
          resetForm();
        }
      })
      .catch((error) => {
        console.log(error);
        setStatus(err);
      });
  };

  const resetForm = () => {
    resetName();
    resetEmail();
    resetPhone();
    resetCitizenship();
    resetCountry();
    resetMessage();
  };
  return (
    <>
      {status}
      <form
        className={className ? `contact__form ${className}` : "contact__form"}
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          aria-label={formData.fields.name}
          placeholder={formData.fields.name}
          {...bindName}
          required
        />
        <input
          type='text'
          aria-label={formData.fields.email}
          placeholder={formData.fields.email}
          {...bindEmail}
          required
        />
        <input
          type='tel'
          aria-label={formData.fields.phone}
          placeholder={formData.fields.phone}
          {...bindPhone}
          required
        />
        <Dropdown
          title='Preferred Contact Method'
          options={formData.method}
          placeholder='Preferred Contact Method'
          onBlur={handleContactPreference}
        />
        <input
          type='text'
          aria-label='Citizenship'
          placeholder={formData.fields.citizenship}
          {...bindCitizenship}
          required
        />
        <input
          type='text'
          aria-label={formData.fields.currentCountry}
          placeholder={formData.fields.currentCountry}
          {...bindCountry}
          required
        />
        <Dropdown
          title='Inquiry Type'
          options={formData.inquiryType}
          placeholder='Inquiry Type'
          onBlur={handleInquiryType}
        />
        <textarea
          title='Message'
          placeholder='Message'
          rows={5}
          spellCheck='true'
          {...bindMessage}
          required
        />
        <input type='submit' value='Submit' className='button__red' />
      </form>
    </>
  );
};

Form.propTypes = {
  className: PropTypes.string,
};

export default Form;
