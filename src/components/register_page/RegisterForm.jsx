import React, { useState } from 'react';
import styled from 'styled-components';
import UserKit from '../../data/UserKit';
import BuildKit from '../../data/BuildKit';
import { FormStyled } from '../global/GlobalStyledComponents';

const SubmitButton = styled.button`
  grid-column-start: 2;
  width: 10em;
  padding: 0.8em 0;
  place-self: end;
  margin-top: 10px;
  background: #496385;
  color: whitesmoke;
  border-style: none;
`;

export default function RegisterForm({ setIsRegistered, setRegisterMessage }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organisationName, setOrganisationName] = useState('');
  const [organisationKind, setOrganisationKind] = useState('');
  const userKit = new UserKit();
  const buildKit = new BuildKit();

  const inputObjects = [
    {
      label: 'First Name',
      type: 'text',
      placeholder: 'John',
      minLength: 1,
      maxLength: 30,
      state: firstName,
      setState: setFirstName,
      pattern: null,
    },
    {
      label: 'Last Name',
      type: 'text',
      placeholder: 'Doe',
      minLength: 1,
      maxLength: 30,
      state: lastName,
      setState: setLastName,
      pattern: null,
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'john.doe@mail.com',
      minLength: 1,
      maxLength: 254,
      state: email,
      setState: setEmail,
      pattern: null,
    },
    {
      label: 'Password',
      type: 'text',
      placeholder: '8-16 characters, must contain numbers and letters',
      minLength: 8,
      maxLength: 60,
      state: password,
      setState: setPassword,
      pattern: '[a-zA-Z0-9]{8,16}$',
    },
    {
      label: 'Organisation Name',
      type: 'text',
      placeholder: `JohnDoe's`,
      minLength: 1,
      maxLength: 100,
      state: organisationName,
      setState: setOrganisationName,
      pattern: null,
    },
    {
      label: 'Organisation Kind',
      type: 'number',
      placeholder: '(0,1 or 2)',
      minLength: 1,
      maxLength: 1,
      state: organisationKind,
      setState: setOrganisationKind,
      pattern: null,
    },
  ];
  function handleSubmit(event) {
    event.preventDefault();
    userKit.register(firstName, lastName, email, password, organisationName, organisationKind).then((res) => {
      if (res.ok) {
        setIsRegistered(true);
        setRegisterMessage('Thanks for signig up! Please check your inbox for an activation link');
      }
    });
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      {inputObjects.map((inputItem, index) => {
        return buildKit.renderInput(
          index,
          inputItem.label,
          inputItem.type,
          inputItem.placeholder,
          inputItem.minLength,
          inputItem.maxLength,
          inputItem.state,
          inputItem.setState,
          inputItem.pattern
        );
      })}
      <SubmitButton type="submit">Register</SubmitButton>
    </FormStyled>
  );
}
