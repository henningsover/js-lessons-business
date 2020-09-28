import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ActivateAccountSection from '../components/login_page/ActivateAccountSection';
import LoginSection from '../components/login_page/LoginSection';
import UserKit from '../data/UserKit';
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

export default function LoginPage() {
  const history = useHistory();
  //Hämtar search params "?uid....&token......"
  const searchString = history.location.search;
  //Inbyggd javascriptmetod
  const urlParameters = new URLSearchParams(searchString);
  //hämtar och sätter uid och token
  const [uid, setUid] = useState(urlParameters.get('uid'));
  const [token, setToken] = useState(urlParameters.get('token'));

  const userKit = new UserKit();
  const loginToken = userKit.getToken();

  useEffect(() => {
    if (loginToken) {
      history.push('/home');
    }
  }, []);

  return (
    <main>
      <HeroImgContainer>
        {uid && token ? (
          <ActivateAccountSection uid={uid} setUid={setUid} token={token} setToken={setToken} />
        ) : (
          <LoginSection />
        )}
      </HeroImgContainer>
    </main>
  );
}
