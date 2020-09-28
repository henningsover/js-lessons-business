import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserKit from '../data/UserKit';
import styled from 'styled-components';
import { CenteredContainer } from '../components/global/GlobalStyledComponents';
import RegisterForm from '../components/register_page/RegisterForm';
import hero from '../assets/hero.jpg';
const HeroImgContainer = styled.div`
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: calc(100vh - 3em);
  padding-top: 3em;
  width: 100vw;
`;

const ContentWrapper = styled(CenteredContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-top: 3em;
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
      <HeroImgContainer>
        <ContentWrapper>
          <TopContent>
            <Title>Register</Title>
            <p>{registerMessage}</p>
          </TopContent>
          {!isRegistered && <RegisterForm setIsRegistered={setIsRegistered} setRegisterMessage={setRegisterMessage} />}
        </ContentWrapper>
      </HeroImgContainer>
    </main>
  );
}
