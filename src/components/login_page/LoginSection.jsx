import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import UserKit from '../../data/UserKit';
import BuildKit from '../../data/BuildKit';
import { UserContext } from '../../contexts/UserContext';
import { FormStyled, CenteredContainer } from '../../components/global/GlobalStyledComponents';

const ContentWrapper = styled(CenteredContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  padding: 2em;
  width: 100vw;
  height: 370px;
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

const LoginForm = styled(FormStyled)`
  display: flex;
  max-width: 20em;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0.5em;
  @media (min-width: 800px) {
    width: 50%;
  }
`;

const Title = styled.h2`
  margin: 10px 0 1.5em 0;
`;

const LoginButton = styled.button`
  grid-column-start: 2;
  width: 10em;
  padding: 0.8em 0;
  place-self: end;
  margin-top: 10px;
  background: #496385;
  color: whitesmoke;
  border-style: none;
  &:hover {
    background: #5981b5;
    transition: background-color 0.2s;
  }
`;

const RegisterLinkContainer = styled.div`
  height: 100%;
  background: ;
  a {
    display: flex;
    color: #172341;
    align-items: center;
    text-decoration: none;
    padding: 0.3rem 0.4rem;
    &:hover {
      font-size: 18px;
      // transition: font-size 1s;
    }
  }
`;

export default function LoginSection() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const userKit = new UserKit();
  const buildKit = new BuildKit();
  const history = useHistory();

  function handleLogin(event) {
    event.preventDefault();
    userKit
      .login(loginEmail, loginPassword)
      .then((res) => res.json())
      .then((data) => {
        userKit.setToken(data.token);
        history.push('/home');
      });
  }
  return (
    <ContentWrapper as="section">
      <Title>Login</Title>
      <LoginForm onSubmit={handleLogin}>
        {buildKit.renderInput(1, 'Email', 'email', 'john.doe@mail.com', 245, loginEmail, setLoginEmail)}
        {buildKit.renderInput(2, 'Password', 'password', '****', 100, loginPassword, setLoginPassword)}
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
      <RegisterLinkContainer>
        <Link to="/register">Register new user</Link>
      </RegisterLinkContainer>
    </ContentWrapper>
  );
}
