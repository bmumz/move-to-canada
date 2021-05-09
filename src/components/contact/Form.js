import React, { useState } from "react";
import Dropdown from "../ui/formControls/Dropdown/Dropdown";
import PropTypes from "prop-types";
import formData from "../../data/form-data";

const Form = ({ className }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactPreference, setContactPreference] = useState();
  const [citizenship, setCitizenship] = useState("");
  const [country, setCountry] = useState("");
  const [inquiryType, setInquiryType] = useState();
  const [message, setMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const clientData = {
    name,
    email,
    phone,
    contactPreference,
    citizenship,
    country,
    inquiryType,
    message,
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...clientData,
        [event.target.name]: event.target.value,
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
          <input name='bot-field' />
        </p>
        <input
          type='text'
          aria-label={formData.fields.name}
          placeholder={formData.fields.name}
          name={formData.fields.name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='text'
          aria-label={formData.fields.email}
          placeholder={formData.fields.email}
          name={formData.fields.email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='tel'
          aria-label={formData.fields.phone}
          placeholder={formData.fields.phone}
          name={formData.fields.phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Dropdown
          title='Preferred Contact Method'
          options={formData.method}
          placeholder='Preferred Contact Method'
          onBlur={(e) => setContactPreference(e.target.value)}
          name='Preferred Contact Method'
        />
        <input
          type='text'
          aria-label={formData.fields.citizenship}
          placeholder={formData.fields.citizenship}
          name={formData.fields.citizenship}
          onChange={(e) => setCitizenship(e.target.value)}
          required
        />
        <input
          type='text'
          aria-label={formData.fields.currentCountry}
          placeholder={formData.fields.currentCountry}
          name={formData.fields.currentCountry}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <Dropdown
          title='Inquiry Type'
          options={formData.inquiryType}
          placeholder='Inquiry Type'
          onBlur={(e) => setInquiryType(e.target.value)}
          name='Inquiry Type'
        />
        <textarea
          title='Message'
          placeholder='Message'
          rows={5}
          spellCheck='true'
          name='Message'
          onChange={(e) => setMessage(e.target.value)}
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
