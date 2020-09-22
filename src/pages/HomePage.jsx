import React from 'react';
import { useHistory } from 'react-router-dom';
import UserKit from '../data/UserKit';

export default function HomePage() {
  const userKit = new UserKit();
  const history = useHistory();

  const token = userKit.getToken();
  if (!token) {
    history.push('/');
  }
  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
      });
  }
  return (
    <main>
      <h1>Home</h1>
      <button onClick={getCustomerList}>Get customer List</button>
    </main>
  );
}
