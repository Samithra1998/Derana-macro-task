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

    emailjs.sendForm('service_wlieyd2', 'template_80h1lra', form.current, 'Hkyo-kSMOBdCFWjLM')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent')
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
