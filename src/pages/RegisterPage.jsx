import React, { useState } from 'react';
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
  width: 50vw;
  background: whitesmoke;
  color: #172341;
  border-radius: 10px;
  -webkit-box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  -moz-box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
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

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organisationName, setOrganisationName] = useState('');
  const [organisationKind, setOrganisationKind] = useState('');

  const userKit = new UserKit();
  const buildKit = new BuildKit();
  const inputObjects = [
    ['First Name', firstName, setFirstName],
    ['Last Name', lastName, setLastName],
    ['Email', email, setEmail],
    ['Password', password, setPassword],
    ['Organisation Name', organisationName, setOrganisationName],
    ['Organisation Kind (0,1,2)', organisationKind, setOrganisationKind],
  ];
  function handleSubmit(event) {
    event.preventDefault();
    userKit
      .register(firstName, lastName, email, password, organisationName, organisationKind)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <main>
      <ContentWrapper>
        <h2>Register</h2>
        <p>Enter details to register</p>
        <FormStyled onSubmit={handleSubmit}>
          {inputObjects.map((inputItem, index) => {
            return buildKit.renderInput(index, inputItem[0], inputItem[1], inputItem[2]);
          })}
          <SubmitButton type="submit">Register</SubmitButton>
        </FormStyled>
      </ContentWrapper>
    </main>
  );
}
