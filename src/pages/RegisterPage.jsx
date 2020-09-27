import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import UserKit from '../data/UserKit';
import BuildKit from '../data/BuildKit';
import { FormStyled, CenteredContainer } from '../components/global/GlobalStyledComponents';

const ContentWrapper = styled(CenteredContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  padding: 2em;
  width: 100vw;
  background: whitesmoke;
  color: #172341;
  border-radius: 0px;
  -webkit-box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  -moz-box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  @media (min-width: 770px) {
    width: 720px;
    border-radius: 10px;
  }
`;

const TopContent = styled.div`
  margin: 10px 0 1.5em 0;
  text-align: center;
`;

const SubmitButton = styled.button`
  grid-column-start: 2;
  width: 10em;
  padding: 0.8em 0;
  justify-self: end;
  margin-top: 10px;
  background: #496385;
  color: whitesmoke;
  border-style: none;
`;

const Title = styled.h2`
  margin-bottom: 0.5em;
`;

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organisationName, setOrganisationName] = useState('');
  const [organisationKind, setOrganisationKind] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [registerMessage, setRegisterMessage] = useState('Enter details to register');

  const userKit = new UserKit();
  const buildKit = new BuildKit();

  const history = useHistory();

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
      placeholder: '(1,2 or 3)',
      maxLength: 1,
      state: organisationKind,
      setState: setOrganisationKind,
      maxValue: 3,
    },
  ];
  function handleSubmit(event) {
    event.preventDefault();
    userKit.register(firstName, lastName, email, password, organisationName, organisationKind).then((res) => {
      setIsRegistered(true);
      setRegisterMessage('Thanks for signig up! Please check your inbox for an activation link');
    });
  }
  return (
    <main>
      <ContentWrapper>
        <TopContent>
          <Title>Register</Title>
          <p>{registerMessage}</p>
        </TopContent>
        {!isRegistered && (
          <FormStyled onSubmit={handleSubmit}>
            {inputObjects.map((inputItem, index) => {
              const maxValue = inputItem.maxValue ? inputItem.maxValue : null;
              console.log(inputItem.setState);
              console.log(inputItem.state);
              return buildKit.renderInput(
                index,
                inputItem.label,
                inputItem.type,
                inputItem.placeholder,
                inputItem.maxLength,
                inputItem.state,
                inputItem.setState,
                maxValue
              );
            })}
            <SubmitButton type="submit">Register</SubmitButton>
          </FormStyled>
        )}
      </ContentWrapper>
    </main>
  );
}
