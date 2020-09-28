import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CenteredContainer } from '../../components/global/GlobalStyledComponents';
import LoginForm from './LoginForm';

const ContentWrapper = styled(CenteredContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-top: 3em;
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

const Title = styled.h2`
  margin: 10px 0 1.5em 0;
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
  return (
    <ContentWrapper as="section">
      <Title>Login</Title>
      <LoginForm />
      <RegisterLinkContainer>
        <Link to="/register">Register new user</Link>
      </RegisterLinkContainer>
    </ContentWrapper>
  );
}
