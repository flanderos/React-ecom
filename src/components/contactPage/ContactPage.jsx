import React, { useState, useEffect, useCallback } from 'react';
import {
  FormContainer,
  Form,
  Label,
  Input,
  TextArea,
  SubmitButton,
  ErrorMessage
} from './ContactPage.styled';


const ContactPage = () => {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (fullName.length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters long';
    }

    if (subject.length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters long';
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (body.length < 3) {
      newErrors.body = 'Body must be at least 3 characters long';
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);

    return Object.keys(newErrors).length === 0;
  }, [fullName, subject, email, body]);

  useEffect(() => {
    validateForm();
  }, [fullName, subject, email, body, validateForm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log({
        fullName,
        subject,
        email,
        body,
      });

      alert('Form submitted successfully');
      
    }
  };

  return (
    <FormContainer>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}

        <Label htmlFor="subject">Subject</Label>
        <Input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <Label htmlFor="body">Message</Label>
        <TextArea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="5"
          required
        />
        {errors.body && <ErrorMessage>{errors.body}</ErrorMessage>}

        <SubmitButton type="submit" disabled={!isFormValid}>
          Submit
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactPage;

