import React, { useState } from "react";
import Dropdown from "../ui/formControls/Dropdown/Dropdown";
import PropTypes from "prop-types";
import formData from "../../data/form-data";

const Form = ({ className }) => {
  const [clientData, setClientData] = useState({});

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onInputChange = (event) => {
    setClientData({
      ...clientData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ ...clientData });

    const form = event.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        ...clientData,
        "form-name": form.getAttribute("name"),
      }),
    })
      .then(() => {
        form.getAttribute("action");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form
        name='Move to Canada Contact Form'
        method='POST'
        action='/thanks/'
        data-netlify-recaptcha='true'
        data-netlify-honeypot='bot-field'
        onSubmit={handleSubmit}
        className={className ? `contact__form ${className}` : "contact__form"}
      >
        <input type='hidden' name='form-name' value='contact' />
        <p hidden>
          <label>Don't fill this out:</label>
          <input name='bot-field' onChange={onInputChange} />
        </p>
        <input
          type='text'
          aria-label={formData.fields.name}
          placeholder={formData.fields.name}
          name='Full Name'
          onChange={onInputChange}
          required
        />
        <input
          type='text'
          aria-label={formData.fields.email}
          placeholder={formData.fields.email}
          name='Email'
          onChange={onInputChange}
          required
        />
        <input
          type='tel'
          aria-label={formData.fields.phone}
          placeholder={formData.fields.phone}
          name={formData.fields.phone}
          onChange={onInputChange}
          required
        />
        <Dropdown
          title='Preferred Contact Method'
          options={formData.method}
          placeholder='Preferred Contact Method'
          onBlur={onInputChange}
          name='Preferred Contact Method'
        />
        <input
          type='text'
          aria-label={formData.fields.citizenship}
          placeholder={formData.fields.citizenship}
          name={formData.fields.citizenship}
          onChange={onInputChange}
          required
        />
        <input
          type='text'
          aria-label={formData.fields.currentCountry}
          placeholder={formData.fields.currentCountry}
          name={formData.fields.currentCountry}
          onChange={onInputChange}
          required
        />
        <Dropdown
          title='Inquiry Type'
          options={formData.inquiryType}
          placeholder='Inquiry Type'
          name='Inquiry Type'
          onBlur={onInputChange}
        />
        <textarea
          title='Message'
          placeholder='Message'
          rows={5}
          spellCheck='true'
          name='Message'
          onChange={onInputChange}
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
