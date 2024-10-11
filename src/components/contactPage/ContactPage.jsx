import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 15px;
  background-color: #28a745;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: -15px;
  margin-bottom: 20px;
`;

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

  // Memoize validateForm to avoid unnecessary re-renders
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
  }, [fullName, subject, email, body]); // Memoize based on input fields

  useEffect(() => {
    validateForm(); // Validate form whenever any of the input fields change
  }, [fullName, subject, email, body, validateForm]); // Add validateForm to dependencies

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Form submitted successfully');
      // Handle form submission here (e.g., send data to server)
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

