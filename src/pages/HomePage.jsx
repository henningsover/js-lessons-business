import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserKit from '../data/UserKit';

export default function HomePage() {
  const [customerList, setCustomerList] = useState(null);
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
        setCustomerList(data.results);
        console.log(data);
      });
  }
  return (
    <main>
      <h1>Home</h1>
      <button onClick={getCustomerList}>Get customer List</button>
      {customerList &&
        customerList.map((customer, index) => {
          return (
            <div key={index}>
              <p>{customer.name}</p>
            </div>
          );
        })}
    </main>
  );
}
