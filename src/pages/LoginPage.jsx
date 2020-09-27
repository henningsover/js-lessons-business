import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ActivateAccountSection from '../components/login_page/ActivateAccountSection';
import LoginSection from '../components/login_page/LoginSection';
import UserKit from '../data/UserKit';

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
      {uid && token ? (
        <ActivateAccountSection uid={uid} setUid={setUid} token={token} setToken={setToken} />
      ) : (
        <LoginSection />
      )}
    </main>
  );
}
