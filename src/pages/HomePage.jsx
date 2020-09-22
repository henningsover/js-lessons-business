import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserKit from '../data/UserKit';
import { UserContext } from '../contexts/UserContext';
import CreateCustomerForm from '../components/home_page/CreateCustomerForm';
import CustomerList from '../components/home_page/CustomerList';

export default function HomePage() {
  const { customerList, setCustomerList } = useContext(UserContext);
  const [shouldLoadCustomerList, setshouldLoadCustomerList] = useState(true);
  const [userData, setUserData] = useState(null);
  const userKit = new UserKit();
  const history = useHistory();

  const token = userKit.getToken();
  if (!token) {
    history.push('/');
  }

  function getUser() {
    userKit
      .getUser()
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
        console.log(data.results);
      });
  }

  useEffect(() => {
    getCustomerList();
    getUser();
  }, []);

  return (
    <main>
      <h1>Home</h1>
      {userData && (
        <div>
          <p>{`Logged in as: ${userData.firstName} ${userData.lastName}`} </p>
          <p>{`Email: ${userData.email}`}</p>
        </div>
      )}
      {customerList ? <CustomerList /> : <span>No customers yet</span>}
      <hr></hr>
      <CreateCustomerForm setshouldLoadCustomerList={setshouldLoadCustomerList} />
    </main>
  );
}
