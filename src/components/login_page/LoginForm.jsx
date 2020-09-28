import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FormStyled } from '../global/GlobalStyledComponents';
import UserKit from '../../data/UserKit';
import BuildKit from '../../data/BuildKit';

const LoginFormStyled = styled(FormStyled)`
  display: flex;
  max-width: 20em;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0.5em;
  @media (min-width: 800px) {
    width: 50%;
  }
`;

const LoginButton = styled.button`
  width: 10em;
  padding: 0.8em 0;
  place-self: flex-end;
  margin-top: 10px;
  background: #496385;
  color: whitesmoke;
  border-style: none;
  &:hover {
    background: #5981b5;
    transition: background-color 0.2s;
  }
`;

export default function Styled() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const userKit = new UserKit();
  const buildKit = new BuildKit();
  const history = useHistory();

  const inputObjects = [
    {
      label: 'Email',
      type: 'email',
      placeholder: 'john.doe@mail.com',
      minLength: 1,
      maxLength: 245,
      state: loginEmail,
      setState: setLoginEmail,
      pattern: null,
    },
    {
      label: 'Password',
      type: 'password',
      placeholder: '****',
      minLength: 1,
      maxLength: 16,
      state: loginPassword,
      setState: setLoginPassword,
      pattern: null,
    },
  ];

  function handleLogin(event) {
    event.preventDefault();
    userKit
      .login(loginEmail, loginPassword)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Wrong email or password');
        }
      })
      .then((data) => {
        userKit.setToken(data.token);
        history.push('/home');
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <LoginFormStyled onSubmit={handleLogin}>
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
      <LoginButton type="submit">Login</LoginButton>
    </LoginFormStyled>
  );
}
