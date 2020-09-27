import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserKit from '../data/UserKit';
import styled from 'styled-components';
import { CenteredContainer } from '../components/global/GlobalStyledComponents';
import RegisterForm from '../components/register_page/RegisterForm';

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

const Title = styled.h2`
  margin-bottom: 0.5em;
`;

export default function RegisterPage() {
  const userKit = new UserKit();
  const loginToken = userKit.getToken();
  const history = useHistory();
  if (loginToken) {
    history.push('/home');
  }
  const [isRegistered, setIsRegistered] = useState(false);
  const [registerMessage, setRegisterMessage] = useState('Enter details to register');

  return (
    <main>
      <ContentWrapper>
        <TopContent>
          <Title>Register</Title>
          <p>{registerMessage}</p>
        </TopContent>
        {!isRegistered && <RegisterForm setIsRegistered={setIsRegistered} setRegisterMessage={setRegisterMessage} />}
      </ContentWrapper>
    </main>
  );
}
