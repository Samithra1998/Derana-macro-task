import React, {useRef} from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlert,
  StyledLabel,
  StyledMessage,
  StyledContactForm,
} from "./styles";

const Contact = () => {
    const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <StyledContactForm>
    <form ref={form} onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  </StyledContactForm>
  );
};

export default Contact;
