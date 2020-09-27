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
    { label: 'First Name', type: 'text', placeholder: 'John', maxLength: 30, state: firstName, setState: setFirstName },
    { label: 'Last Name', type: 'text', placeholder: 'Doe', maxLength: 30, state: lastName, setState: setLastName },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'john.doe@mail.com',
      maxLength: 254,
      state: email,
      setState: setEmail,
    },
    { label: 'Password', type: 'text', placeholder: '****', maxLength: 60, state: password, setState: setPassword },
    {
      label: 'Organisation Name',
      type: 'text',
      placeholder: `JohnDoe's`,
      maxLength: 100,
      state: organisationName,
      setState: setOrganisationName,
    },
    {
      label: 'Organisation Kind',
      type: 'number',
      placeholder: '(0,1 or 2)',
      maxLength: 1,
      state: organisationKind,
      setState: setOrganisationKind,
      maxValue: 2,
      minValue: 0,
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
        const maxValue = inputItem.maxValue !== undefined ? inputItem.maxValue : null;
        const minValue = inputItem.minValue !== undefined ? inputItem.minValue : null;
        console.log(inputItem.minValue);
        console.log(minValue, inputItem.label);
        console.log(maxValue, inputItem.label);
        return buildKit.renderInput(
          index,
          inputItem.label,
          inputItem.type,
          inputItem.placeholder,
          inputItem.maxLength,
          inputItem.state,
          inputItem.setState,
          maxValue,
          minValue
        );
      })}
      <SubmitButton type="submit">Register</SubmitButton>
    </FormStyled>
  );
}
